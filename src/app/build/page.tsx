import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/config/site';
import { COMBOS } from '@/lib/data/combos';

export const metadata: Metadata = {
  title: '인기 CPU+GPU 조합 24선 — 이 조합으로 게임 되나요?',
  description: '입문부터 하이엔드까지, 실제로 많이 쓰는 CPU+GPU 조합 24가지의 병목 분석과 인기 게임 실행 등급을 한눈에 확인하세요.',
  keywords: ['CPU GPU 조합 추천', 'PC 견적 조합', '가성비 PC 조합', '게임 PC 조합 추천'],
  alternates: { canonical: `${SITE.url}/build/` },
};

export default function BuildIndexPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">인기 CPU+GPU 조합</h1>
          <p className="mt-2 text-sm text-slate-400">
            실제로 많이 쓰는 CPU+GPU 조합의 병목 분석과 게임별 실행 등급을 확인하세요. 1080p 기준.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {COMBOS.map(c => (
            <Link key={c.slug} href={`/build/${c.slug}`}
              className="group rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5 transition hover:border-blue-500/40 hover:bg-slate-800/70">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">{c.tagline}</p>
              <h2 className="mb-2 text-base font-semibold text-white group-hover:text-blue-300 transition-colors">
                {c.cpu} + {c.gpu}
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 line-clamp-2">{c.review}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
