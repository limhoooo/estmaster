import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">

        {/* 모바일 레이아웃 */}
        <div className="sm:hidden space-y-6">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
              E
            </div>
            <span className="font-bold text-white">견적도사</span>
          </div>
          <p className="text-xs leading-relaxed text-slate-500">
            내 PC 사양을 입력하면 병목 원인을 진단하고<br />
            예산에 맞는 최적의 업그레이드를 추천해드립니다.
          </p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm text-slate-400">
            <Link href="/diagnose" className="hover:text-white transition-colors">PC 성능 진단</Link>
            <Link href="/compare" className="hover:text-white transition-colors">GPU / CPU 비교</Link>
            <Link href="/tier" className="hover:text-white transition-colors">그래픽카드 티어표</Link>
            <Link href="/games" className="hover:text-white transition-colors">게임별 권장 사양</Link>
            <Link href="/articles" className="hover:text-white transition-colors">가이드 아티클</Link>
            <Link href="/custom" className="hover:text-white transition-colors">맞춤 견적 추천</Link>
            <Link href="/build" className="hover:text-white transition-colors">인기 조합 보기</Link>
            <Link href="/about" className="hover:text-white transition-colors">서비스 소개</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">개인정보처리방침</Link>
            <Link href="/terms" className="hover:text-white transition-colors">이용약관</Link>
          </div>
        </div>

        {/* PC 레이아웃 */}
        <div className="hidden sm:grid sm:grid-cols-4 sm:gap-8">
          {/* 브랜드 */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold text-white">
                E
              </div>
              <span className="font-bold text-white">견적도사</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 mb-4">
              내 PC 사양을 입력하면<br />
              병목 원인을 진단하고<br />
              최적의 업그레이드를 추천합니다.
            </p>
            <p className="text-xs text-slate-600">
              가격 데이터 기반 비용 대비 효과<br />
              게임별 체감 성능까지 한눈에
            </p>
          </div>

          {/* 서비스 */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">도구</h3>
            <ul className="space-y-2.5">
              <li><Link href="/diagnose" className="text-sm text-slate-400 hover:text-white transition-colors">PC 성능 진단</Link></li>
              <li><Link href="/compare" className="text-sm text-slate-400 hover:text-white transition-colors">GPU / CPU 비교</Link></li>
              <li><Link href="/tier" className="text-sm text-slate-400 hover:text-white transition-colors">그래픽카드 티어표</Link></li>
              <li><Link href="/games" className="text-sm text-slate-400 hover:text-white transition-colors">게임별 권장 사양</Link></li>
              <li><Link href="/custom" className="text-sm text-slate-400 hover:text-white transition-colors">맞춤 견적 추천</Link></li>
              <li><Link href="/build" className="text-sm text-slate-400 hover:text-white transition-colors">인기 조합 보기</Link></li>
            </ul>
          </div>

          {/* 아티클 */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">가이드</h3>
            <ul className="space-y-2.5">
              <li><Link href="/articles" className="text-sm text-slate-400 hover:text-white transition-colors">전체 아티클</Link></li>
              <li><Link href="/articles/cpu-gpu-bottleneck" className="text-sm text-slate-400 hover:text-white transition-colors">CPU·GPU 병목 완벽 정리</Link></li>
              <li><Link href="/articles/best-gpu-by-budget-2026" className="text-sm text-slate-400 hover:text-white transition-colors">예산별 그래픽카드 추천</Link></li>
              <li><Link href="/articles/pc-upgrade-guide" className="text-sm text-slate-400 hover:text-white transition-colors">게임 PC 업그레이드 가이드</Link></li>
              <li><Link href="/articles/gtx-1060-upgrade-2026" className="text-sm text-slate-400 hover:text-white transition-colors">GTX 1060 업그레이드 분석</Link></li>
            </ul>
          </div>

          {/* 정책 */}
          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-500">정책</h3>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">서비스 소개</Link></li>
              <li><Link href="/privacy" className="text-sm text-slate-400 hover:text-white transition-colors">개인정보처리방침</Link></li>
              <li><Link href="/terms" className="text-sm text-slate-400 hover:text-white transition-colors">이용약관</Link></li>
            </ul>
          </div>
        </div>

        {/* 하단 카피라이트 */}
        <div className="mt-8 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-xs text-slate-600">
              © 2026 EstMaster (견적도사). All rights reserved.
            </p>
            <p className="text-xs text-slate-700">
              진단 결과는 PassMark 기반 추정값이며 실제 성능과 다를 수 있습니다 · 게임 사양 기준 <strong className="text-slate-600">1080p</strong>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
