'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { CPU, GPU, DiagnoseInput } from '@/lib/types';
import { isLaptopCPU } from '@/lib/engine/laptop';
import DiagnoseForm from './DiagnoseForm';

interface Props {
  cpus: CPU[];
  gpus: GPU[];
}

export default function DiagnoseClient({ cpus, gpus }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCpuModel, setSelectedCpuModel] = useState('');

  const selectedCpu = cpus.find(c => c.model === selectedCpuModel);
  const laptop = selectedCpu ? isLaptopCPU(selectedCpu) : false;

  const handleSubmit = (input: DiagnoseInput) => {
    setIsLoading(true);
    const params = new URLSearchParams({
      cpu: input.cpu,
      gpu: input.gpu,
      ram: String(input.ram),
      resolution: input.resolution,
      psu: String(input.psuWatt),
    });
    router.push(`/result?${params.toString()}`);
  };

  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-slate-200/30 bg-white p-6 shadow-2xl shadow-black/30 dark:border-slate-600 dark:bg-slate-800 md:p-8">
        <DiagnoseForm
          cpus={cpus}
          gpus={gpus}
          onSubmit={handleSubmit}
          isLoading={isLoading}
          onCpuChange={setSelectedCpuModel}
        />
      </div>

      {laptop && (
        <div className="flex gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 px-4 py-3">
          <span className="mt-0.5 flex-shrink-0 text-amber-400">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8 2L14 13H2L8 2z"/><path d="M8 6v3.5M8 11v.5"/>
            </svg>
          </span>
          <p className="text-xs leading-relaxed text-amber-300">
            <strong className="font-semibold">노트북 CPU가 감지되었습니다.</strong>{' '}
            노트북은 CPU·GPU 교체가 불가능합니다. 진단 결과는 참고용으로 확인하시고,
            업그레이드가 필요하다면 새 노트북 구매 시 스펙 기준으로 활용해보세요.
          </p>
        </div>
      )}
    </div>
  );
}
