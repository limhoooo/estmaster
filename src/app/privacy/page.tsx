import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/config/site';

export const metadata: Metadata = {
  title: `개인정보처리방침 | ${SITE.name}`,
  description: '견적도사 개인정보처리방침입니다.',
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/" className="text-sm text-slate-500 transition hover:text-slate-300">
            ← 홈으로
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">개인정보처리방침</h1>
          <p className="mt-2 text-sm text-slate-500">최종 수정일: 2026년 6월 22일</p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed text-slate-300">

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">1. 개요</h2>
            <p>
              견적도사(이하 "서비스")는 사용자의 개인정보를 중요하게 생각하며, 「개인정보 보호법」 및
              관련 법령을 준수합니다. 본 방침은 서비스가 어떤 정보를 수집하고 어떻게 이용하는지
              설명합니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">2. 수집하는 정보</h2>
            <p className="mb-2">본 서비스는 다음과 같은 정보를 수집할 수 있습니다.</p>
            <ul className="list-inside list-disc space-y-1 pl-2 text-slate-400">
              <li>브라우저 종류 및 버전, 운영체제</li>
              <li>방문 페이지, 방문 시간, 이전 방문 페이지 (서버 로그)</li>
              <li>IP 주소 (익명화 처리)</li>
              <li>사용자가 입력한 PC 사양 정보 (CPU·GPU·RAM 등) — 서버에 저장하지 않으며, 브라우저 내에서만 처리됩니다</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">3. 정보 이용 목적</h2>
            <ul className="list-inside list-disc space-y-1 pl-2 text-slate-400">
              <li>서비스 기능 제공 (PC 성능 진단 및 업그레이드 추천)</li>
              <li>서비스 품질 개선 및 오류 수정</li>
              <li>광고 게재 (Google AdSense)</li>
              <li>서비스 이용 통계 분석</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">4. 제3자 서비스 — Google AdSense</h2>
            <p className="mb-2">
              본 서비스는 <strong className="text-white">Google AdSense</strong>를 통해 광고를 게재합니다.
              Google은 쿠키를 사용하여 사용자의 이전 방문 기록을 기반으로 관심사에 맞는 광고를 제공합니다.
            </p>
            <ul className="list-inside list-disc space-y-1 pl-2 text-slate-400">
              <li>Google의 광고 쿠키 사용 방식:
                <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer"
                  className="ml-1 text-blue-400 underline">
                  Google 광고 정책
                </a>
              </li>
              <li>개인 맞춤 광고 설정 관리:
                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer"
                  className="ml-1 text-blue-400 underline">
                  Google 광고 설정
                </a>
              </li>
              <li>광고 쿠키 거부:
                <a href="https://www.aboutads.info" target="_blank" rel="noopener noreferrer"
                  className="ml-1 text-blue-400 underline">
                  www.aboutads.info
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">5. 쿠키(Cookie) 사용</h2>
            <p className="mb-2">
              본 서비스는 서비스 자체적으로는 쿠키를 생성하지 않습니다. 단, 광고 파트너(Google AdSense)가
              쿠키를 사용할 수 있습니다.
            </p>
            <p>
              브라우저 설정에서 쿠키를 비활성화할 수 있으나, 일부 광고 기능이 제한될 수 있습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">6. 정보 보유 기간</h2>
            <p>
              서버 접속 로그는 최대 30일간 보관 후 자동 삭제됩니다.
              사용자가 입력한 PC 사양 정보는 서버에 저장되지 않으며, 브라우저를 닫으면 소멸됩니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">7. 미성년자 보호</h2>
            <p>
              본 서비스는 만 14세 미만 아동으로부터 고의로 개인정보를 수집하지 않습니다.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">8. 이용자 권리</h2>
            <p>
              이용자는 개인정보 열람, 수정, 삭제를 요청할 권리가 있습니다.
              문의사항은 아래 연락처로 보내주세요.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">9. 문의</h2>
            <div className="rounded-xl border border-slate-700/50 bg-slate-800/40 px-5 py-4">
              <p className="text-slate-400">
                이메일:&nbsp;
                <a href="mailto:dlagh123@gmail.com" className="text-blue-400 underline">
                  dlagh123@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-base font-semibold text-white">10. 방침 변경</h2>
            <p>
              개인정보처리방침이 변경될 경우 본 페이지를 통해 공지하며, 변경 후 계속 서비스를
              이용하면 변경된 방침에 동의한 것으로 간주합니다.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
