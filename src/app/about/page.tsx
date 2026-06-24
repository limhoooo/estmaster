import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/config/site';

export const metadata: Metadata = {
  title: '견적도사 서비스 소개 — 무료 PC 병목 진단 도구 | 견적도사',
  description: '견적도사는 PC CPU·GPU·RAM 사양을 입력하면 병목 원인을 진단하고 비용 대비 최적의 그래픽카드·프로세서 업그레이드를 추천하는 무료 도구입니다.',
  keywords: ['PC 성능 진단', 'PC 업그레이드 도구', '무료 벤치마크', '견적도사 소개'],
  robots: { index: true, follow: true },
  alternates: { canonical: `${SITE.url}/about` },
};

const FEATURES = [
  {
    icon: '🔍',
    title: '병목 진단',
    desc: 'CPU와 GPU의 PassMark 점수를 비교해 어느 부품이 전체 성능의 발목을 잡고 있는지 즉시 파악합니다. 모니터 해상도도 반영해 더 정확한 진단을 제공합니다.',
  },
  {
    icon: '🎮',
    title: '게임별 실행 등급',
    desc: '인기 게임들의 최소·권장 사양과 내 PC를 비교해 "원활 / 버벅임 / 실행 어려움" 3단계로 판정합니다. 업그레이드 전후 등급 변화를 한눈에 확인할 수 있습니다.',
  },
  {
    icon: '💰',
    title: '비용 대비 효과 추천',
    desc: '"병목 12%"가 아니라 "X만원짜리 Y로 바꾸면 사이버펑크 원활 실행"처럼 실질적인 업그레이드 효과를 알려드립니다.',
  },
  {
    icon: '🔒',
    title: '100% 클라이언트 처리',
    desc: '모든 진단은 브라우저 내에서만 이루어집니다. 입력한 PC 사양이 서버에 저장되거나 전송되지 않습니다.',
  },
  {
    icon: '⚠️',
    title: '정직한 한계 안내',
    desc: '진단 결과에는 항상 추정값임을 명시하고, 1080p 기준 판정임을 안내합니다. 과장 없는 정직한 정보 제공을 원칙으로 합니다.',
  },
  {
    icon: '💻',
    title: '노트북 예외 처리',
    desc: '노트북 CPU/GPU가 감지되면 "교체 불가" 안내와 함께 새 노트북 구매 시 스펙 선택 기준으로 활용할 수 있도록 안내합니다.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10">
          <Link href="/" className="text-sm text-slate-500 transition hover:text-slate-300">
            ← 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">서비스 소개</h1>
          <p className="mt-3 text-slate-400">
            견적도사는 내 PC가 왜 느린지, 어떤 부품을 바꿔야 가장 효과적인지 알려주는
            <strong className="text-white"> 무료 PC 업그레이드 진단 도구</strong>입니다.
          </p>
        </div>

        {/* 핵심 기능 */}
        <section className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-white">주요 기능</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {FEATURES.map(f => (
              <div key={f.title} className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-5">
                <div className="mb-2 text-2xl">{f.icon}</div>
                <h3 className="mb-1 text-sm font-semibold text-white">{f.title}</h3>
                <p className="text-xs leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 사용 방법 */}
        <section className="mb-12">
          <h2 className="mb-6 text-lg font-semibold text-white">사용 방법</h2>
          <ol className="space-y-4">
            {[
              { n: '1', t: 'PC 사양 입력', d: 'CPU, GPU, RAM, 모니터 해상도를 검색형 드롭다운으로 선택합니다. 사양을 모르면 사양 확인 가이드 버튼을 눌러 확인할 수 있습니다.' },
              { n: '2', t: '진단 시작', d: '"진단 시작하기" 버튼을 누르면 즉시 병목 분석과 게임별 실행 등급 판정이 이루어집니다.' },
              { n: '3', t: '결과 확인', d: '병목 원인, 게임 실행 등급, 업그레이드 추천 부품과 예상 가격을 한 페이지에서 확인합니다.' },
            ].map(s => (
              <li key={s.n} className="flex gap-4">
                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-sm font-bold text-blue-400">
                  {s.n}
                </span>
                <div>
                  <p className="font-medium text-white">{s.t}</p>
                  <p className="mt-0.5 text-sm text-slate-400">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* 데이터 출처 */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-white">데이터 출처 및 정확도</h2>
          <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">
            <p className="text-sm leading-relaxed text-amber-300/80">
              ⚠️ 모든 CPU·GPU 점수는 <strong className="text-amber-200">PassMark 벤치마크 기반 추정값</strong>입니다.
              실제 게임 성능은 드라이버, 운영체제, 그래픽 옵션, 오버클럭 등에 따라 다를 수 있습니다.
              게임 사양 기준은 <strong className="text-amber-200">1080p (FHD)</strong> 기준이며,
              1440p·4K 환경에서는 체감이 다를 수 있습니다. 본 서비스의 결과는 <strong className="text-amber-200">참고용</strong>으로만 활용해 주세요.
            </p>
          </div>
        </section>

        {/* 수익화 */}
        <section className="mb-12">
          <h2 className="mb-4 text-lg font-semibold text-white">서비스 운영 방식</h2>
          <p className="text-sm leading-relaxed text-slate-400">
            견적도사는 완전 무료로 제공됩니다. 서비스 운영 비용은
            <strong className="text-white"> Google AdSense 광고</strong> 및
            <strong className="text-white"> 쿠팡파트너스·다나와 제휴 링크</strong>를 통해 충당합니다.
            제휴 링크를 통해 구매하셔도 구매자에게 추가 비용은 없으며, 소정의 수수료가 운영자에게 지급됩니다.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500"
          >
            지금 바로 진단하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}
