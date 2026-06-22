export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 mt-auto">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-2">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            견적도사 (EstMaster)
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            PC 성능 진단 결과는 PassMark 점수 기반 추정값입니다. 실제 게임 성능과 차이가 있을 수
            있습니다.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            모든 게임 사양 기준은{' '}
            <strong className="text-slate-600 dark:text-slate-300">1080p (FHD)</strong> 해상도
            기준입니다.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">
            가격 정보는 제휴 링크 연동 전 임시 데이터입니다. 실제 가격은 구매처에서 확인하세요.
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 pt-2">
            © 2026 EstMaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
