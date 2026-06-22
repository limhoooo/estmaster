import AnimatedSection from '@/components/ui/AnimatedSection';
import ScrollAnchorButton from '@/components/ui/ScrollAnchorButton';

const STEPS = [
  {
    num: '01',
    title: 'PC 사양 입력',
    desc: 'CPU, GPU, RAM, 모니터 해상도를 검색형 드롭다운으로 선택합니다.',
    stagger: 'stagger-1',
  },
  {
    num: '02',
    title: '병목 자동 진단',
    desc: 'CPU·GPU 점수를 비교해 어느 쪽이 발목을 잡는지 즉시 파악합니다.',
    stagger: 'stagger-2',
  },
  {
    num: '03',
    title: '업그레이드 추천',
    desc: '비용 대비 효과 최고의 부품과 게임별 전/후 변화를 보여드립니다.',
    stagger: 'stagger-3',
  },
];

export default function HowItWorksSection() {
  return (
    <AnimatedSection
      id="how-it-works"
      className="bg-gradient-to-b from-slate-900 to-slate-950 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-5xl">
        <p className="stagger-child stagger-0 mb-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-400">
          사용 방법
        </p>
        <h2 className="stagger-child stagger-0 mb-14 text-center text-2xl font-bold text-white md:text-3xl">
          <span className="text-blue-400">3단계</span>로 끝납니다
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {STEPS.map(s => (
            <div
              key={s.num}
              className={`stagger-child ${s.stagger} group relative rounded-2xl border border-slate-700/40 bg-slate-800/30 p-6 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-800/60`}
            >
              <div className="pointer-events-none absolute right-4 top-3 select-none text-7xl font-black leading-none text-blue-500/[0.07] transition-all duration-300 group-hover:text-blue-500/[0.12]">
                {s.num}
              </div>
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20 text-sm font-bold text-blue-400 ring-1 ring-blue-500/30">
                {s.num.replace('0', '')}
              </div>
              <h3 className="mb-2 font-semibold text-white">{s.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="stagger-child stagger-4 mt-12 text-center">
          <ScrollAnchorButton
            targetId="diagnose"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-500/40"
          >
            지금 바로 시작하기
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 12V4M4 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </ScrollAnchorButton>
        </div>
      </div>
    </AnimatedSection>
  );
}
