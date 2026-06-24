'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'PC 병목 현상이란 무엇인가요?',
    a: 'CPU와 GPU 중 한쪽 성능이 다른 쪽보다 크게 낮을 때, 성능이 낮은 부품이 전체 시스템의 발목을 잡는 현상입니다. 예를 들어 RTX 4080 같은 고성능 GPU에 구형 i5-8600K CPU를 조합하면 CPU가 GPU 성능을 충분히 끌어내지 못해 게임 성능이 저하됩니다. 견적도사는 CPU·GPU 점수를 비교해 어느 쪽이 병목인지 즉시 파악해 드립니다.',
  },
  {
    q: 'CPU와 GPU 중 어느 것을 먼저 업그레이드해야 할까요?',
    a: '병목 진단 결과를 기준으로 결정하세요. GPU가 병목이라면 그래픽카드(RTX 4060, RTX 4070 등)를 교체하는 것이 게임 성능 향상에 가장 효과적입니다. CPU가 병목이라면 CPU를 먼저 교체해야 합니다. 일반적으로 게임 성능에는 GPU 업그레이드 효과가 더 직접적으로 나타납니다.',
  },
  {
    q: '그래픽카드(GPU) 교체 효과가 얼마나 큰가요?',
    a: 'GPU 병목 상황에서 그래픽카드를 교체하면 1080p·1440p 게임 성능이 20~100% 이상 향상될 수 있습니다. 예를 들어 GTX 1060에서 RTX 4060으로 교체하면 사이버펑크 2077, 엘든 링 등 고사양 게임에서 실행 등급이 "실행 어려움"에서 "원활"로 크게 개선될 수 있습니다.',
  },
  {
    q: '게임 PC에 RAM은 얼마나 필요한가요?',
    a: '대부분의 최신 게임(배틀그라운드, 사이버펑크 2077, 엘든 링 등)의 권장 사양은 16GB입니다. 현재 8GB RAM 사용자는 16GB로 업그레이드하면 게임 로딩 속도와 멀티태스킹이 크게 개선됩니다. 고해상도(1440p·4K)나 영상 편집을 병행한다면 32GB를 권장합니다.',
  },
  {
    q: '게임 최소사양과 권장사양의 차이는 무엇인가요?',
    a: '최소사양은 게임이 구동은 되지만 낮은 그래픽 설정에서 버벅임이 있을 수 있는 사양입니다. 권장사양은 게임사가 의도한 그래픽 설정(중~고)에서 원활하게 즐길 수 있는 사양입니다. 견적도사는 현재 내 PC 사양이 각 게임에서 "원활 / 버벅임 / 실행 어려움" 중 어느 단계인지 자동으로 판정합니다.',
  },
  {
    q: '1080p, 1440p, 4K 해상도 차이와 필요한 사양은?',
    a: '해상도가 높을수록 GPU 부하가 크게 증가합니다. 1080p(FHD) 기준 RTX 3060으로 원활한 게임이, 1440p(QHD)에서는 RTX 3070~3080급이 필요할 수 있습니다. 4K(UHD) 고사양 게임은 RTX 4080 이상을 권장합니다. 견적도사의 진단 결과는 1080p 기준이므로 1440p·4K 사용자는 더 높은 등급의 GPU를 고려해야 합니다.',
  },
  {
    q: '파워(PSU) 용량은 얼마나 필요한가요?',
    a: '그래픽카드에 따라 필요한 파워가 달라집니다. RTX 4060은 550W, RTX 4070은 650W, RTX 4080은 750W 이상을 권장합니다. 파워 용량이 부족하면 고부하 게임 중 시스템이 꺼지거나 불안정해질 수 있습니다. 견적도사는 GPU 추천 시 현재 파워 용량과의 호환성을 자동으로 체크해 드립니다.',
  },
  {
    q: '노트북으로도 PC 업그레이드가 가능한가요?',
    a: '대부분의 노트북은 CPU와 GPU가 메인보드에 납땜(BGA)되어 있어 교체가 불가능합니다. 가능한 업그레이드는 RAM(SODIMM 슬롯이 있는 경우)과 SSD 교체 정도입니다. 견적도사는 노트북 CPU(FP6, FP7, BGA 소켓)가 감지되면 자동으로 "노트북 감지" 안내와 함께 새 노트북 구매 시 참고할 스펙 기준을 제시합니다.',
  },
];

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-slate-950 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-blue-400">
          자주 묻는 질문
        </p>
        <h2 className="mb-10 text-center text-xl font-bold text-white sm:text-2xl md:text-3xl">
          PC 업그레이드 & 병목 <span className="text-blue-400">FAQ</span>
        </h2>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/40"
            >
              <button
                type="button"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={openIdx === i}
              >
                <span className="text-sm font-medium text-white sm:text-base">{faq.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${openIdx === i ? 'rotate-180' : ''}`}
                >
                  <path d="M3 6l5 5 5-5"/>
                </svg>
              </button>
              {openIdx === i && (
                <div className="border-t border-slate-700/50 px-5 py-4">
                  <p className="text-sm leading-relaxed text-slate-300">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
