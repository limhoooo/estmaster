import type { GameDiagResult } from '@/lib/types';
import GradeBadge from '@/components/ui/GradeBadge';

interface Props {
  results: GameDiagResult[];
}

export default function GameResultList({ results }: Props) {
  const sorted = [...results].sort((a, b) => {
    const order = { difficult: 0, playable: 1, smooth: 2 };
    return order[a.overallGrade] - order[b.overallGrade];
  });

  const counts = {
    smooth: results.filter(r => r.overallGrade === 'smooth').length,
    playable: results.filter(r => r.overallGrade === 'playable').length,
    difficult: results.filter(r => r.overallGrade === 'difficult').length,
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">게임별 실행 등급</h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              기준: 1080p · PassMark 점수 비교
            </p>
          </div>
          <div className="hidden items-center gap-3 text-xs sm:flex">
            <span className="text-emerald-600 dark:text-emerald-400">
              원활 {counts.smooth}
            </span>
            <span className="text-amber-600 dark:text-amber-400">
              버벅임 {counts.playable}
            </span>
            <span className="text-red-600 dark:text-red-400">
              어려움 {counts.difficult}
            </span>
          </div>
        </div>
      </div>
      <ul className="divide-y divide-slate-100 dark:divide-slate-800">
        {sorted.map(({ game, overallGrade, cpuGrade, gpuGrade }) => (
          <li
            key={game.name}
            className="flex items-center gap-3 px-6 py-3.5"
          >
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-800 dark:text-slate-200">
              {game.name}
            </span>
            <div className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
              <span>CPU</span>
              <GradeBadge grade={cpuGrade} size="sm" />
              <span>/</span>
              <span>GPU</span>
              <GradeBadge grade={gpuGrade} size="sm" />
            </div>
            <GradeBadge grade={overallGrade} />
          </li>
        ))}
      </ul>
    </div>
  );
}
