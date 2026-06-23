'use client';

import { useState } from 'react';
import Link from 'next/link';
import type { GameDiagResult } from '@/lib/types';
import GradeBadge from '@/components/ui/GradeBadge';
import { getMockPrice } from '@/lib/data/mock-prices';

interface Props {
  results: GameDiagResult[];
}

function BuyLinks({ model }: { model: string }) {
  const price = getMockPrice(model);
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <a
        href={price.coupang_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg bg-red-500 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-red-400"
      >
        쿠팡에서 보기
        {price.approximate !== '가격 정보 없음' && (
          <span className="rounded bg-red-400/50 px-1.5 py-0.5 text-[10px]">{price.approximate}</span>
        )}
      </a>
      <a
        href={price.danawa_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-500 bg-slate-700 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-600 hover:text-white"
      >
        다나와에서 보기
      </a>
    </div>
  );
}

export default function GameResultList({ results }: Props) {
  const [expandedGame, setExpandedGame] = useState<string | null>(null);

  const sorted = [...results].sort((a, b) => {
    const order = { difficult: 0, playable: 1, smooth: 2 };
    return order[a.overallGrade] - order[b.overallGrade];
  });

  const counts = {
    smooth: results.filter(r => r.overallGrade === 'smooth').length,
    playable: results.filter(r => r.overallGrade === 'playable').length,
    difficult: results.filter(r => r.overallGrade === 'difficult').length,
  };

  const toggle = (name: string) =>
    setExpandedGame(prev => (prev === name ? null : name));

  return (
    <div className="rounded-2xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
      {/* 헤더 */}
      <div className="border-b border-slate-200 px-6 py-4 dark:border-slate-700">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">게임별 실행 등급</h3>
            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">기준: 1080p · PassMark 점수 비교</p>
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
        {sorted.map(({ game, overallGrade, cpuGrade, gpuGrade }) => {
          const isExpanded = expandedGame === game.name;
          const needsCpu = cpuGrade !== 'smooth';
          const needsGpu = gpuGrade !== 'smooth';

          return (
            <>
              {/* 메인 행 */}
              <li key={game.name} className="flex items-center gap-3 px-4 py-3 sm:px-6">

                {/* 왼쪽: 게임명 + 버튼 두 개 묶음 */}
                <div className="flex min-w-0 flex-1 items-center gap-2">
                  <span className="flex-shrink-0 text-sm font-medium text-slate-800 dark:text-slate-200 truncate max-w-[120px] sm:max-w-none">
                    {game.name}
                  </span>

                {/* 2. 사양 툴팁 버튼 */}
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
                  <div className="pointer-events-none invisible absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-slate-600/60 bg-slate-800 shadow-2xl shadow-black/50 peer-hover:visible peer-hover:pointer-events-auto">
                    <div className="absolute -top-1.5 right-4 h-3 w-3 rotate-45 border-l border-t border-slate-600/60 bg-slate-800" />
                    <div className="p-4">
                      <p className="mb-3 text-xs font-semibold text-white">{game.name}</p>
                      <div className="grid grid-cols-2 divide-x divide-slate-700">
                        <div className="pr-3">
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">최소</p>
                          <ul className="space-y-1.5">
                            {[['CPU', game.min_cpu], ['GPU', game.min_gpu], ['RAM', `${game.min_ram}GB`]].map(([k, v]) => (
                              <li key={k} className="flex items-start gap-1.5">
                                <span className="w-7 flex-shrink-0 text-[10px] font-bold text-slate-500">{k}</span>
                                <span className="text-[11px] leading-snug text-slate-300">{v}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pl-3">
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-blue-400">권장</p>
                          <ul className="space-y-1.5">
                            {[['CPU', game.rec_cpu], ['GPU', game.rec_gpu], ['RAM', `${game.rec_ram}GB`]].map(([k, v]) => (
                              <li key={k} className="flex items-start gap-1.5">
                                <span className="w-7 flex-shrink-0 text-[10px] font-bold text-slate-500">{k}</span>
                                <span className="text-[11px] leading-snug text-slate-200">{v}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. 원활하게 돌리려면? 버튼 */}
                <button
                  type="button"
                  onClick={() => toggle(game.name)}
                  className={`flex-shrink-0 inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-medium transition ${
                    isExpanded
                      ? 'bg-blue-600 text-white'
                      : 'border border-slate-300 text-slate-500 hover:border-blue-400 hover:text-blue-500 dark:border-slate-600 dark:text-slate-500 dark:hover:border-blue-500 dark:hover:text-blue-400'
                  }`}
                >
                  <svg width="9" height="9" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M4 3l9 5-9 5V3z"/>
                  </svg>
                  <span className="hidden sm:inline">원활하게 돌리려면?</span>
                  <span className="sm:hidden">최적화</span>
                </button>
                </div>{/* 왼쪽 그룹 닫기 */}

                {/* 4. CPU/GPU 개별 등급 (sm 이상) */}
                <div className="hidden items-center gap-1.5 text-xs text-slate-400 sm:flex">
                  <span>CPU</span><GradeBadge grade={cpuGrade} size="sm" />
                  <span>/</span>
                  <span>GPU</span><GradeBadge grade={gpuGrade} size="sm" />
                </div>

                {/* 5. 종합 등급 */}
                <GradeBadge grade={overallGrade} />
              </li>

              {/* 확장 패널 */}
              {isExpanded && (
                <li key={`${game.name}-detail`} className="bg-slate-900 dark:bg-slate-950">
                  <div className="border-t border-blue-500/30 px-4 py-5 sm:px-6">
                    {/* 패널 제목 */}
                    <p className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px]">▶</span>
                      {game.name} — 원활하게 실행하려면
                    </p>

                    {overallGrade === 'smooth' ? (
                      <div className="flex items-center gap-3 rounded-xl bg-emerald-500/20 px-4 py-3">
                        <span className="text-xl">✅</span>
                        <p className="font-medium text-emerald-300">현재 사양으로 이미 원활하게 실행됩니다!</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {/* CPU */}
                        {needsCpu ? (
                          <div className="rounded-xl bg-slate-800 p-4 ring-1 ring-orange-500/40">
                            <div className="mb-2 flex items-center gap-2">
                              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-xs text-orange-400">!</span>
                              <span className="text-sm font-semibold text-white">CPU 업그레이드 필요</span>
                            </div>
                            <p className="mb-0.5 text-xs text-slate-400">현재 CPU 성능이 부족합니다</p>
                            <p className="text-sm font-bold text-orange-300">
                              권장: {game.rec_cpu} 이상
                            </p>
                            <BuyLinks model={game.rec_cpu} />
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 ring-1 ring-emerald-500/30">
                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm text-emerald-400">✓</span>
                            <div>
                              <p className="text-sm font-semibold text-emerald-300">CPU 충분</p>
                              <p className="text-xs text-slate-400">현재 CPU로 충분합니다</p>
                            </div>
                          </div>
                        )}

                        {/* GPU */}
                        {needsGpu ? (
                          <div className="rounded-xl bg-slate-800 p-4 ring-1 ring-orange-500/40">
                            <div className="mb-2 flex items-center gap-2">
                              <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-xs text-orange-400">!</span>
                              <span className="text-sm font-semibold text-white">GPU 업그레이드 필요</span>
                            </div>
                            <p className="mb-0.5 text-xs text-slate-400">현재 GPU 성능이 부족합니다</p>
                            <p className="text-sm font-bold text-orange-300">
                              권장: {game.rec_gpu} 이상
                            </p>
                            <BuyLinks model={game.rec_gpu} />
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 rounded-xl bg-slate-800 px-4 py-3 ring-1 ring-emerald-500/30">
                            <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm text-emerald-400">✓</span>
                            <div>
                              <p className="text-sm font-semibold text-emerald-300">GPU 충분</p>
                              <p className="text-xs text-slate-400">현재 GPU로 충분합니다</p>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </li>
              )}
            </>
          );
        })}
      </ul>
    </div>
  );
}
