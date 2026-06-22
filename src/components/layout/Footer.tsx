import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* 브랜드 */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                E
              </div>
              <span className="font-bold text-white">견적도사</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              PC 사양을 입력하면 병목 원인과<br />
              최적의 업그레이드를 추천해드립니다.
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              서비스
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-slate-400 transition hover:text-white">
                  PC 성능 진단
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-slate-400 transition hover:text-white">
                  서비스 소개
                </Link>
              </li>
            </ul>
          </div>

          {/* 정책 */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">
              정책
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-slate-400 transition hover:text-white">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-slate-400 transition hover:text-white">
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 space-y-2 text-center">
          <p className="text-xs text-slate-600">
            진단 결과는 PassMark 점수 기반 추정값입니다. 실제 성능과 차이가 있을 수 있습니다.
            게임 사양 기준은 <strong className="text-slate-500">1080p (FHD)</strong> 기준입니다.
          </p>
          <p className="text-xs text-slate-700">
            © 2026 EstMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
