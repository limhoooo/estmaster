import type {
  CPU,
  GPU,
  BottleneckResult,
  GameDiagResult,
  Recommendation,
  RecommendTier,
  RecommendTierKey,
  CompatibilityWarning,
  GameGrade,
} from '@/lib/types';
import { getMockPrice } from '@/lib/data/mock-prices';
import { calculateGameResults } from '@/lib/engine/game-grade';

const TIER_LABELS: Record<RecommendTierKey, string> = {
  budget: '가성비',
  balanced: '추천',
  performance: '최상',
};

const TIER_KEYS: RecommendTierKey[] = ['budget', 'balanced', 'performance'];

function isImprovement(before: GameGrade, after: GameGrade): boolean {
  const order: GameGrade[] = ['smooth', 'playable', 'difficult'];
  return order.indexOf(after) < order.indexOf(before);
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
  const upgradeComponent: 'CPU' | 'GPU' =
    bottleneck.bottleneckType === 'CPU' ? 'CPU' : 'GPU';

  const games = currentGameResults.map(r => r.game);

  if (upgradeComponent === 'GPU') {
    // 현재보다 5% 이상 높은 GPU, 점수 오름차순 정렬
    const sorted = allGpus
      .filter(g => g.score > userGpu.score * 1.05)
      .sort((a, b) => a.score - b.score);

    if (sorted.length === 0) return null;

    // 3단계 선택: 각 단계는 이전 단계보다 25% 이상 높은 첫 번째 GPU
    const selected: GPU[] = [];
    selected.push(sorted[0]); // budget

    const balanced = sorted.find(g => g.score > selected[0].score * 1.25);
    if (balanced) {
      selected.push(balanced);
      const perf = sorted.find(g => g.score > balanced.score * 1.25);
      if (perf) selected.push(perf);
    }

    const tiers: RecommendTier[] = selected.map((gpu, i) => {
      const warnings: CompatibilityWarning[] = [];
      if (gpu.psu_watt > currentPsuWatt) {
        warnings.push({
          type: 'psu',
          message: `권장 파워 ${gpu.psu_watt}W — 현재 파워(${currentPsuWatt}W) 교체가 필요할 수 있습니다.`,
        });
      }

      const afterResults = calculateGameResults(userCpu, gpu, userRam, games, allCpus, allGpus);
      const improvedGames = currentGameResults
        .map((before, j) => ({
          name: before.game.name,
          before: before.overallGrade,
          after: afterResults[j].overallGrade,
        }))
        .filter(g => isImprovement(g.before, g.after));

      return {
        tier: TIER_KEYS[i],
        label: TIER_LABELS[TIER_KEYS[i]],
        recommendedModel: gpu.model,
        price: getMockPrice(gpu.model),
        warnings,
        improvedGames,
      };
    });

    return { component: 'GPU', currentModel: userGpu.model, tiers };

  } else {
    // CPU 업그레이드
    const sorted = allCpus
      .filter(c => c.score > userCpu.score * 1.05)
      .sort((a, b) => a.score - b.score);

    if (sorted.length === 0) return null;

    // budget: 같은 소켓 우선 (메인보드 교체 불필요)
    const budgetSameSocket = sorted.find(c => c.socket === userCpu.socket);
    const budgetCpu = budgetSameSocket ?? sorted[0];

    const selected: CPU[] = [budgetCpu];

    const balanced = sorted.find(c => c.score > budgetCpu.score * 1.25);
    if (balanced) {
      selected.push(balanced);
      const perf = sorted.find(c => c.score > balanced.score * 1.25);
      if (perf) selected.push(perf);
    }

    const tiers: RecommendTier[] = selected.map((cpu, i) => {
      const warnings: CompatibilityWarning[] = [];
      if (cpu.socket !== userCpu.socket) {
        warnings.push({
          type: 'socket',
          message: `소켓 ${cpu.socket} — 현재 소켓(${userCpu.socket})과 달라 메인보드 교체가 필요합니다.`,
        });
      }

      const afterResults = calculateGameResults(cpu, userGpu, userRam, games, allCpus, allGpus);
      const improvedGames = currentGameResults
        .map((before, j) => ({
          name: before.game.name,
          before: before.overallGrade,
          after: afterResults[j].overallGrade,
        }))
        .filter(g => isImprovement(g.before, g.after));

      return {
        tier: TIER_KEYS[i],
        label: TIER_LABELS[TIER_KEYS[i]],
        recommendedModel: cpu.model,
        price: getMockPrice(cpu.model),
        warnings,
        improvedGames,
      };
    });

    return { component: 'CPU', currentModel: userCpu.model, tiers };
  }
}
