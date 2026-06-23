import Link from 'next/link';
import HeaderDiagnoseButton from './HeaderDiagnoseButton';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="group flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-sm font-bold text-white group-hover:bg-blue-500 transition-colors">
              E
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-bold tracking-tight">견적도사</span>
              <span className="hidden sm:inline text-xs text-slate-400">EstMaster</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              홈
            </Link>
            <Link
              href="/games"
              className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              게임 사양
            </Link>
            <Link
              href="/custom"
              className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
            >
              PC 커스텀
            </Link>
            <HeaderDiagnoseButton />
          </nav>
        </div>
      </div>
    </header>
  );
}
