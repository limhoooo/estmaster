import { Suspense } from 'react';
import type { Metadata } from 'next';
import { loadCPUs, loadGPUs, loadGames } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';
import ResultClient from '@/components/result/ResultClient';

export const metadata: Metadata = {
  title: `PC 진단 결과 | ${SITE.name}`,
  description: 'CPU·GPU 병목 분석, 게임별 실행 등급, 업그레이드 추천 결과입니다.',
  robots: { index: false, follow: false },
};

export default function ResultPage() {
  const cpus = loadCPUs();
  const gpus = loadGPUs();
  const games = loadGames();

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <Suspense fallback={
          <div className="flex min-h-[60vh] items-center justify-center">
            <p className="text-slate-500">분석 중...</p>
          </div>
        }>
          <ResultClient cpus={cpus} gpus={gpus} games={games} />
        </Suspense>
      </div>
    </div>
  );
}
