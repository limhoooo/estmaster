'use client';

import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import type { CPU, GPU, Game, Resolution } from '@/lib/types';
import { calculateBottleneck } from '@/lib/engine/bottleneck';
import { calculateGameResults } from '@/lib/engine/game-grade';
import { getRecommendation } from '@/lib/engine/recommend';
import { isLaptop, isIntegratedGPU } from '@/lib/engine/laptop';
import BottleneckCard from '@/components/diagnose/BottleneckCard';
import GameResultList from '@/components/diagnose/GameResultList';
import RecommendSection from '@/components/diagnose/RecommendSection';
import AdUnit from '@/components/ui/AdUnit';

interface Props {
  cpus: CPU[];
  gpus: GPU[];
  games: Game[];
}

export default function ResultClient({ cpus, gpus, games }: Props) {
  const searchParams = useSearchParams();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    const text = `내 PC 진단 결과를 확인해보세요! — 견적도사`;
    if (navigator.share) {
      try { await navigator.share({ title: '견적도사 PC 진단 결과', text, url }); } catch { /* 취소 */ }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const cpu = searchParams.get('cpu') ?? '';
  const gpu = searchParams.get('gpu') ?? '';
  const ram = Number(searchParams.get('ram') ?? '16');
  const resolution = (searchParams.get('resolution') ?? '1080p') as Resolution;
  const psuWatt = Number(searchParams.get('psu') ?? '500');

  const result = useMemo(() => {
    if (!cpu || !gpu) return null;
    const cpuData = cpus.find(c => c.model === cpu);
    const gpuData = gpus.find(g => g.model === gpu);
    if (!cpuData || !gpuData) return null;

    const bottleneck = calculateBottleneck(cpuData, gpuData, resolution, cpus, gpus);
    const gameResults = calculateGameResults(cpuData, gpuData, ram, games, cpus, gpus);
    const recommendation = getRecommendation(cpuData, gpuData, bottleneck, gameResults, ram, cpus, gpus, psuWatt);
    const laptopDevice = isLaptop(cpuData, gpuData);
    const integratedGpu = isIntegratedGPU(gpuData);

    return { cpuData, gpuData, bottleneck, gameResults, recommendation, laptopDevice, integratedGpu };
  }, [cpu, gpu, ram, resolution, psuWatt, cpus, gpus, games]);

  if (!cpu || !gpu) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-slate-400">사양 정보가 없습니다.</p>
        <Link href="/" className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-500">
          진단하러 가기
        </Link>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
        <p className="text-slate-400">선택한 부품 정보를 찾을 수 없습니다.</p>
        <Link href="/" className="rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-medium text-white hover:bg-blue-500">
          처음으로 돌아가기
        </Link>
      </div>
    );
  }

  const { bottleneck, gameResults, recommendation, laptopDevice, integratedGpu } = result;

  return (
    <>
      {/* 헤더 */}
      <div className="mb-8 border-b border-slate-800 pb-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-bold text-white sm:text-2xl md:text-3xl">진단 결과</h1>
            {laptopDevice && (
              <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">
                노트북
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-slate-500">입력한 사양을 기반으로 분석한 결과입니다.</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[cpu, gpu, `${ram}GB RAM`, resolution].map(tag => (
              <span key={tag} className="rounded-lg bg-slate-800 px-3 py-1 text-xs text-slate-400">{tag}</span>
            ))}
          </div>
        </div>
        <Link href="/" className="flex-shrink-0 rounded-xl border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white">
          ← 다시 진단
        </Link>
        </div>
      </div>

      {/* 노트북 배너 */}
      {laptopDevice && (
        <div className="mb-6 rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
          <div className="flex gap-3">
            <svg className="mt-0.5 flex-shrink-0 text-amber-400" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2"/>
            </svg>
            <div>
              <p className="text-sm font-semibold text-amber-300">노트북으로 감지되었습니다</p>
              <p className="mt-1 text-xs leading-relaxed text-amber-400/80">
                노트북은 CPU와 GPU를 교체할 수 없습니다. 아래 결과는 <strong className="text-amber-300">현재 성능 파악용</strong>으로 활용하시고,
                업그레이드가 필요하다면 <strong className="text-amber-300">새 노트북 구매 시 스펙 선택 기준</strong>으로 참고하세요.
              </p>
              {integratedGpu && (
                <p className="mt-2 text-xs leading-relaxed text-amber-400/80">
                  💡 <strong className="text-amber-300">내장 그래픽 감지:</strong>{' '}
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

        <AdUnit slot="SLOT_ID_RESULT_MID" format="rectangle" />

        <GameResultList results={gameResults} />

        {laptopDevice ? (
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/30 p-6">
            <h3 className="mb-1 text-base font-semibold text-white">업그레이드 추천</h3>
            <p className="mb-4 text-sm text-slate-400">노트북은 CPU·GPU 교체가 불가능하므로 업그레이드 경로가 제한됩니다.</p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 px-4 py-3">
                <span className="mt-0.5 flex-shrink-0 text-blue-400">✓</span>
                <div>
                  <p className="text-sm font-medium text-slate-200">RAM 업그레이드 (가능한 경우)</p>
                  <p className="mt-0.5 text-xs text-slate-500">일부 노트북은 SODIMM 슬롯으로 RAM을 교체할 수 있습니다.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-slate-800/60 px-4 py-3">
                <span className="mt-0.5 flex-shrink-0 text-blue-400">✓</span>
                <div>
                  <p className="text-sm font-medium text-slate-200">새 노트북 구매 시 참고</p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {recommendation
                      ? `${recommendation.component} 성능이 부족합니다. 새 노트북 구매 시 ${recommendation.component} 스펙을 우선 확인하세요.`
                      : '현재 구성이 균형 잡혀 있습니다. 전반적인 성능 향상을 원하면 상위 라인업을 고려하세요.'}
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
            게임 사양 기준은 <strong className="text-slate-400">1080p (FHD)</strong> 기준입니다.
          </p>
        </div>

        <AdUnit slot="SLOT_ID_RESULT_BOTTOM" format="horizontal" />

        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <button
            type="button"
            onClick={handleShare}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-slate-600 py-3.5 text-base font-semibold text-slate-300 transition hover:border-slate-400 hover:text-white sm:w-auto sm:px-8"
          >
            {copied ? (
              <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M3 8l3.5 3.5L13 4"/></svg> 복사됨!</>
            ) : (
              <><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2H6a1 1 0 00-1 1v1M4 5H3a1 1 0 00-1 1v7a1 1 0 001 1h8a1 1 0 001-1v-1M8 2h4a1 1 0 011 1v7a1 1 0 01-1 1h-1"/><path d="M6 9h4M8 7v4"/></svg> 결과 공유하기</>
            )}
          </button>
          <Link href="/" className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500 sm:w-auto sm:px-8">
            ← 다시 진단하기
          </Link>
        </div>
      </div>
    </>
  );
}
