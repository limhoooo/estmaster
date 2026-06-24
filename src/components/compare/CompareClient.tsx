'use client';

import { useState, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { CPU, GPU, Game, GameGrade } from '@/lib/types';
import { calculateGameResults } from '@/lib/engine/game-grade';
import { getMockPrice } from '@/lib/data/mock-prices';
import SearchableSelect from '@/components/diagnose/SearchableSelect';

interface Props { cpus: CPU[]; gpus: GPU[]; games: Game[]; }

const MOBILE_SOCKETS = new Set(['FP6', 'FP7', 'FP7r2', 'BGA', 'FP8']);

const TIER_CONFIG = [
  { key: 'S', label: 'S 티어', min: 27000, cls: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  { key: 'A', label: 'A 티어', min: 17000, cls: 'bg-red-500/20 text-red-300 border-red-500/40' },
  { key: 'B', label: 'B 티어', min: 10000, cls: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  { key: 'C', label: 'C 티어', min: 5500,  cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  { key: 'D', label: 'D 티어', min: 0,     cls: 'bg-slate-700/40 text-slate-400 border-slate-600/40' },
];
const CPU_TIER_CONFIG = [
  { key: 'S', label: 'S 티어', min: 50000, cls: 'bg-amber-500/20 text-amber-300 border-amber-500/40' },
  { key: 'A', label: 'A 티어', min: 28000, cls: 'bg-red-500/20 text-red-300 border-red-500/40' },
  { key: 'B', label: 'B 티어', min: 16000, cls: 'bg-blue-500/20 text-blue-300 border-blue-500/40' },
  { key: 'C', label: 'C 티어', min: 9000,  cls: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' },
  { key: 'D', label: 'D 티어', min: 0,     cls: 'bg-slate-700/40 text-slate-400 border-slate-600/40' },
];

function getTier(score: number, isGpu: boolean) {
  const cfg = isGpu ? TIER_CONFIG : CPU_TIER_CONFIG;
  return cfg.find(t => score >= t.min) ?? cfg[cfg.length - 1];
}

const GRADE_LABEL: Record<GameGrade, { label: string; cls: string }> = {
  smooth:   { label: '원활',    cls: 'bg-emerald-500/20 text-emerald-300' },
  playable: { label: '버벅임',  cls: 'bg-amber-500/20 text-amber-300' },
  difficult:{ label: '어려움', cls: 'bg-red-500/20 text-red-300' },
};

export default function CompareClient({ cpus, gpus, games }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [type, setType] = useState<'GPU' | 'CPU'>(
    (searchParams.get('type') as 'GPU' | 'CPU') ?? 'GPU'
  );
  const [modelA, setModelA] = useState(searchParams.get('a') ?? '');
  const [modelB, setModelB] = useState(searchParams.get('b') ?? '');

  const desktopGpus = useMemo(() => gpus.filter(g => g.psu_watt > 0 && !g.model.includes('Laptop')), [gpus]);
  const desktopCpus = useMemo(() => cpus.filter(c => !MOBILE_SOCKETS.has(c.socket)), [cpus]);

  // GPU 비교 시 기준 CPU (i7-12700K — 병목 없는 강한 CPU)
  const refCpu = useMemo(() =>
    cpus.find(c => c.model === 'i7-12700K') ??
    desktopCpus.reduce((a, b) => a.score > b.score ? a : b),
  [cpus, desktopCpus]);

  // CPU 비교 시 기준 GPU (RTX 3060 — 중간급)
  const refGpu = useMemo(() =>
    gpus.find(g => g.model === 'RTX 3060') ??
    desktopGpus.reduce((a, b) => a.score > b.score ? a : b),
  [gpus, desktopGpus]);

  const itemA = type === 'GPU'
    ? desktopGpus.find(g => g.model === modelA) ?? null
    : desktopCpus.find(c => c.model === modelA) ?? null;
  const itemB = type === 'GPU'
    ? desktopGpus.find(g => g.model === modelB) ?? null
    : desktopCpus.find(c => c.model === modelB) ?? null;

  const gameResultsA = useMemo(() => {
    if (!itemA) return null;
    if (type === 'GPU') return calculateGameResults(refCpu, itemA as GPU, 16, games, cpus, gpus);
    return calculateGameResults(itemA as CPU, refGpu, 16, games, cpus, gpus);
  }, [itemA, type, refCpu, refGpu, games, cpus, gpus]);

  const gameResultsB = useMemo(() => {
    if (!itemB) return null;
    if (type === 'GPU') return calculateGameResults(refCpu, itemB as GPU, 16, games, cpus, gpus);
    return calculateGameResults(itemB as CPU, refGpu, 16, games, cpus, gpus);
  }, [itemB, type, refCpu, refGpu, games, cpus, gpus]);

  const updateUrl = (newType: 'GPU'|'CPU', a: string, b: string) => {
    const params = new URLSearchParams();
    params.set('type', newType);
    if (a) params.set('a', a);
    if (b) params.set('b', b);
    router.replace(`/compare?${params.toString()}`, { scroll: false });
  };

  const handleTypeChange = (t: 'GPU' | 'CPU') => {
    setType(t); setModelA(''); setModelB('');
    updateUrl(t, '', '');
  };
  const handleA = (v: string) => { setModelA(v); updateUrl(type, v, modelB); };
  const handleB = (v: string) => { setModelB(v); updateUrl(type, modelA, v); };

  const options = (type === 'GPU' ? desktopGpus : desktopCpus).map(item => ({
    value: item.model, label: item.model,
    subLabel: 'brand' in item ? item.brand : '',
  }));

  const maxScore = itemA && itemB ? Math.max(itemA.score, itemB.score) : 1;
  const diff = itemA && itemB
    ? ((itemB.score - itemA.score) / itemA.score * 100).toFixed(1)
    : null;

  return (
    <div className="space-y-6">
      {/* 타입 탭 */}
      <div className="flex gap-2">
        {(['GPU', 'CPU'] as const).map(t => (
          <button
            key={t}
            type="button"
            onClick={() => handleTypeChange(t)}
            className={`rounded-xl px-6 py-2.5 text-sm font-semibold transition ${
              type === t
                ? 'bg-blue-600 text-white'
                : 'border border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
            }`}
          >
            {t} 비교
          </button>
        ))}
      </div>

      {/* 선택 영역 */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">{type} A</p>
          <SearchableSelect id="compare-a" options={options} value={modelA} onChange={handleA}
            placeholder={`${type} 선택...`} />
          {itemA && <ComponentCard item={itemA} isGpu={type === 'GPU'} />}
        </div>
        <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">{type} B</p>
          <SearchableSelect id="compare-b" options={options} value={modelB} onChange={handleB}
            placeholder={`${type} 선택...`} />
          {itemB && <ComponentCard item={itemB} isGpu={type === 'GPU'} />}
        </div>
      </div>

      {/* 비교 결과 */}
      {itemA && itemB && (
        <>
          {/* 점수 바 */}
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6">
            <h2 className="mb-5 text-base font-semibold text-white">성능 점수 비교</h2>
            {[itemA, itemB].map((item, i) => {
              const pct = (item.score / maxScore) * 100;
              const tier = getTier(item.score, type === 'GPU');
              return (
                <div key={item.model} className="mb-4">
                  <div className="mb-1.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-500">{i === 0 ? 'A' : 'B'}</span>
                      <span className="text-sm font-medium text-white">{item.model}</span>
                      <span className={`rounded-md border px-1.5 py-0.5 text-[10px] font-bold ${tier.cls}`}>
                        {tier.key}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-slate-300">{item.score.toLocaleString()}점</span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                    <div
                      className="h-full rounded-full bg-blue-500 transition-all duration-700"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}

            {/* 결론 */}
            <div className={`mt-4 rounded-xl px-4 py-3 text-sm font-medium ${
              Number(diff) > 0
                ? 'bg-emerald-500/10 text-emerald-300'
                : Number(diff) < 0
                ? 'bg-amber-500/10 text-amber-300'
                : 'bg-slate-700/40 text-slate-400'
            }`}>
              {Number(diff) > 0
                ? `✓ ${itemB.model}이(가) ${itemA.model}보다 ${Math.abs(Number(diff))}% 더 빠릅니다.`
                : Number(diff) < 0
                ? `✓ ${itemA.model}이(가) ${itemB.model}보다 ${Math.abs(Number(diff))}% 더 빠릅니다.`
                : '두 제품의 성능이 거의 동일합니다.'}
            </div>
          </div>

          {/* 게임 등급 비교 */}
          {gameResultsA && gameResultsB && (
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6">
              <h2 className="mb-1 text-base font-semibold text-white">게임별 실행 등급 비교</h2>
              <p className="mb-5 text-xs text-slate-500">
                {type === 'GPU'
                  ? `기준: ${refCpu.model} + 각 GPU · 1080p · 16GB RAM`
                  : `기준: 각 CPU + ${refGpu.model} · 1080p · 16GB RAM`}
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700/50">
                      <th className="pb-3 text-left text-xs font-semibold text-slate-500">게임</th>
                      <th className="pb-3 text-center text-xs font-semibold text-slate-400">{itemA.model}</th>
                      <th className="pb-3 text-center text-xs font-semibold text-slate-400">{itemB.model}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700/30">
                    {gameResultsA.map((rA, i) => {
                      const rB = gameResultsB[i];
                      const improved = rB.overallGrade !== rA.overallGrade;
                      return (
                        <tr key={rA.game.name} className={improved ? 'bg-blue-500/5' : ''}>
                          <td className="py-2.5 pr-4 text-slate-300">{rA.game.name}</td>
                          <td className="py-2.5 text-center">
                            <GradePill grade={rA.overallGrade} />
                          </td>
                          <td className="py-2.5 text-center">
                            <GradePill grade={rB.overallGrade} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {!itemA && !itemB && (
        <div className="rounded-2xl border border-dashed border-slate-700 py-16 text-center text-slate-500">
          위에서 비교할 {type} 두 가지를 선택해 주세요
        </div>
      )}
    </div>
  );
}

function ComponentCard({ item, isGpu }: { item: CPU | GPU; isGpu: boolean }) {
  const price = getMockPrice(item.model);
  const tier = getTier(item.score, isGpu);
  return (
    <div className="mt-3 rounded-xl border border-slate-600/50 bg-slate-900/60 p-4">
      <div className="mb-2 flex items-center gap-2">
        <span className={`rounded-md border px-2 py-0.5 text-xs font-bold ${tier.cls}`}>{tier.key}</span>
        <span className="text-xs text-slate-400">{item.score.toLocaleString()}점</span>
      </div>
      {!isGpu && (
        <p className="mb-2 text-xs text-slate-500">
          {'socket' in item && item.socket} · {'cores' in item && `${item.cores}코어`}
        </p>
      )}
      {isGpu && 'psu_watt' in item && item.psu_watt > 0 && (
        <p className="mb-2 text-xs text-slate-500">PSU {item.psu_watt}W 이상 권장</p>
      )}
      <p className="mb-3 text-sm font-semibold text-blue-400">{price.approximate}</p>
      <div className="flex flex-col gap-1.5">
        <a href={price.coupang_url} target="_blank" rel="noopener noreferrer"
          className="rounded-lg bg-red-500 py-1.5 text-center text-xs font-medium text-white hover:bg-red-400">
          쿠팡에서 보기
        </a>
        <a href={price.danawa_url} target="_blank" rel="noopener noreferrer"
          className="rounded-lg border border-slate-600 py-1.5 text-center text-xs font-medium text-slate-300 hover:bg-slate-700">
          다나와에서 보기
        </a>
      </div>
    </div>
  );
}

function GradePill({ grade }: { grade: GameGrade }) {
  const cfg = GRADE_LABEL[grade];
  return (
    <span className={`inline-block rounded-md px-2 py-0.5 text-xs font-medium ${cfg.cls}`}>
      {cfg.label}
    </span>
  );
}
