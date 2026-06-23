'use client';

import { useState, useMemo } from 'react';
import type { CPU, GPU, Game, GameDiagResult, Resolution } from '@/lib/types';
import { calculateGameResults } from '@/lib/engine/game-grade';
import { getMockPrice } from '@/lib/data/mock-prices';
import SearchableSelect from '@/components/diagnose/SearchableSelect';
import GameResultList from '@/components/diagnose/GameResultList';

interface Props {
  cpus: CPU[];
  gpus: GPU[];
  games: Game[];
}

const RAM_OPTIONS = [
  { value: '8', label: '8 GB' },
  { value: '16', label: '16 GB' },
  { value: '32', label: '32 GB' },
  { value: '64', label: '64 GB' },
];

const RESOLUTION_OPTIONS = [
  { value: '1080p', label: '1080p (FHD)' },
  { value: '1440p', label: '1440p (QHD)' },
  { value: '4K', label: '4K (UHD)' },
];

function BuyLinks({ model }: { model: string }) {
  const price = getMockPrice(model);
  return (
    <div className="mt-3 flex flex-wrap gap-2">
      <a
        href={price.coupang_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-lg bg-red-500 px-3 py-2 text-xs font-semibold text-white transition hover:bg-red-400"
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
        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-600 bg-slate-700 px-3 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-600 hover:text-white"
      >
        다나와에서 보기
      </a>
    </div>
  );
}

function CpuCard({ cpu }: { cpu: CPU }) {
  return (
    <div className="mt-3 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-bold text-white">{cpu.model}</span>
        <span className="rounded-full bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
          CPU
        </span>
      </div>
      <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
        <span>{cpu.brand}</span>
        <span>{cpu.cores}코어 {cpu.threads}스레드</span>
        <span>{cpu.year}년</span>
        <span className="rounded bg-slate-700 px-1.5 py-0.5 text-slate-300">{cpu.socket}</span>
      </div>
      <BuyLinks model={cpu.model} />
    </div>
  );
}

function GpuCard({ gpu }: { gpu: GPU }) {
  return (
    <div className="mt-3 rounded-xl border border-violet-500/20 bg-violet-500/5 p-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-bold text-white">{gpu.model}</span>
        <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-[10px] font-semibold text-violet-400">
          GPU
        </span>
      </div>
      <div className="mb-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-400">
        <span>{gpu.brand}</span>
        <span>{gpu.year}년</span>
        {gpu.psu_watt > 0 && (
          <span className="rounded bg-slate-700 px-1.5 py-0.5 text-slate-300">
            PSU {gpu.psu_watt}W 이상
          </span>
        )}
      </div>
      <BuyLinks model={gpu.model} />
    </div>
  );
}

export default function CustomBuilder({ cpus, gpus, games }: Props) {
  const [selectedCpuModel, setSelectedCpuModel] = useState('');
  const [selectedGpuModel, setSelectedGpuModel] = useState('');
  const [ram, setRam] = useState('16');
  const [resolution, setResolution] = useState<Resolution>('1080p');
  const [gameResults, setGameResults] = useState<GameDiagResult[] | null>(null);

  const selectedCpu = useMemo(
    () => cpus.find(c => c.model === selectedCpuModel) ?? null,
    [cpus, selectedCpuModel]
  );
  const selectedGpu = useMemo(
    () => gpus.find(g => g.model === selectedGpuModel) ?? null,
    [gpus, selectedGpuModel]
  );

  const cpuOptions = cpus.map(c => ({
    value: c.model,
    label: c.model,
    subLabel: `${c.brand} · ${c.socket}`,
  }));

  const gpuOptions = gpus.map(g => ({
    value: g.model,
    label: g.model,
    subLabel: g.brand,
  }));

  const canCalculate = !!selectedCpu && !!selectedGpu;

  const handleCalculate = () => {
    if (!selectedCpu || !selectedGpu) return;
    const results = calculateGameResults(
      selectedCpu,
      selectedGpu,
      Number(ram),
      games,
      cpus,
      gpus
    );
    setGameResults(results);
    setTimeout(() => {
      document.getElementById('custom-results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  // CPU/GPU 변경 시 결과 초기화
  const handleCpuChange = (val: string) => {
    setSelectedCpuModel(val);
    setGameResults(null);
  };
  const handleGpuChange = (val: string) => {
    setSelectedGpuModel(val);
    setGameResults(null);
  };

  return (
    <div className="space-y-6">
      {/* 선택 폼 */}
      <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 md:p-8">

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* CPU */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">
              CPU <span className="text-red-400">*</span>
            </label>
            <SearchableSelect
              id="custom-cpu"
              options={cpuOptions}
              value={selectedCpuModel}
              onChange={handleCpuChange}
              placeholder="예: i5-12600K, Ryzen 5 5600X"
            />
            {selectedCpu && <CpuCard cpu={selectedCpu} />}
          </div>

          {/* GPU */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">
              GPU <span className="text-red-400">*</span>
            </label>
            <SearchableSelect
              id="custom-gpu"
              options={gpuOptions}
              value={selectedGpuModel}
              onChange={handleGpuChange}
              placeholder="예: RTX 3060, RX 6700 XT"
            />
            {selectedGpu && <GpuCard gpu={selectedGpu} />}
          </div>

          {/* RAM */}
          <div>
            <label htmlFor="custom-ram" className="mb-1.5 block text-sm font-medium text-slate-300">
              RAM
            </label>
            <select
              id="custom-ram"
              value={ram}
              onChange={e => { setRam(e.target.value); setGameResults(null); }}
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-sm text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {RAM_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* 해상도 */}
          <div>
            <label htmlFor="custom-resolution" className="mb-1.5 block text-sm font-medium text-slate-300">
              모니터 해상도
            </label>
            <select
              id="custom-resolution"
              value={resolution}
              onChange={e => { setResolution(e.target.value as Resolution); setGameResults(null); }}
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-4 py-3 text-sm text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {RESOLUTION_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 확인 버튼 */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={handleCalculate}
            disabled={!canCalculate}
            className="w-full rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto"
          >
            게임 실행 등급 확인하기 →
          </button>
          {!canCalculate && (
            <p className="text-center text-xs text-slate-500 sm:text-left">
              CPU와 GPU를 선택해 주세요
            </p>
          )}
        </div>
      </div>

      {/* 결과 */}
      {gameResults && (
        <div id="custom-results" className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-lg font-semibold text-white">게임별 실행 등급</h2>
            <span className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-400">
              {selectedCpuModel} + {selectedGpuModel} · {resolution} · {ram}GB RAM
            </span>
          </div>
          <GameResultList results={gameResults} />
          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 px-5 py-4">
            <p className="text-xs leading-relaxed text-slate-500">
              ⚠️ PassMark 점수 기반 추정값입니다. 실제 성능은 드라이버·그래픽 옵션에 따라 다를 수 있습니다.
              게임 사양 기준은 <strong className="text-slate-400">1080p (FHD)</strong>입니다.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
