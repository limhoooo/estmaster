import type { Metadata } from 'next';
import { loadCPUs, loadGPUs } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';
import DiagnoseClient from '@/components/diagnose/DiagnoseClient';
import FeatureSection from '@/components/home/FeatureSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import FAQSection from '@/components/home/FAQSection';
import SpecGuideModal from '@/components/ui/SpecGuideModal';
import AdUnit from '@/components/ui/AdUnit';
import CoupangBanner from '@/components/ui/CoupangBanner';

export const metadata: Metadata = {
  title: '견적도사 — 무료 PC 업그레이드 진단 | CPU GPU 병목 확인 & 게임 사양 추천',
  description:
    'CPU·GPU·RAM을 입력하면 PC 병목 원인을 즉시 진단합니다. 사이버펑크·배그·롤 등 33개 게임 실행 등급, 비용 대비 최적 그래픽카드·프로세서 업그레이드 추천까지 한 번에. 무료·즉시·개인정보 없음.',
  keywords: [
    'PC 업그레이드', 'PC 병목', 'CPU 병목', 'GPU 병목', 'PC 성능 진단',
    '그래픽카드 추천', '게임 권장 사양', 'PC 사양 확인', 'CPU GPU 비교',
    '컴퓨터 업그레이드', '게임 PC 추천', 'RTX 4060 추천', 'PC 성능 테스트',
    '사이버펑크 사양', '배틀그라운드 권장사양', '견적도사',
  ],
  alternates: { canonical: SITE.url },
  openGraph: {
    title: '견적도사 — 무료 PC 병목 진단 & GPU CPU 업그레이드 추천',
    description: 'CPU·GPU 입력만으로 병목 진단 + 33개 게임 실행 등급 + 최적 업그레이드 추천. 완전 무료.',
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
      name: '견적도사 PC 업그레이드 진단',
      url: SITE.url,
      applicationCategory: 'UtilitiesApplication',
      operatingSystem: 'Web Browser',
      inLanguage: 'ko-KR',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
      featureList: [
        'CPU GPU 병목 진단',
        '33개 게임별 실행 등급 판정',
        '비용 대비 최적 업그레이드 추천',
        '노트북 자동 감지',
        '파워(PSU) 호환성 체크',
      ],
      description: 'CPU·GPU·RAM을 입력하면 PC 병목을 진단하고 가장 체감 효과가 큰 업그레이드 부품과 가격을 추천합니다.',
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE.url}/#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'PC 병목 현상이란 무엇인가요?',
          acceptedAnswer: { '@type': 'Answer', text: 'CPU와 GPU 중 한쪽 성능이 다른 쪽보다 크게 낮아, 성능이 낮은 부품이 전체 시스템의 발목을 잡는 현상입니다. 예를 들어 RTX 4080 같은 고성능 GPU에 구형 i5-8600K CPU를 조합하면 CPU가 GPU의 성능을 충분히 활용하지 못해 게임 성능이 저하됩니다.' },
        },
        {
          '@type': 'Question',
          name: 'CPU와 GPU 중 어느 것을 먼저 업그레이드해야 할까요?',
          acceptedAnswer: { '@type': 'Answer', text: '병목 진단 결과를 기준으로 결정하세요. GPU가 병목이라면 그래픽카드(RTX 4060, RTX 4070 등)를 교체하는 것이 게임 성능 향상에 가장 효과적입니다. 일반적으로 게임 성능에는 GPU 업그레이드 효과가 더 직접적으로 나타납니다.' },
        },
        {
          '@type': 'Question',
          name: '그래픽카드(GPU) 교체 효과가 얼마나 큰가요?',
          acceptedAnswer: { '@type': 'Answer', text: 'GPU 병목 상황에서 그래픽카드를 교체하면 1080p·1440p 게임 성능이 20~100% 이상 향상될 수 있습니다. 예를 들어 GTX 1060에서 RTX 4060으로 교체하면 사이버펑크 2077, 엘든 링 등 고사양 게임에서 실행 등급이 크게 개선될 수 있습니다.' },
        },
        {
          '@type': 'Question',
          name: '게임 PC에 RAM은 얼마나 필요한가요?',
          acceptedAnswer: { '@type': 'Answer', text: '대부분의 최신 게임(배틀그라운드, 사이버펑크 2077, 엘든 링 등)의 권장 사양은 16GB입니다. 현재 8GB RAM 사용자는 16GB로 업그레이드하면 게임 로딩 속도와 멀티태스킹이 크게 개선됩니다.' },
        },
        {
          '@type': 'Question',
          name: '게임 최소사양과 권장사양의 차이는 무엇인가요?',
          acceptedAnswer: { '@type': 'Answer', text: '최소사양은 게임이 구동은 되지만 낮은 그래픽 설정에서 버벅임이 있을 수 있는 사양입니다. 권장사양은 게임사가 의도한 그래픽 설정에서 원활하게 즐길 수 있는 사양입니다.' },
        },
        {
          '@type': 'Question',
          name: '1080p, 1440p, 4K 해상도별 필요한 GPU 사양은?',
          acceptedAnswer: { '@type': 'Answer', text: '1080p(FHD) 기준 RTX 3060으로 원활한 게임이, 1440p(QHD)에서는 RTX 3070~3080급이 필요할 수 있습니다. 4K 고사양 게임은 RTX 4080 이상을 권장합니다. 견적도사의 진단 결과는 1080p 기준입니다.' },
        },
        {
          '@type': 'Question',
          name: '파워(PSU) 용량은 얼마나 필요한가요?',
          acceptedAnswer: { '@type': 'Answer', text: 'RTX 4060은 550W, RTX 4070은 650W, RTX 4080은 750W 이상을 권장합니다. 견적도사는 GPU 추천 시 파워 호환성을 자동으로 체크해 경고를 표시합니다.' },
        },
        {
          '@type': 'Question',
          name: '노트북으로도 PC 업그레이드가 가능한가요?',
          acceptedAnswer: { '@type': 'Answer', text: '대부분의 노트북은 CPU와 GPU가 메인보드에 납땜되어 있어 교체가 불가능합니다. 견적도사는 노트북 CPU가 감지되면 자동으로 안내하고 새 노트북 구매 시 참고할 스펙 기준을 제시합니다.' },
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

      <div className="bg-slate-950 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <AdUnit slot="SLOT_ID_BETWEEN_SECTIONS" format="horizontal" />
        </div>
      </div>

      <HowItWorksSection />
      <FAQSection />
      <CoupangBanner />
    </>
  );
}
