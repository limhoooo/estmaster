import type { Metadata } from 'next';
import { loadCPUs, loadGPUs } from '@/lib/data/loader';
import DiagnoseClient from '@/components/diagnose/DiagnoseClient';

export const metadata: Metadata = {
  title: 'PC 성능 진단 — 견적도사',
  description: '현재 PC 사양을 입력하고 병목을 진단받으세요.',
};

export default function DiagnosePage() {
  const cpus = loadCPUs();
  const gpus = loadGPUs();

  return (
    <div className="min-h-full bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            PC 성능 진단
          </h1>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            현재 PC 사양을 입력하면 병목 원인과 최적의 업그레이드 방향을 알려드립니다.
          </p>
        </div>
        <DiagnoseClient cpus={cpus} gpus={gpus} />
      </div>
    </div>
  );
}
