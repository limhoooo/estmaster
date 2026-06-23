import type { Recommendation, RecommendTier } from '@/lib/types';
import CompatWarning from '@/components/ui/CompatWarning';
import GradeBadge from '@/components/ui/GradeBadge';

interface Props {
  recommendation: Recommendation;
}

const TIER_STYLE = {
  budget: {
    badge: '가성비',
    badgeCls: 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30',
    cardCls: 'border-slate-700/50 bg-slate-800/30',
    priceCls: 'text-emerald-400',
    highlight: false,
  },
  balanced: {
    badge: '★ 추천',
    badgeCls: 'bg-blue-500/20 text-blue-300 border border-blue-500/40',
    cardCls: 'border-blue-500/40 bg-blue-950/20 ring-1 ring-blue-500/20',
    priceCls: 'text-blue-400',
    highlight: true,
  },
  performance: {
    badge: '최상',
    badgeCls: 'bg-violet-500/15 text-violet-400 border border-violet-500/30',
    cardCls: 'border-slate-700/50 bg-slate-800/30',
    priceCls: 'text-violet-400',
    highlight: false,
  },
} as const;

function TierCard({ tier, component, currentModel }: { tier: RecommendTier; component: 'CPU' | 'GPU'; currentModel: string }) {
  const style = TIER_STYLE[tier.tier];

  return (
    <div className={`relative flex flex-col rounded-2xl border p-5 ${style.cardCls}`}>
      {style.highlight && (
        <div className="absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-500" />
      )}

      {/* 배지 + 부품 종류 */}
      <div className="mb-3 flex items-center gap-2">
        <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${style.badgeCls}`}>
          {style.badge}
        </span>
        <span className="rounded bg-slate-700/60 px-1.5 py-0.5 text-[10px] text-slate-400">
          {component} 교체
        </span>
      </div>

      {/* 모델명 */}
      <div className="mb-1 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
        <span className="line-through">{currentModel}</span>
        <span>→</span>
      </div>
      <p className="mb-3 text-base font-bold text-white leading-tight">{tier.recommendedModel}</p>

      {/* 가격 */}
      <p className={`mb-1 text-xl font-black ${style.priceCls}`}>
        약 {tier.price.approximate}
      </p>
      <p className="mb-4 text-[10px] text-slate-500">임시 가격 · 구매처에서 확인</p>

      {/* 개선 게임 수 */}
      {tier.improvedGames.length > 0 && (
        <div className="mb-4 rounded-lg bg-slate-700/30 px-3 py-2">
          <p className="mb-1.5 text-xs font-medium text-slate-300">
            교체 후 개선되는 게임 {tier.improvedGames.length}종
          </p>
          <div className="flex flex-wrap gap-1">
            {tier.improvedGames.slice(0, 4).map(g => (
              <div key={g.name} className="flex items-center gap-1 text-xs text-slate-400">
                <span className="truncate max-w-[80px]">{g.name}</span>
                <GradeBadge grade={g.before} size="sm" />
                <span className="text-slate-600">→</span>
                <GradeBadge grade={g.after} size="sm" />
              </div>
            ))}
            {tier.improvedGames.length > 4 && (
              <span className="text-xs text-slate-500">+{tier.improvedGames.length - 4}개</span>
            )}
          </div>
        </div>
      )}

      {tier.improvedGames.length === 0 && (
        <div className="mb-4 rounded-lg bg-slate-700/20 px-3 py-2">
          <p className="text-xs text-slate-500">현재 게임 목록 기준 등급 변화 없음</p>
        </div>
      )}

      {/* 호환성 경고 */}
      {tier.warnings.length > 0 && (
        <div className="mb-3 space-y-1.5">
          {tier.warnings.map((w, i) => (
            <CompatWarning key={i} warning={w} />
          ))}
        </div>
      )}

      {/* 구매 버튼 */}
      <div className="mt-auto flex flex-col gap-2">
        <a
          href={tier.price.coupang_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-lg bg-red-500 py-2.5 text-center text-sm font-medium text-white transition hover:bg-red-400"
        >
          쿠팡에서 보기
        </a>
        <a
          href={tier.price.danawa_url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full rounded-lg border border-slate-600 py-2.5 text-center text-sm font-medium text-slate-300 transition hover:border-slate-400 hover:text-white"
        >
          다나와에서 보기
        </a>
      </div>
    </div>
  );
}

export default function RecommendSection({ recommendation }: Props) {
  const { component, currentModel, tiers } = recommendation;

  // 모바일: 추천(balanced) 카드를 맨 위로
  const mobileOrder = [...tiers].sort((a) => a.tier === 'balanced' ? -1 : 0);

  return (
    <div>
      <div className="mb-4 flex items-center gap-2">
        <h3 className="text-lg font-semibold text-white">업그레이드 추천</h3>
        <span className="rounded-lg bg-slate-800 px-2.5 py-0.5 text-xs text-slate-400">
          현재 {currentModel}
        </span>
      </div>

      {/* 데스크탑: 원래 순서 (가성비 → 추천 → 최상) */}
      <div className="hidden gap-4 md:grid" style={{ gridTemplateColumns: `repeat(${tiers.length}, 1fr)` }}>
        {tiers.map(tier => (
          <TierCard key={tier.tier} tier={tier} component={component} currentModel={currentModel} />
        ))}
      </div>

      {/* 모바일: 추천 카드 맨 위 */}
      <div className="flex flex-col gap-4 md:hidden">
        {mobileOrder.map(tier => (
          <TierCard key={tier.tier} tier={tier} component={component} currentModel={currentModel} />
        ))}
      </div>
    </div>
  );
}
