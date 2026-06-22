import AnimatedSection from '@/components/ui/AnimatedSection';

const FEATURES = [
  {
    accent: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-500/10 ring-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/30',
    icon: '💰',
    title: '비용 대비 효과',
    desc: '"병목 12%"가 아니라 "X만원짜리 Y로 바꾸면 체감 성능 이만큼 ↑"를 알려드립니다.',
    stagger: 'stagger-1',
  },
  {
    accent: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-500/10 ring-blue-500/20',
    hoverBorder: 'hover:border-blue-500/30',
    icon: '🎮',
    title: '게임 단위 체감',
    desc: '"안 되던 사이버펑크 이제 원활하게 실행" — 숫자가 아닌 실제 게임 경험으로 설명합니다.',
    stagger: 'stagger-2',
  },
  {
    accent: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-500/10 ring-violet-500/20',
    hoverBorder: 'hover:border-violet-500/30',
    icon: '✅',
    title: '정직한 진단',
    desc: '1080p 기준·추정값·진단 한계를 명시합니다. 과장 없이 신뢰할 수 있는 결과를 제공합니다.',
    stagger: 'stagger-3',
  },
];

export default function FeatureSection() {
  return (
    <AnimatedSection
      id="features"
      className="bg-dot-grid bg-slate-950 px-4 py-14 sm:py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="stagger-child stagger-0 mb-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-400">
          왜 견적도사인가
        </p>
        <h2 className="stagger-child stagger-0 mb-10 text-center text-xl font-bold text-white sm:mb-14 sm:text-2xl md:text-3xl">
          다른 병목 계산기와{' '}
          <span className="text-blue-400">무엇이 다른가요?</span>
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {FEATURES.map(f => (
            <div
              key={f.title}
              className={`stagger-child ${f.stagger} group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 p-6 transition-all duration-300 hover:-translate-y-1 ${f.hoverBorder} hover:bg-slate-800/80`}
            >
              {/* 컬러 상단 액센트 라인 */}
              <div className={`absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r ${f.accent}`} />

              <div className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${f.iconBg} text-2xl ring-1`}>
                {f.icon}
              </div>
              <h3 className="mb-2 text-base font-semibold text-white">{f.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
