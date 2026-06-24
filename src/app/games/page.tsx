import type { Metadata } from 'next';
import Link from 'next/link';
import { loadGames } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';

export const metadata: Metadata = {
  title: '게임별 권장 사양 33종 — 사이버펑크·배그·롤·엘든링·GTA V | 견적도사',
  description:
    '사이버펑크 2077, 배틀그라운드, 리그 오브 레전드, 엘든 링, GTA V, 호그와트 레거시 등 인기 게임 33종의 최소·권장 CPU·GPU·RAM 사양을 한눈에 확인하세요. 1080p(FHD) 기준.',
  keywords: [
    '게임 권장 사양', '게임 최소사양', '사이버펑크 2077 사양', '배틀그라운드 권장사양',
    '엘든링 사양', 'GTA V 사양', '리그 오브 레전드 사양', '호그와트 레거시 사양',
    '게임 PC 사양', 'GPU 권장사양', '그래픽카드 게임 사양',
  ],
  alternates: { canonical: `${SITE.url}/games` },
  openGraph: {
    title: '게임별 권장 사양 33종 | 견적도사',
    description: '인기 게임 33종의 최소·권장 CPU GPU RAM 사양. 1080p 기준.',
    url: `${SITE.url}/games`,
  },
};

export default function GamesPage() {
  const games = loadGames();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: '게임별 권장 사양', item: `${SITE.url}/games` },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE.url}/games#list`,
        name: '게임별 PC 권장 사양 목록',
        description: '인기 PC 게임의 최소 및 권장 시스템 요구사항 (1080p 기준)',
        numberOfItems: games.length,
        itemListElement: games.map((g, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: g.name,
          description: `최소: CPU ${g.min_cpu}, GPU ${g.min_gpu}, RAM ${g.min_ram}GB / 권장: CPU ${g.rec_cpu}, GPU ${g.rec_gpu}, RAM ${g.rec_ram}GB`,
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE.url}/games`,
        url: `${SITE.url}/games`,
        name: '게임별 권장 사양',
        description: '인기 게임 33종의 최소·권장 CPU·GPU·RAM 사양',
        inLanguage: 'ko-KR',
        isPartOf: { '@id': `${SITE.url}/#website` },
        breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: '홈', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: '게임별 권장 사양', item: `${SITE.url}/games` },
        ]},
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-900">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        {/* 브레드크럼 */}
        <nav aria-label="breadcrumb" className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-300">홈</Link>
          <span>/</span>
          <span className="text-slate-400">게임별 권장 사양</span>
        </nav>

        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">게임별 권장 사양</h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            <strong className="text-slate-300">사이버펑크 2077, 배틀그라운드, 리그 오브 레전드, 엘든 링</strong> 등
            인기 게임 {games.length}종의 최소·권장 CPU·GPU·RAM 사양을 한눈에 확인하세요.
            모든 사양은 <strong className="text-slate-300">1080p (FHD) 기준</strong>이며,
            1440p·4K 환경에서는 더 높은 사양이 필요할 수 있습니다.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            내 PC가 각 게임을 원활히 실행할 수 있는지 확인하려면{' '}
            <Link href="/" className="text-blue-400 underline hover:text-blue-300">무료 진단</Link>을 이용해 보세요.
          </p>
        </div>

        {/* 게임 카드 목록 */}
        <div className="space-y-4">
          {games.map(game => (
            <article
              key={game.name}
              className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
            >
              <div className="border-b border-slate-700/50 px-5 py-3">
                <h2 className="font-semibold text-white" itemProp="name">{game.name}</h2>
              </div>
              <div className="grid grid-cols-2 divide-x divide-slate-700/50">
                <div className="px-4 py-4 sm:px-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">최소 사양</p>
                  <ul className="space-y-2">
                    {[['CPU', game.min_cpu], ['GPU', game.min_gpu], ['RAM', `${game.min_ram}GB`]].map(([k, v]) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="mt-0.5 w-8 flex-shrink-0 text-[10px] font-bold uppercase text-slate-500">{k}</span>
                        <span className="text-xs font-medium leading-snug text-slate-300">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-blue-500/[0.04] px-4 py-4 sm:px-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-blue-400">권장 사양</p>
                  <ul className="space-y-2">
                    {[['CPU', game.rec_cpu], ['GPU', game.rec_gpu], ['RAM', `${game.rec_ram}GB`]].map(([k, v]) => (
                      <li key={k} className="flex items-start gap-2">
                        <span className="mt-0.5 w-8 flex-shrink-0 text-[10px] font-bold uppercase text-slate-500">{k}</span>
                        <span className="text-xs font-medium leading-snug text-slate-200">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-slate-700/50 bg-slate-800/30 px-5 py-4">
          <p className="text-xs leading-relaxed text-slate-500">
            ⚠️ 위 사양은 각 게임사가 공개한 PC 권장 사양 기반입니다.
            실제 성능은 그래픽 설정·해상도·드라이버 버전에 따라 다를 수 있습니다.
            내 PC가 어떤 게임을 원활히 실행할 수 있는지 확인하려면{' '}
            <Link href="/" className="text-blue-400 underline">무료 진단</Link>을 이용해보세요.
          </p>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500"
          >
            내 PC 사양으로 진단하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
