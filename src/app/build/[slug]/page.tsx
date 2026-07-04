import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SITE } from '@/lib/config/site';
import { COMBOS } from '@/lib/data/combos';
import { loadCPUs, loadGPUs, loadGames } from '@/lib/data/loader';
import { calculateBottleneck } from '@/lib/engine/bottleneck';
import { calculateGameResults } from '@/lib/engine/game-grade';
import { getMockPrice } from '@/lib/data/mock-prices';
import BottleneckCard from '@/components/diagnose/BottleneckCard';
import GameResultList from '@/components/diagnose/GameResultList';

interface Params { slug: string; }

export function generateStaticParams() {
  return COMBOS.map(c => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const combo = COMBOS.find(c => c.slug === slug);
  if (!combo) return {};

  const title = `${combo.cpu} + ${combo.gpu} 조합 — 게임 얼마나 될까?`;
  const description = `${combo.cpu}와 ${combo.gpu} 조합(${combo.tagline})의 병목 분석과 인기 게임 33종 실행 등급을 1080p 기준으로 확인하세요.`;

  return {
    title,
    description,
    keywords: [`${combo.cpu} ${combo.gpu}`, `${combo.cpu} ${combo.gpu} 조합`, `${combo.gpu} 게임 성능`, 'PC 견적 조합 추천'],
    alternates: { canonical: `${SITE.url}/build/${slug}/` },
  };
}

export default async function ComboPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const combo = COMBOS.find(c => c.slug === slug);
  if (!combo) notFound();

  const cpus = loadCPUs();
  const gpus = loadGPUs();
  const games = loadGames();

  const cpuData = cpus.find(c => c.model === combo.cpu);
  const gpuData = gpus.find(g => g.model === combo.gpu);
  if (!cpuData || !gpuData) notFound();

  const bottleneck = calculateBottleneck(cpuData, gpuData, '1080p', cpus, gpus);
  const gameResults = calculateGameResults(cpuData, gpuData, 16, games, cpus, gpus);
  const cpuPrice = getMockPrice(cpuData.model);
  const gpuPrice = getMockPrice(gpuData.model);

  const smoothCount = gameResults.filter(r => r.overallGrade === 'smooth').length;
  const playableCount = gameResults.filter(r => r.overallGrade === 'playable').length;
  const difficultCount = gameResults.filter(r => r.overallGrade === 'difficult').length;

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* 브레드크럼 */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-300">홈</Link>
          <span>/</span>
          <Link href="/build" className="hover:text-slate-300">인기 조합</Link>
          <span>/</span>
          <span className="text-slate-400">{combo.cpu} + {combo.gpu}</span>
        </nav>

        {/* 헤더 */}
        <header className="mb-8 border-b border-slate-800 pb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-blue-400">{combo.tagline}</p>
          <h1 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
            {combo.cpu} + {combo.gpu} 조합, 게임 얼마나 될까?
          </h1>
          <p className="mb-4 text-slate-400">
            인기 게임 {gameResults.length}종 기준 실행 등급과 병목 분석을 1080p·16GB RAM 기준으로 확인하세요.
          </p>
          <div className="flex flex-wrap gap-2 text-xs">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-emerald-300">원활 {smoothCount}</span>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-amber-300">버벅임 {playableCount}</span>
            <span className="rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 text-red-300">어려움 {difficultCount}</span>
          </div>
        </header>

        <div className="space-y-6">
          <BottleneckCard result={bottleneck} cpuModel={cpuData.model} gpuModel={gpuData.model} />

          {/* 부품 구매 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[{ label: 'CPU', model: cpuData.model, price: cpuPrice }, { label: 'GPU', model: gpuData.model, price: gpuPrice }].map(part => (
              <div key={part.label} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-slate-500">{part.label}</p>
                <p className="mb-2 text-base font-semibold text-white">{part.model}</p>
                <p className="mb-3 text-sm font-semibold text-blue-400">{part.price.approximate}</p>
                <div className="flex gap-2">
                  <a href={part.price.coupang_url} target="_blank" rel="noopener noreferrer"
                    className="flex-1 rounded-lg bg-red-500 py-2 text-center text-xs font-medium text-white hover:bg-red-400">
                    쿠팡에서 보기
                  </a>
                  <a href={part.price.danawa_url} target="_blank" rel="noopener noreferrer"
                    className="flex-1 rounded-lg border border-slate-600 py-2 text-center text-xs font-medium text-slate-300 hover:bg-slate-700">
                    다나와에서 보기
                  </a>
                </div>
              </div>
            ))}
          </div>

          <GameResultList results={gameResults} />

          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 px-5 py-4">
            <p className="text-xs leading-relaxed text-slate-500">
              ⚠️ <strong className="text-slate-400">진단 한계 안내:</strong> 모든 결과는 PassMark 점수 기반 추정값(RAM 16GB 기준)으로,
              실제 게임 성능은 드라이버·운영체제·해상도·그래픽 옵션에 따라 다를 수 있습니다.
              게임 사양 기준은 <strong className="text-slate-400">1080p (FHD)</strong>입니다.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-center">
            <p className="mb-3 text-sm text-slate-400">이미 갖고 있는 내 PC로 직접 진단하고 싶다면?</p>
            <Link href="/diagnose"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500">
              내 PC 직접 진단하기 →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
