import Link from 'next/link';
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
    // overflow-hidden 제거 → 툴팁이 컨테이너 밖으로 나올 수 있음
    <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      {/* 헤더 */}
      <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">게임별 실행 등급</h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
              기준: 1080p · PassMark 점수 비교
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="hidden items-center gap-3 text-xs sm:flex">
              <span className="text-emerald-600 dark:text-emerald-400">원활 {counts.smooth}</span>
              <span className="text-amber-600 dark:text-amber-400">버벅임 {counts.playable}</span>
              <span className="text-red-600 dark:text-red-400">어려움 {counts.difficult}</span>
            </div>
            <Link
              href="/games"
              className="inline-flex items-center gap-1 rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-blue-400 hover:text-blue-600 dark:border-slate-600 dark:text-slate-400 dark:hover:border-blue-500 dark:hover:text-blue-400"
            >
              전체 게임 사양
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 6h7M6.5 3l3 3-3 3"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* 게임 목록 */}
      <ul className="divide-y divide-slate-100 dark:divide-slate-800">
        {sorted.map(({ game, overallGrade, cpuGrade, gpuGrade }) => (
          <li key={game.name} className="flex items-center gap-2 px-6 py-3.5">

            {/* 게임 이름 */}
            <span className="min-w-0 flex-1 truncate text-sm font-medium text-slate-800 dark:text-slate-200">
              {game.name}
            </span>

            {/* 권장사양 툴팁 버튼 */}
            <div className="relative flex-shrink-0">
              <button
                type="button"
                className="peer inline-flex items-center gap-1 rounded-md border border-slate-300 px-2 py-0.5 text-[11px] text-slate-500 transition hover:border-blue-400 hover:text-blue-500 dark:border-slate-600 dark:text-slate-500 dark:hover:border-blue-500 dark:hover:text-blue-400"
              >
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="8" cy="8" r="6.5"/><path d="M8 7v5M8 5.5v.5"/>
                </svg>
                사양
              </button>

              {/* 툴팁 */}
              <div className="pointer-events-none invisible absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-600/60 bg-slate-800 shadow-2xl shadow-black/50 transition-all peer-hover:visible peer-hover:pointer-events-auto">
                {/* 말풍선 꼬리 */}
                <div className="absolute -top-1.5 right-4 h-3 w-3 rotate-45 border-l border-t border-slate-600/60 bg-slate-800" />

                <div className="p-4">
                  <p className="mb-3 text-xs font-semibold text-white">{game.name}</p>
                  <div className="grid grid-cols-2 divide-x divide-slate-700">
                    {/* 최소 사양 */}
                    <div className="pr-3">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">최소</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-1.5">
                          <span className="w-7 flex-shrink-0 text-[10px] font-bold text-slate-500">CPU</span>
                          <span className="text-[11px] leading-snug text-slate-300">{game.min_cpu}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="w-7 flex-shrink-0 text-[10px] font-bold text-slate-500">GPU</span>
                          <span className="text-[11px] leading-snug text-slate-300">{game.min_gpu}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="w-7 flex-shrink-0 text-[10px] font-bold text-slate-500">RAM</span>
                          <span className="text-[11px] leading-snug text-slate-300">{game.min_ram}GB</span>
                        </li>
                      </ul>
                    </div>
                    {/* 권장 사양 */}
                    <div className="pl-3">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-blue-400">권장</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-1.5">
                          <span className="w-7 flex-shrink-0 text-[10px] font-bold text-slate-500">CPU</span>
                          <span className="text-[11px] leading-snug text-slate-200">{game.rec_cpu}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="w-7 flex-shrink-0 text-[10px] font-bold text-slate-500">GPU</span>
                          <span className="text-[11px] leading-snug text-slate-200">{game.rec_gpu}</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <span className="w-7 flex-shrink-0 text-[10px] font-bold text-slate-500">RAM</span>
                          <span className="text-[11px] leading-snug text-slate-200">{game.rec_ram}GB</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CPU/GPU 개별 등급 (sm 이상) */}
            <div className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
              <span>CPU</span>
              <GradeBadge grade={cpuGrade} size="sm" />
              <span>/</span>
              <span>GPU</span>
              <GradeBadge grade={gpuGrade} size="sm" />
            </div>

            {/* 종합 등급 */}
            <GradeBadge grade={overallGrade} />
          </li>
        ))}
      </ul>
    </div>
  );
}
