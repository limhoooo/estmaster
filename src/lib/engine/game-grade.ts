import type { CPU, GPU, Game, GameDiagResult, GameGrade } from '@/lib/types';

const GRADE_ORDER: GameGrade[] = ['smooth', 'playable', 'difficult'];

function getGrade(userScore: number, minScore: number | null, recScore: number | null): GameGrade {
  if (minScore === null || recScore === null) return 'smooth';
  if (userScore >= recScore) return 'smooth';
  if (userScore >= minScore) return 'playable';
  return 'difficult';
}

function worseGrade(a: GameGrade, b: GameGrade): GameGrade {
  return GRADE_ORDER[Math.max(GRADE_ORDER.indexOf(a), GRADE_ORDER.indexOf(b))];
}

export function calculateGameResults(
  userCpu: CPU,
  userGpu: GPU,
  userRam: number,
  games: Game[],
  allCpus: CPU[],
  allGpus: GPU[]
): GameDiagResult[] {
  const cpuMap = new Map(allCpus.map(c => [c.model, c.score]));
  const gpuMap = new Map(allGpus.map(g => [g.model, g.score]));

  return games.map(game => {
    const minCpuScore = cpuMap.get(game.min_cpu) ?? null;
    const recCpuScore = cpuMap.get(game.rec_cpu) ?? null;
    const minGpuScore = gpuMap.get(game.min_gpu) ?? null;
    const recGpuScore = gpuMap.get(game.rec_gpu) ?? null;

    const cpuGrade = getGrade(userCpu.score, minCpuScore, recCpuScore);
    const gpuGrade = getGrade(userGpu.score, minGpuScore, recGpuScore);

    let overallGrade = worseGrade(cpuGrade, gpuGrade);
    if (userRam < (game.min_ram ?? 0)) overallGrade = 'difficult';

    return { game, cpuGrade, gpuGrade, overallGrade };
  });
}
