import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            무료 · 즉시 진단 · 서버 없음
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            내 PC,{' '}
            <span className="text-blue-400">
              어디가
              <br className="hidden sm:block" />
              막혔을까?
            </span>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-slate-300 md:text-xl">
            CPU·GPU·RAM을 입력하면 병목 원인을 즉시 찾아드립니다.
            <br />
            <strong className="text-white">&ldquo;X만원짜리 Y로 바꾸면 사이버펑크 원활 실행&rdquo;</strong>
            까지 한 번에.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/diagnose"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-blue-500"
            >
              지금 무료 진단하기 →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
