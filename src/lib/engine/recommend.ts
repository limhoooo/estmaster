import type {
  CPU,
  GPU,
  BottleneckResult,
  GameDiagResult,
  Recommendation,
  CompatibilityWarning,
  GameGrade,
} from '@/lib/types';
import { getMockPrice } from '@/lib/data/mock-prices';
import { calculateGameResults } from '@/lib/engine/game-grade';

const GRADE_ORDER: GameGrade[] = ['smooth', 'playable', 'difficult'];

function isImprovement(before: GameGrade, after: GameGrade): boolean {
  return GRADE_ORDER.indexOf(after) < GRADE_ORDER.indexOf(before);
}

export function getRecommendation(
  userCpu: CPU,
  userGpu: GPU,
  bottleneck: BottleneckResult,
  currentGameResults: GameDiagResult[],
  userRam: number,
  allCpus: CPU[],
  allGpus: GPU[],
  currentPsuWatt: number
): Recommendation | null {
  // Default to GPU upgrade for 'balanced' and 'GPU' cases (GPU = more visual impact)
  const upgradeComponent: 'CPU' | 'GPU' =
    bottleneck.bottleneckType === 'CPU' ? 'CPU' : 'GPU';

  const warnings: CompatibilityWarning[] = [];
  const games = currentGameResults.map(r => r.game);

  if (upgradeComponent === 'GPU') {
    const candidates = allGpus
      .filter(g => g.score > userGpu.score * 1.05)
      .sort((a, b) => a.score - b.score);

    if (candidates.length === 0) return null;

    const recGpu = candidates[0];

    if (recGpu.psu_watt > currentPsuWatt) {
      warnings.push({
        type: 'psu',
        message: `추천 GPU(${recGpu.model})의 권장 파워는 ${recGpu.psu_watt}W입니다. 현재 파워(${currentPsuWatt}W) 교체를 고려하세요.`,
      });
    }

    const afterResults = calculateGameResults(userCpu, recGpu, userRam, games, allCpus, allGpus);
    const improvedGames = currentGameResults
      .map((before, i) => ({
        name: before.game.name,
        before: before.overallGrade,
        after: afterResults[i].overallGrade,
      }))
      .filter(g => isImprovement(g.before, g.after));

    return {
      component: 'GPU',
      currentModel: userGpu.model,
      recommendedModel: recGpu.model,
      price: getMockPrice(recGpu.model),
      warnings,
      improvedGames,
    };
  } else {
    const candidates = allCpus
      .filter(c => c.score > userCpu.score * 1.05)
      .sort((a, b) => a.score - b.score);

    if (candidates.length === 0) return null;

    // Prefer same socket to avoid motherboard replacement
    const recCpu = candidates.find(c => c.socket === userCpu.socket) ?? candidates[0];

    if (recCpu.socket !== userCpu.socket) {
      warnings.push({
        type: 'socket',
        message: `추천 CPU(${recCpu.model})의 소켓(${recCpu.socket})이 현재 소켓(${userCpu.socket})과 달라 메인보드 교체가 필요합니다.`,
      });
    }

    const afterResults = calculateGameResults(recCpu, userGpu, userRam, games, allCpus, allGpus);
    const improvedGames = currentGameResults
      .map((before, i) => ({
        name: before.game.name,
        before: before.overallGrade,
        after: afterResults[i].overallGrade,
      }))
      .filter(g => isImprovement(g.before, g.after));

    return {
      component: 'CPU',
      currentModel: userCpu.model,
      recommendedModel: recCpu.model,
      price: getMockPrice(recCpu.model),
      warnings,
      improvedGames,
    };
  }
}
