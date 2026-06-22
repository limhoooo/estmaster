import type { Recommendation } from '@/lib/types';
import CompatWarning from '@/components/ui/CompatWarning';
import GradeBadge from '@/components/ui/GradeBadge';

interface Props {
  recommendation: Recommendation;
}

export default function RecommendSection({ recommendation }: Props) {
  const { component, currentModel, recommendedModel, price, warnings, improvedGames } =
    recommendation;

  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-950/30">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">업그레이드 추천</h3>
      <p className="mb-5 mt-0.5 text-sm text-slate-500 dark:text-slate-400">
        가장 체감 효과가 큰 업그레이드를 제안합니다.
      </p>

      <div className="mb-4 rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-3">
          <span className="rounded-md bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            {component} 교체
          </span>
        </div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-sm text-slate-400 line-through">{currentModel}</span>
          <span className="text-slate-400">→</span>
          <span className="text-base font-bold text-slate-900 dark:text-white">
            {recommendedModel}
          </span>
        </div>
        <div className="mb-5">
          <span className="text-2xl font-black text-blue-600 dark:text-blue-400">
            약 {price.approximate}
          </span>
          <p className="mt-0.5 text-xs text-slate-400">임시 가격 · 실제 구매처에서 확인하세요</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={price.danawa_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-orange-500 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-orange-400"
          >
            다나와에서 보기
          </a>
          <a
            href={price.coupang_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-lg bg-red-500 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-red-400"
          >
            쿠팡에서 보기
          </a>
        </div>
      </div>

      {warnings.length > 0 && (
        <div className="mb-4 space-y-2">
          {warnings.map((w, i) => (
            <CompatWarning key={i} warning={w} />
          ))}
        </div>
      )}

      {improvedGames.length > 0 ? (
        <div>
          <h4 className="mb-2.5 text-sm font-semibold text-slate-700 dark:text-slate-300">
            교체 후 달라지는 게임 ({improvedGames.length}종)
          </h4>
          <ul className="space-y-2">
            {improvedGames.map(g => (
              <li key={g.name} className="flex flex-wrap items-center gap-2 text-sm">
                <span className="flex-1 font-medium text-slate-700 dark:text-slate-300">
                  {g.name}
                </span>
                <div className="flex items-center gap-1.5">
                  <GradeBadge grade={g.before} size="sm" />
                  <span className="text-slate-400">→</span>
                  <GradeBadge grade={g.after} size="sm" />
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          현재 게임 목록 기준으로 등급이 변하는 게임이 없습니다.
          (이미 대부분의 게임을 원활하게 실행 중입니다.)
        </p>
      )}
    </div>
  );
}
