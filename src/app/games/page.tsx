import type { Metadata } from 'next';
import Link from 'next/link';
import { loadGames } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';

export const metadata: Metadata = {
  title: `게임별 권장 사양 | ${SITE.name}`,
  description: '인기 게임별 최소·권장 CPU·GPU·RAM 사양을 한눈에 확인하세요. 1080p(FHD) 기준.',
  alternates: { canonical: `${SITE.url}/games` },
};

export default function GamesPage() {
  const games = loadGames();

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">

        {/* 헤더 */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-slate-500 transition hover:text-slate-300">
            ← 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">게임별 권장 사양</h1>
          <p className="mt-2 text-sm text-slate-400">
            아래 사양은 모두 <strong className="text-slate-300">1080p (FHD) 기준</strong>입니다.
            실제 권장 사양은 그래픽 옵션·드라이버에 따라 다를 수 있습니다.
          </p>
        </div>

        {/* 게임 카드 목록 */}
        <div className="space-y-4">
          {games.map(game => (
            <div
              key={game.name}
              className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/40"
            >
              {/* 게임 이름 */}
              <div className="border-b border-slate-700/50 px-5 py-3">
                <h2 className="font-semibold text-white">{game.name}</h2>
              </div>

              {/* 사양 비교 */}
              <div className="grid grid-cols-2 divide-x divide-slate-700/50">
                {/* 최소 사양 */}
                <div className="px-4 py-4 sm:px-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-slate-500">
                    최소 사양
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 w-8 flex-shrink-0 text-[10px] font-bold uppercase text-slate-500">CPU</span>
                      <span className="text-xs font-medium leading-snug text-slate-300">{game.min_cpu}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 w-8 flex-shrink-0 text-[10px] font-bold uppercase text-slate-500">GPU</span>
                      <span className="text-xs font-medium leading-snug text-slate-300">{game.min_gpu}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 w-8 flex-shrink-0 text-[10px] font-bold uppercase text-slate-500">RAM</span>
                      <span className="text-xs font-medium leading-snug text-slate-300">{game.min_ram}GB</span>
                    </li>
                  </ul>
                </div>

                {/* 권장 사양 */}
                <div className="bg-blue-500/[0.04] px-4 py-4 sm:px-6">
                  <p className="mb-3 text-[11px] font-semibold uppercase tracking-widest text-blue-400">
                    권장 사양
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 w-8 flex-shrink-0 text-[10px] font-bold uppercase text-slate-500">CPU</span>
                      <span className="text-xs font-medium leading-snug text-slate-200">{game.rec_cpu}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 w-8 flex-shrink-0 text-[10px] font-bold uppercase text-slate-500">GPU</span>
                      <span className="text-xs font-medium leading-snug text-slate-200">{game.rec_gpu}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-0.5 w-8 flex-shrink-0 text-[10px] font-bold uppercase text-slate-500">RAM</span>
                      <span className="text-xs font-medium leading-snug text-slate-200">{game.rec_ram}GB</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 하단 안내 + CTA */}
        <div className="mt-8 rounded-xl border border-slate-700/50 bg-slate-800/30 px-5 py-4">
          <p className="text-xs leading-relaxed text-slate-500">
            ⚠️ 위 사양은 각 게임사가 공개한 PC 권장 사양을 기반으로 합니다.
            실제 성능은 그래픽 설정·해상도·드라이버 버전에 따라 다를 수 있습니다.
            내 PC가 어떤 게임을 원활히 실행할 수 있는지 확인하려면 무료 진단을 이용해보세요.
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
