import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import type { Resolution } from '@/lib/types';
import { loadCPUs, loadGPUs, loadGames } from '@/lib/data/loader';
import { calculateBottleneck } from '@/lib/engine/bottleneck';
import { calculateGameResults } from '@/lib/engine/game-grade';
import { getRecommendation } from '@/lib/engine/recommend';
import { isLaptop, isIntegratedGPU } from '@/lib/engine/laptop';
import { SITE } from '@/lib/config/site';
import BottleneckCard from '@/components/diagnose/BottleneckCard';
import GameResultList from '@/components/diagnose/GameResultList';
import RecommendSection from '@/components/diagnose/RecommendSection';
import AdUnit from '@/components/ui/AdUnit';

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { cpu, gpu } = await searchParams;
  const title = cpu && gpu
    ? `${cpu} + ${gpu} 진단 결과`
    : 'PC 진단 결과';
  return {
    title,
    description: `${cpu ?? 'CPU'} + ${gpu ?? 'GPU'} 조합의 병목 분석, 게임별 실행 등급, 업그레이드 추천 결과입니다.`,
    robots: { index: false, follow: false }, // 동적 결과 페이지는 색인 제외
    openGraph: {
      title: `${title} | ${SITE.name}`,
      url: `${SITE.url}/result`,
    },
  };
}

interface Props {
  searchParams: Promise<{
    cpu?: string;
    gpu?: string;
    ram?: string;
    resolution?: string;
    psu?: string;
  }>;
}

export default async function ResultPage({ searchParams }: Props) {
  const { cpu, gpu, ram = '16', resolution = '1080p', psu = '500' } = await searchParams;

  if (!cpu || !gpu) redirect('/');

  const cpus = loadCPUs();
  const gpus = loadGPUs();
  const games = loadGames();

  const cpuData = cpus.find(c => c.model === cpu);
  const gpuData = gpus.find(g => g.model === gpu);

  if (!cpuData || !gpuData) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900 text-center">
        <p className="text-slate-400">선택한 부품 정보를 찾을 수 없습니다.</p>
        <Link href="/" className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-500">
          처음으로 돌아가기
        </Link>
      </div>
    );
  }

  const laptopDevice = isLaptop(cpuData, gpuData);
  const integratedGpu = isIntegratedGPU(gpuData);

  const input = { cpu, gpu, ram: Number(ram), resolution: resolution as Resolution, psuWatt: Number(psu) };
  const bottleneck = calculateBottleneck(cpuData, gpuData, input.resolution, cpus, gpus);
  const gameResults = calculateGameResults(cpuData, gpuData, input.ram, games, cpus, gpus);
  const recommendation = getRecommendation(cpuData, gpuData, bottleneck, gameResults, input.ram, cpus, gpus, input.psuWatt);

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">

        {/* 헤더 */}
        <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-8">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl font-bold text-white md:text-3xl">진단 결과</h1>
              {laptopDevice && (
                <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                  노트북
                </span>
              )}
            </div>
            <p className="mt-1 text-sm text-slate-500">입력한 사양을 기반으로 분석한 결과입니다.</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[cpu, gpu, `${ram}GB RAM`, resolution].map(tag => (
                <span key={tag} className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/"
            className="rounded-xl border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white"
          >
            ← 다시 진단하기
          </Link>
        </div>

        {/* 노트북 안내 배너 */}
        {laptopDevice && (
          <div className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
            <div className="flex gap-3">
              <svg className="mt-0.5 flex-shrink-0 text-amber-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="14" rx="2"/>
                <path d="M8 20h8M12 18v2"/>
              </svg>
              <div>
                <p className="text-sm font-semibold text-amber-300">노트북으로 감지되었습니다</p>
                <p className="mt-1 text-xs leading-relaxed text-amber-400/80">
                  노트북은 CPU와 GPU를 교체할 수 없습니다. 아래 병목 분석과 게임 등급은{' '}
                  <strong className="text-amber-300">현재 성능 파악용</strong>으로 활용하시고,
                  업그레이드가 필요하다면 <strong className="text-amber-300">새 노트북 구매 시 스펙 선택 기준</strong>으로 참고하세요.
                </p>
                {integratedGpu && (
                  <p className="mt-2 text-xs leading-relaxed text-amber-400/80">
                    💡 <strong className="text-amber-300">내장 그래픽 감지:</strong>{' '}
                    외장 그래픽카드가 없는 경우 게임 성능이 크게 제한됩니다.
                    RAM 업그레이드(가능한 경우)로 내장 그래픽 성능을 소폭 개선할 수 있습니다.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 결과 */}
        <div className="space-y-6">
          <BottleneckCard result={bottleneck} cpuModel={cpu} gpuModel={gpu} />

          {/* 광고 — 병목 카드 아래 */}
          <AdUnit slot="SLOT_ID_RESULT_MID" format="rectangle" />

          <GameResultList results={gameResults} />

          {/* 업그레이드 추천 — 노트북은 별도 안내 */}
          {laptopDevice ? (
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6">
              <h3 className="mb-1 text-base font-semibold text-white">업그레이드 추천</h3>
              <p className="mb-4 text-sm text-slate-400">
                노트북은 CPU·GPU 교체가 불가능하므로 업그레이드 경로가 제한됩니다.
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 px-4 py-3">
                  <span className="mt-0.5 flex-shrink-0 text-blue-400">✓</span>
                  <div>
                    <p className="text-sm font-medium text-slate-200">RAM 업그레이드 (가능한 경우)</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      일부 노트북은 SODIMM 슬롯으로 RAM을 교체할 수 있습니다. 내장 그래픽 사용 시 효과적입니다.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 px-4 py-3">
                  <span className="mt-0.5 flex-shrink-0 text-blue-400">✓</span>
                  <div>
                    <p className="text-sm font-medium text-slate-200">새 노트북 구매 시 참고</p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      {recommendation
                        ? `위 병목 분석 결과 ${recommendation.component} 성능이 부족합니다. 새 노트북 구매 시 ${recommendation.component} 스펙을 우선 확인하세요.`
                        : '현재 구성이 균형 잡혀 있습니다. 전반적인 성능 향상을 원하면 상위 라인업 노트북을 고려하세요.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : recommendation ? (
            <RecommendSection recommendation={recommendation} />
          ) : (
            <div className="rounded-2xl border border-emerald-800/30 bg-emerald-900/20 px-6 py-4">
              <p className="text-sm font-medium text-emerald-400">
                ✓ 현재 구성이 데이터베이스 최상위 수준입니다. 추가 업그레이드 추천이 없습니다.
              </p>
            </div>
          )}

          <div className="rounded-xl border border-slate-700/50 bg-slate-800/30 px-5 py-4">
            <p className="text-xs leading-relaxed text-slate-500">
              ⚠️ <strong className="text-slate-400">진단 한계 안내:</strong> 모든 결과는 PassMark 점수 기반 추정값으로,
              실제 게임 성능은 드라이버·운영체제·해상도·그래픽 옵션·오버클럭 등에 따라 다를 수 있습니다.
              게임 사양 기준은 <strong className="text-slate-400">1080p (FHD)</strong> 기준이며, 1440p/4K 사용자는 체감이 다를 수 있습니다.
            </p>
          </div>

          {/* 광고 — 하단 CTA 위 */}
          <AdUnit slot="SLOT_ID_RESULT_BOTTOM" format="horizontal" />

          <div className="pt-2 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500"
            >
              ← 다시 진단하기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
