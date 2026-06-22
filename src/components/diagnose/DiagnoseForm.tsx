'use client';

import { useState } from 'react';
import type { CPU, GPU, Resolution, DiagnoseInput } from '@/lib/types';
import SearchableSelect from './SearchableSelect';

interface Props {
  cpus: CPU[];
  gpus: GPU[];
  onSubmit: (input: DiagnoseInput) => void;
  isLoading: boolean;
  onCpuChange?: (model: string) => void;
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

const PSU_OPTIONS = [
  { value: '400', label: '400W 이하' },
  { value: '500', label: '500W' },
  { value: '600', label: '600W' },
  { value: '650', label: '650W' },
  { value: '750', label: '750W' },
  { value: '850', label: '850W' },
  { value: '1000', label: '1000W 이상' },
];

export default function DiagnoseForm({ cpus, gpus, onSubmit, isLoading, onCpuChange }: Props) {
  const [cpu, setCpu] = useState('');
  const handleCpuChange = (val: string) => { setCpu(val); onCpuChange?.(val); };
  const [gpu, setGpu] = useState('');
  const [ram, setRam] = useState('16');
  const [resolution, setResolution] = useState<Resolution>('1080p');
  const [psuWatt, setPsuWatt] = useState('500');

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cpu || !gpu) return;
    onSubmit({ cpu, gpu, ram: Number(ram), resolution, psuWatt: Number(psuWatt) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="cpu" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            CPU <span className="text-red-500">*</span>
          </label>
          <SearchableSelect
            id="cpu"
            options={cpuOptions}
            value={cpu}
            onChange={handleCpuChange}
            placeholder="예: i5-12600K, Ryzen 5 5600X"
          />
        </div>
        <div>
          <label htmlFor="gpu" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            GPU <span className="text-red-500">*</span>
          </label>
          <SearchableSelect
            id="gpu"
            options={gpuOptions}
            value={gpu}
            onChange={setGpu}
            placeholder="예: RTX 3060, RX 6700 XT"
          />
        </div>
        <div>
          <label htmlFor="ram" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            RAM
          </label>
          <select
            id="ram"
            value={ram}
            onChange={e => setRam(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            {RAM_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="resolution" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            모니터 해상도
          </label>
          <select
            id="resolution"
            value={resolution}
            onChange={e => setResolution(e.target.value as Resolution)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
          >
            {RESOLUTION_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label htmlFor="psu" className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
            파워 용량{' '}
            <span className="text-xs font-normal text-slate-400">
              (호환성 체크용 · 모르면 500W로 두세요)
            </span>
          </label>
          <select
            id="psu"
            value={psuWatt}
            onChange={e => setPsuWatt(e.target.value)}
            className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 md:w-1/2"
          >
            {PSU_OPTIONS.map(o => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={!cpu || !gpu || isLoading}
          className="w-full rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {isLoading ? '진단 중...' : '진단 시작하기'}
        </button>
        {(!cpu || !gpu) && (
          <p className="text-center text-xs text-slate-400 sm:text-left">CPU와 GPU를 선택해 주세요</p>
        )}
      </div>
    </form>
  );
}
