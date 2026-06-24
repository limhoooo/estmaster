import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/config/site';
import { ARTICLES } from '@/lib/data/articles-meta';

export const metadata: Metadata = {
  title: 'PC 부품 가이드 & 아티클 | 견적도사',
  description: 'GPU·CPU 비교, 예산별 추천, 병목 현상 해설 등 게임 PC 관련 유용한 가이드를 제공합니다.',
  alternates: { canonical: `${SITE.url}/articles` },
};

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">PC 부품 가이드</h1>
          <p className="mt-2 text-sm text-slate-400">
            그래픽카드·CPU 비교, 예산별 추천, 병목 현상 해설 등 게임 PC 관련 가이드입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {ARTICLES.map(a => (
            <Link key={a.slug} href={`/articles/${a.slug}`}
              className="group rounded-2xl border border-slate-700/50 bg-slate-800/40 p-6 transition hover:border-blue-500/40 hover:bg-slate-800/70">
              <div className="mb-3 flex flex-wrap gap-1.5">
                {a.tags.slice(0, 2).map(t => (
                  <span key={t} className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[11px] text-blue-400">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mb-2 text-base font-semibold leading-snug text-white group-hover:text-blue-300 transition-colors">
                {a.title}
              </h2>
              <p className="text-sm leading-relaxed text-slate-400 line-clamp-2">{a.description}</p>
              <p className="mt-3 text-xs text-slate-600">{a.publishedAt}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
