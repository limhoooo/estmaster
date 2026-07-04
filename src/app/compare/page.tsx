import type { Metadata } from 'next';
import { Suspense } from 'react';
import { loadCPUs, loadGPUs, loadGames } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';
import CompareClient from '@/components/compare/CompareClient';

export const metadata: Metadata = {
  title: 'GPU CPU 성능 비교 — RTX 4060 vs RTX 3070 등 | 견적도사',
  description: 'GPU·CPU 성능을 비교하세요. RTX 4060 vs RTX 3070, i5-13400F vs Ryzen 5 7600 등 인기 비교를 점수·가격·게임 등급으로 한눈에 확인.',
  keywords: ['GPU 비교', 'CPU 비교', 'RTX 4060 비교', 'GPU 성능 비교', '그래픽카드 비교', 'CPU 성능 비교'],
  alternates: { canonical: `${SITE.url}/compare/` },
  openGraph: {
    title: 'GPU CPU 성능 비교 도구 | 견적도사',
    description: '두 GPU·CPU를 선택해 성능·가격·게임 등급을 한눈에 비교.',
    url: `${SITE.url}/compare/`,
  },
};

export default function ComparePage() {
  const cpus = loadCPUs();
  const gpus = loadGPUs();
  const games = loadGames();

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">성능 비교 도구</h1>
          <p className="mt-2 text-sm text-slate-400">
            두 GPU 또는 CPU를 선택해 성능·가격·게임 등급을 한눈에 비교하세요.
          </p>
        </div>
        <Suspense fallback={<div className="py-20 text-center text-slate-500">로딩 중...</div>}>
          <CompareClient cpus={cpus} gpus={gpus} games={games} />
        </Suspense>
      </div>
    </div>
  );
}
