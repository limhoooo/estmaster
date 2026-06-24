'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import type { CPU, GPU } from '@/lib/types';
import { getMockPrice } from '@/lib/data/mock-prices';

interface Props { cpus: CPU[]; gpus: GPU[]; }

const MOBILE_SOCKETS = new Set(['FP6', 'FP7', 'FP7r2', 'BGA', 'FP8']);

const GPU_TIERS = [
  { key: 'S', label: 'S', desc: '최상급', min: 27000, bg: 'bg-amber-500/10', border: 'border-amber-500/30', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40', bar: 'bg-amber-400' },
  { key: 'A', label: 'A', desc: '고사양', min: 17000, bg: 'bg-red-500/10',   border: 'border-red-500/30',   badge: 'bg-red-500/20 text-red-300 border-red-500/40',     bar: 'bg-red-400' },
  { key: 'B', label: 'B', desc: '중상',   min: 10000, bg: 'bg-blue-500/10',  border: 'border-blue-500/30',  badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',   bar: 'bg-blue-400' },
  { key: 'C', label: 'C', desc: '중간',   min: 5500,  bg: 'bg-emerald-500/10',border: 'border-emerald-500/30',badge:'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',bar:'bg-emerald-400' },
  { key: 'D', label: 'D', desc: '저사양', min: 0,     bg: 'bg-slate-800/30', border: 'border-slate-700/50', badge: 'bg-slate-700/40 text-slate-400 border-slate-600/40', bar: 'bg-slate-500' },
];
const CPU_TIERS = [
  { key: 'S', label: 'S', desc: '최상급', min: 50000, bg: 'bg-amber-500/10', border: 'border-amber-500/30', badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40', bar: 'bg-amber-400' },
  { key: 'A', label: 'A', desc: '고성능', min: 28000, bg: 'bg-red-500/10',   border: 'border-red-500/30',   badge: 'bg-red-500/20 text-red-300 border-red-500/40',     bar: 'bg-red-400' },
  { key: 'B', label: 'B', desc: '중상',   min: 16000, bg: 'bg-blue-500/10',  border: 'border-blue-500/30',  badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',   bar: 'bg-blue-400' },
  { key: 'C', label: 'C', desc: '중간',   min: 9000,  bg: 'bg-emerald-500/10',border:'border-emerald-500/30',badge:'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',bar:'bg-emerald-400' },
  { key: 'D', label: 'D', desc: '구형',   min: 0,     bg: 'bg-slate-800/30', border: 'border-slate-700/50', badge: 'bg-slate-700/40 text-slate-400 border-slate-600/40', bar: 'bg-slate-500' },
];

export default function TierClient({ cpus, gpus }: Props) {
  const [tab, setTab] = useState<'GPU' | 'CPU'>('GPU');
  const [brand, setBrand] = useState<string>('전체');

  const desktopGpus = useMemo(() =>
    gpus.filter(g => g.psu_watt > 0 && !g.model.includes('Laptop'))
      .sort((a, b) => b.score - a.score),
  [gpus]);

  const desktopCpus = useMemo(() =>
    cpus.filter(c => !MOBILE_SOCKETS.has(c.socket))
      .sort((a, b) => b.score - a.score),
  [cpus]);

  const items = tab === 'GPU' ? desktopGpus : desktopCpus;
  const tiers = tab === 'GPU' ? GPU_TIERS : CPU_TIERS;
  const maxScore = items[0]?.score ?? 1;

  const gpuBrands = ['전체', 'NVIDIA', 'AMD', 'Intel'];
  const cpuBrands = ['전체', 'Intel', 'AMD'];
  const brands = tab === 'GPU' ? gpuBrands : cpuBrands;

  const filtered = useMemo(() =>
    brand === '전체' ? items : items.filter(i => i.brand === brand),
  [items, brand]);

  return (
    <div>
      {/* 탭 + 브랜드 필터 */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2">
          {(['GPU', 'CPU'] as const).map(t => (
            <button
              key={t}
              type="button"
              onClick={() => { setTab(t); setBrand('전체'); }}
              className={`rounded-xl px-5 py-2 text-sm font-semibold transition ${
                tab === t ? 'bg-blue-600 text-white' : 'border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
              }`}
            >
              {t} 티어
            </button>
          ))}
        </div>
        <div className="flex gap-1.5">
          {brands.map(b => (
            <button
              key={b}
              type="button"
              onClick={() => setBrand(b)}
              className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                brand === b
                  ? 'bg-slate-600 text-white'
                  : 'border border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300'
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* 티어 섹션 */}
      <div className="space-y-5">
        {tiers.map(tier => {
          const tierItems = filtered.filter(i => i.score >= tier.min &&
            (tier.min === 0 || i.score < (tiers[tiers.indexOf(tier) - 1]?.min ?? Infinity)));
          if (tierItems.length === 0) return null;
          return (
            <div key={tier.key} className={`rounded-2xl border ${tier.border} ${tier.bg} p-5`}>
              {/* 티어 헤더 */}
              <div className="mb-4 flex items-center gap-3">
                <span className={`flex h-10 w-10 items-center justify-center rounded-xl border text-xl font-black ${tier.badge}`}>
                  {tier.label}
                </span>
                <div>
                  <p className="font-bold text-white">{tier.desc}</p>
                  <p className="text-xs text-slate-500">{tierItems.length}개 제품</p>
                </div>
              </div>

              {/* 제품 목록 */}
              <div className="space-y-2.5">
                {tierItems.map((item, idx) => {
                  const price = getMockPrice(item.model);
                  const barPct = (item.score / maxScore) * 100;
                  const rank = filtered.findIndex(i => i.model === item.model) + 1;
                  return (
                    <div key={item.model}
                      className="flex items-center gap-3 rounded-xl bg-slate-900/50 px-4 py-3">
                      {/* 순위 */}
                      <span className="w-6 flex-shrink-0 text-xs font-bold text-slate-500 text-right">
                        {rank}
                      </span>
                      {/* 모델명 */}
                      <div className="min-w-0 flex-1">
                        <div className="mb-1.5 flex flex-wrap items-center gap-2">
                          <span className="text-sm font-semibold text-white">{item.model}</span>
                          <span className="text-xs text-slate-500">{item.brand}</span>
                          {price.approximate !== '가격 정보 없음' && (
                            <span className="rounded bg-slate-700 px-1.5 py-0.5 text-[10px] text-slate-400">
                              약 {price.approximate}
                            </span>
                          )}
                        </div>
                        {/* 점수 바 */}
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-700/50">
                            <div
                              className={`h-full rounded-full ${tier.bar} transition-all duration-500`}
                              style={{ width: `${barPct}%` }}
                            />
                          </div>
                          <span className="w-16 flex-shrink-0 text-right text-xs text-slate-500">
                            {item.score.toLocaleString()}
                          </span>
                        </div>
                      </div>
                      {/* 구매 링크 */}
                      <div className="hidden flex-shrink-0 flex-col gap-1 sm:flex">
                        <a href={price.coupang_url} target="_blank" rel="noopener noreferrer"
                          className="rounded-md bg-red-500/80 px-2.5 py-1 text-[10px] font-medium text-white hover:bg-red-400 whitespace-nowrap">
                          쿠팡
                        </a>
                        <a href={price.danawa_url} target="_blank" rel="noopener noreferrer"
                          className="rounded-md border border-slate-600 px-2.5 py-1 text-[10px] font-medium text-slate-400 hover:text-white whitespace-nowrap">
                          다나와
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* 내 PC 진단 CTA */}
      <div className="mt-8 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6 text-center">
        <p className="mb-3 text-sm text-slate-300">
          내 PC 사양이 어느 티어인지 확인하고 업그레이드 추천도 받아보세요.
        </p>
        <Link href="/"
          className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500">
          무료 PC 진단하기 →
        </Link>
      </div>
    </div>
  );
}
