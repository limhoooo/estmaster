import Link from 'next/link';

interface Props {
  title: string;
  description: string;
  publishedAt: string;
  tags: string[];
  children: React.ReactNode;
}

export default function ArticleLayout({ title, description, publishedAt, tags, children }: Props) {
  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        {/* 브레드크럼 */}
        <nav className="mb-6 flex items-center gap-2 text-xs text-slate-500">
          <Link href="/" className="hover:text-slate-300">홈</Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-slate-300">아티클</Link>
          <span>/</span>
          <span className="text-slate-400 truncate max-w-[200px]">{title}</span>
        </nav>

        {/* 헤더 */}
        <header className="mb-10 border-b border-slate-800 pb-8">
          <div className="mb-3 flex flex-wrap gap-2">
            {tags.map(t => (
              <span key={t} className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-400">
                {t}
              </span>
            ))}
          </div>
          <h1 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl">{title}</h1>
          <p className="mb-4 text-slate-400">{description}</p>
          <time className="text-xs text-slate-600">{publishedAt} · 견적도사</time>
        </header>

        {/* 본문 */}
        <div className="article-body space-y-6 text-slate-300">
          {children}
        </div>

        {/* 하단 */}
        <div className="mt-12 border-t border-slate-800 pt-8 text-center">
          <p className="mb-4 text-sm text-slate-500">내 PC에 직접 적용해보세요</p>
          <Link href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:bg-blue-500">
            무료 PC 진단하기 →
          </Link>
        </div>
      </div>
    </div>
  );
}

// 공통 아티클 스타일 컴포넌트
export function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-3 mt-10 text-xl font-bold text-white first:mt-0">{children}</h2>;
}
export function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-2 mt-6 text-base font-semibold text-slate-200">{children}</h3>;
}
export function P({ children }: { children: React.ReactNode }) {
  return <p className="leading-relaxed text-slate-300">{children}</p>;
}
export function UL({ children }: { children: React.ReactNode }) {
  return <ul className="list-inside list-disc space-y-1.5 pl-2 text-slate-300">{children}</ul>;
}
export function OL({ children }: { children: React.ReactNode }) {
  return <ol className="list-inside list-decimal space-y-1.5 pl-2 text-slate-300">{children}</ol>;
}
export function Callout({ type = 'info', children }: { type?: 'info' | 'tip' | 'warn'; children: React.ReactNode }) {
  const styles = {
    info: 'border-blue-500/30 bg-blue-500/10 text-blue-300',
    tip:  'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    warn: 'border-amber-500/30 bg-amber-500/10 text-amber-300',
  };
  const icons = { info: 'ℹ️', tip: '💡', warn: '⚠️' };
  return (
    <div className={`rounded-xl border px-5 py-4 text-sm leading-relaxed ${styles[type]}`}>
      {icons[type]} {children}
    </div>
  );
}
export function ToolCTA({ href, label }: { href: string; label: string }) {
  return (
    <div className="rounded-2xl border border-blue-500/20 bg-blue-500/5 p-5 text-center">
      <Link href={href}
        className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500">
        {label} →
      </Link>
    </div>
  );
}
export function Table({ headers, rows }: { headers: string[]; rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700/50">
      <table className="w-full text-sm">
        <thead className="border-b border-slate-700/50 bg-slate-800/50">
          <tr>{headers.map(h => <th key={h} className="px-4 py-3 text-left font-semibold text-slate-300">{h}</th>)}</tr>
        </thead>
        <tbody className="divide-y divide-slate-700/30">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-slate-800/30">
              {row.map((cell, j) => <td key={j} className="px-4 py-3 text-slate-300">{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
