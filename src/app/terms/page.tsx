import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/config/site';

export const metadata: Metadata = {
  title: `이용약관 | ${SITE.name}`,
  description: '견적도사 이용약관입니다.',
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="text-sm text-slate-500 transition hover:text-slate-300">
            ← 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">이용약관</h1>
          <p className="mt-2 text-sm text-slate-500">최종 수정일: 2026년 6월 22일</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-slate-300">

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제1조 (목적)</h2>
            <p>
              본 약관은 견적도사(이하 "서비스")가 제공하는 PC 성능 진단 서비스의 이용 조건 및
              절차에 관한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제2조 (서비스 내용)</h2>
            <ul className="list-inside list-disc space-y-1 pl-2 text-slate-400">
              <li>PC 부품(CPU·GPU·RAM) 사양 기반 병목 진단</li>
              <li>게임별 실행 등급 판정 (원활 / 버벅임 / 실행 어려움)</li>
              <li>업그레이드 부품 추천 및 예상 가격 안내</li>
              <li>쿠팡·다나와 제휴 링크를 통한 구매 연결</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제3조 (서비스 이용)</h2>
            <p className="mb-2">
              서비스는 별도의 회원가입 없이 누구나 무료로 이용할 수 있습니다.
              서비스를 이용함으로써 본 약관에 동의한 것으로 간주합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제4조 (면책 조항)</h2>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/10 p-4 text-amber-300/80">
              <p className="mb-2">
                ① 서비스의 진단 결과는 PassMark 점수 기반 <strong className="text-amber-200">추정값</strong>이며,
                실제 성능을 보장하지 않습니다.
              </p>
              <p className="mb-2">
                ② 진단 결과를 바탕으로 한 구매 결정에 대한 책임은 이용자 본인에게 있으며,
                서비스 운영자는 구매 결과에 대해 책임을 지지 않습니다.
              </p>
              <p>
                ③ 제휴 링크를 통해 연결된 외부 사이트(쿠팡, 다나와)의 가격·재고·정책에 대해
                서비스 운영자는 책임을 지지 않습니다.
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제5조 (광고)</h2>
            <p>
              서비스는 Google AdSense를 통해 광고를 게재합니다.
              광고는 서비스 운영 비용 충당을 위한 것으로, 광고 내용에 대해 서비스 운영자는 책임을 지지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제6조 (지식재산권)</h2>
            <p>
              서비스에 포함된 콘텐츠(텍스트, 디자인, 코드 등)의 저작권은 서비스 운영자에게 있습니다.
              무단 복제·배포를 금합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제7조 (서비스 변경 및 중단)</h2>
            <p>
              운영자는 서비스 내용을 변경하거나 중단할 수 있으며, 이로 인한 손해에 대해 별도의 보상을 하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제8조 (준거법 및 관할)</h2>
            <p>
              본 약관은 대한민국 법률에 따라 해석되며, 분쟁 발생 시 운영자 소재지 관할 법원을 전속 관할로 합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">제9조 (문의)</h2>
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 px-5 py-4">
              <p className="text-slate-400">
                이메일:&nbsp;
                <a href="mailto:dlagh123@gmail.com" className="text-blue-400 underline">
                  dlagh123@gmail.com
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
