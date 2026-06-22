import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">

        {/* 모바일: 브랜드 + 링크 2열 */}
        <div className="sm:hidden">
          <div className="mb-5 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
              E
            </div>
            <span className="font-bold text-white">견적도사</span>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-400">
            <Link href="/" className="hover:text-white">PC 성능 진단</Link>
            <Link href="/about" className="hover:text-white">서비스 소개</Link>
            <Link href="/privacy" className="hover:text-white">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-white">이용약관</Link>
          </div>
        </div>

        {/* sm 이상: 3열 그리드 */}
        <div className="hidden sm:grid sm:grid-cols-3 sm:gap-8">
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
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">서비스</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">PC 성능 진단</Link></li>
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">서비스 소개</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">정책</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">이용약관</Link></li>
            </ul>
          </div>
        </div>

        {/* 공통 하단 */}
        <div className="mt-6 border-t border-slate-800 pt-5 space-y-1 text-center">
          <p className="text-xs text-slate-600">
            진단 결과는 PassMark 기반 추정값 · 게임 사양 기준 <strong className="text-slate-500">1080p</strong>
          </p>
          <p className="text-xs text-slate-700">© 2026 EstMaster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
