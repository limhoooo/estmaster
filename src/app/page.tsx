import type { Metadata } from 'next';
import { loadCPUs, loadGPUs } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';
import DiagnoseClient from '@/components/diagnose/DiagnoseClient';
import FeatureSection from '@/components/home/FeatureSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import SpecGuideModal from '@/components/ui/SpecGuideModal';
import AdUnit from '@/components/ui/AdUnit';
import CoupangBanner from '@/components/ui/CoupangBanner';

export const metadata: Metadata = {
  title: `${SITE.name} — 무료 PC 병목 진단 & 업그레이드 추천`,
  description:
    'CPU·GPU·RAM을 입력하면 병목 원인을 즉시 진단합니다. 게임별 실행 등급, 비용 대비 최적 업그레이드 부품까지 한 번에 확인하세요. 무료 · 즉시 · 서버 없음.',
  alternates: { canonical: SITE.url },
  openGraph: {
    title: `${SITE.name} — 무료 PC 병목 진단 & 업그레이드 추천`,
    description:
      'CPU·GPU·RAM 입력만으로 병목 원인 진단 + 게임별 실행 등급 + 비용 대비 최적 업그레이드 추천.',
    url: SITE.url,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: 'ko-KR',
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/result?cpu={cpu}&gpu={gpu}` },
        'query-input': 'required name=cpu required name=gpu',
      },
    },
    {
      '@type': 'WebApplication',
      '@id': `${SITE.url}/#app`,
      name: `${SITE.name} PC 업그레이드 진단`,
      url: SITE.url,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web Browser',
      inLanguage: 'ko-KR',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
      description:
        'CPU·GPU·RAM을 입력하면 병목을 진단하고 가장 체감 효과가 큰 업그레이드 부품을 추천해드립니다.',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'PC 병목 현상이란 무엇인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'CPU와 GPU 중 한쪽 성능이 다른 쪽보다 크게 낮아, 성능이 낮은 부품이 전체 시스템의 발목을 잡는 현상입니다. 예를 들어 고성능 GPU에 구형 CPU를 조합하면 CPU가 GPU의 성능을 충분히 활용하지 못합니다.',
          },
        },
        {
          '@type': 'Question',
          name: '어떤 부품을 업그레이드해야 가장 효과적인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '병목 진단 결과에서 더 낮은 점수를 받은 부품을 업그레이드하는 것이 가장 효과적입니다. CPU 병목이라면 CPU를, GPU 병목이라면 GPU를 교체하면 체감 성능이 크게 향상됩니다.',
          },
        },
        {
          '@type': 'Question',
          name: '견적도사는 무료인가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: '네, 완전 무료입니다. 서버 없이 브라우저에서만 동작하므로 개인정보를 수집하지 않습니다.',
          },
        },
        {
          '@type': 'Question',
          name: '진단 결과는 얼마나 정확한가요?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'PassMark 점수를 기반으로 한 추정값입니다. 실제 게임 성능은 드라이버, 해상도, 그래픽 설정 등에 따라 다를 수 있습니다. 모든 결과는 1080p(FHD) 기준이며 참고용으로 활용하시기 바랍니다.',
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  const cpus = loadCPUs();
  const gpus = loadGPUs();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        id="diagnose"
        className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 px-4 py-10 sm:py-14 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <div className="hero-badge mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              무료 · 즉시 진단 · 서버 없음
            </div>
            <h1 className="hero-title mt-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              내 PC,{' '}
              <span className="text-blue-400">어디가 막혔을까?</span>
            </h1>
            <p className="hero-desc mt-2 text-sm text-slate-400 md:text-base">
              사양을 입력하면 병목 원인과 최적의 업그레이드를 즉시 알려드립니다.
            </p>
            <div className="hero-desc flex justify-center">
              <SpecGuideModal />
            </div>
          </div>
          <div className="hero-form">
            <DiagnoseClient cpus={cpus} gpus={gpus} />
          </div>
        </div>
      </section>

      <FeatureSection />

      {/* 광고 — FeatureSection 과 HowItWorksSection 사이 */}
      <div className="bg-slate-950 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <AdUnit slot="SLOT_ID_BETWEEN_SECTIONS" format="horizontal" />
        </div>
      </div>

      <HowItWorksSection />
      <CoupangBanner />
    </>
  );
}
