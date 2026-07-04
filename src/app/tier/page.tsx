import type { Metadata } from 'next';
import { Suspense } from 'react';
import { loadCPUs, loadGPUs } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';
import TierClient from '@/components/tier/TierClient';

export const metadata: Metadata = {
  title: '그래픽카드 CPU 성능 티어리스트 2026 | 견적도사',
  description: 'RTX 4090부터 GTX 780까지 그래픽카드(GPU) 성능 순위. i9-14900K부터 i5-3570K까지 CPU 성능 순위. S/A/B/C/D 티어로 한눈에 확인하세요.',
  keywords: ['그래픽카드 성능 순위', 'GPU 티어리스트 2026', 'CPU 성능 순위', '그래픽카드 순위', 'GPU 순위', 'CPU 순위 2026'],
  alternates: { canonical: `${SITE.url}/tier/` },
  openGraph: {
    title: '그래픽카드 CPU 성능 티어리스트 2026 | 견적도사',
    description: 'GPU·CPU 성능 순위를 S/A/B/C/D 티어로 한눈에 확인.',
    url: `${SITE.url}/tier/`,
  },
};

export default function TierPage() {
  const cpus = loadCPUs();
  const gpus = loadGPUs();

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">성능 티어리스트 2026</h1>
          <p className="mt-2 text-sm text-slate-400">
            PassMark 점수 기반 GPU·CPU 성능 순위입니다. 데스크탑 제품 기준.
          </p>
        </div>
        <Suspense fallback={<div className="py-20 text-center text-slate-500">로딩 중...</div>}>
          <TierClient cpus={cpus} gpus={gpus} />
        </Suspense>
      </div>
    </div>
  );
}
