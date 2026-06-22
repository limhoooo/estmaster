'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const GUIDES = {
  cpu: {
    label: 'CPU',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/>
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/>
      </svg>
    ),
    methods: [
      {
        title: '방법 1 — 시스템 정보',
        steps: [
          { key: 'Windows + R', desc: '실행창 열기' },
          { key: 'msinfo32', desc: '입력 후 Enter' },
          { desc: '"프로세서" 항목에서 CPU 모델명 확인' },
        ],
      },
      {
        title: '방법 2 — 내 PC 속성',
        steps: [
          { desc: '바탕화면 "내 PC" 우클릭' },
          { key: '속성', desc: '클릭' },
          { desc: '"프로세서" 항목 확인' },
        ],
      },
    ],
    tip: 'Intel Core i5-12600K, AMD Ryzen 5 5600X',
  },
  gpu: {
    label: 'GPU',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="10" rx="2"/>
        <path d="M6 7V5M10 7V5M14 7V5M18 7V5M6 17v2M18 17v2M9 11h6"/>
      </svg>
    ),
    methods: [
      {
        title: '방법 1 — 작업 관리자',
        steps: [
          { key: 'Ctrl + Shift + Esc', desc: '작업 관리자 열기' },
          { key: '성능', desc: '탭 클릭' },
          { desc: '왼쪽 "GPU" 선택 → 우측 상단 모델명 확인' },
        ],
      },
      {
        title: '방법 2 — DirectX 진단',
        steps: [
          { key: 'Windows + R', desc: '실행창 열기' },
          { key: 'dxdiag', desc: '입력 후 Enter' },
          { key: '디스플레이', desc: '탭 → "이름" 항목 확인' },
        ],
      },
    ],
    tip: 'NVIDIA GeForce RTX 3060, AMD Radeon RX 6700 XT',
  },
  ram: {
    label: 'RAM',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="8" width="20" height="8" rx="1"/>
        <path d="M6 8V6M10 8V6M14 8V6M18 8V6M6 16v2M10 16v2M14 16v2M18 16v2"/>
      </svg>
    ),
    methods: [
      {
        title: '방법 1 — 작업 관리자',
        steps: [
          { key: 'Ctrl + Shift + Esc', desc: '작업 관리자 열기' },
          { key: '성능', desc: '탭 클릭' },
          { desc: '왼쪽 "메모리" 선택 → 우측 상단 용량 확인 (예: 16.0GB)' },
        ],
      },
      {
        title: '방법 2 — 시스템 정보',
        steps: [
          { key: 'Windows + R', desc: '실행창 열기' },
          { key: 'msinfo32', desc: '입력 후 Enter' },
          { desc: '"설치된 실제 메모리(RAM)" 항목 확인' },
        ],
      },
    ],
    tip: '8GB, 16GB, 32GB, 64GB',
  },
  resolution: {
    label: '해상도',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
    methods: [
      {
        title: '방법 1 — 디스플레이 설정',
        steps: [
          { desc: '바탕화면 빈 곳 우클릭' },
          { key: '디스플레이 설정', desc: '클릭' },
          { desc: '"디스플레이 해상도" 항목에서 현재 해상도 확인' },
        ],
      },
      {
        title: '방법 2 — Windows 설정',
        steps: [
          { key: 'Windows + I', desc: '설정 열기' },
          { desc: '시스템 → 디스플레이 클릭' },
          { desc: '"디스플레이 해상도" 확인' },
        ],
      },
    ],
    tip: '1920×1080 → 1080p / 2560×1440 → 1440p / 3840×2160 → 4K',
  },
  psu: {
    label: '파워 용량',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    methods: [
      {
        title: '방법 1 — 파워 스티커 직접 확인 (가장 정확)',
        steps: [
          { desc: 'PC 케이스 옆판을 열기' },
          { desc: '파워서플라이 박스 표면 스티커 확인' },
          { desc: '"MAX OUTPUT" 또는 맨 아래 합산 W 수치 확인' },
        ],
      },
      {
        title: '방법 2 — 구매 내역 확인',
        steps: [
          { desc: 'PC 구매 영수증 또는 조립 견적서 확인' },
          { desc: '완제품 PC라면 제조사 제품 페이지에서 확인' },
        ],
      },
    ],
    tip: '모르면 500W로 두셔도 됩니다 — 호환성 체크용이라 정확하지 않아도 괜찮아요',
  },
};

type Tab = keyof typeof GUIDES;
const TAB_KEYS = Object.keys(GUIDES) as Tab[];

export default function SpecGuideModal() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [tab, setTab] = useState<Tab>('cpu');

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => setVisible(true));
    } else {
      setVisible(false);
    }
  }, [open]);

  const close = () => setOpen(false);
  const guide = GUIDES[tab];

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="mt-3 inline-flex items-center gap-1.5 rounded-lg border border-slate-700 px-3.5 py-1.5 text-xs text-slate-400 transition hover:border-slate-500 hover:text-slate-200"
      >
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
          <circle cx="8" cy="8" r="6.5"/><path d="M8 7v5M8 5.5v.5"/>
        </svg>
        내 CPU·GPU·RAM 사양 확인하는 방법
      </button>

      {open && createPortal(
        <div className="pointer-events-none fixed inset-0 z-[200] flex justify-end">
          <div
            className={`pointer-events-auto relative flex h-full w-full max-w-sm flex-col border-l border-slate-700/60 bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out ${visible ? 'translate-x-0' : 'translate-x-full'}`}
          >
            {/* 헤더 */}
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
              <div>
                <h2 className="text-sm font-semibold text-white">사양 확인 가이드</h2>
                <p className="mt-0.5 text-xs text-slate-500">Windows 기준 · 가이드를 보며 입력 가능</p>
              </div>
              <button
                type="button"
                onClick={close}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-800 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 3l10 10M13 3L3 13"/>
                </svg>
              </button>
            </div>

            {/* 탭 + 본문 */}
            <div className="flex flex-1 flex-col overflow-hidden">
              {/* 가로 탭 (모바일) / 세로 탭 (sm+) */}
              <nav className="flex overflow-x-auto border-b border-slate-800 px-2 sm:hidden">
                {TAB_KEYS.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`flex flex-shrink-0 items-center gap-1.5 border-b-2 px-3 py-3 text-xs font-medium transition ${
                      tab === t
                        ? 'border-blue-500 text-blue-400'
                        : 'border-transparent text-slate-500'
                    }`}
                  >
                    <span>{GUIDES[t].icon}</span>
                    {GUIDES[t].label}
                  </button>
                ))}
              </nav>

              <div className="flex flex-1 overflow-hidden">
              {/* 세로 탭 목록 (sm 이상) */}
              <nav className="hidden w-28 flex-shrink-0 flex-col gap-0.5 border-r border-slate-800 p-2 sm:flex">
                {TAB_KEYS.map(t => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTab(t)}
                    className={`flex items-center gap-2 rounded-lg px-2.5 py-2.5 text-left text-xs font-medium transition ${
                      tab === t
                        ? 'bg-blue-600/20 text-blue-400'
                        : 'text-slate-500 hover:bg-slate-800 hover:text-slate-300'
                    }`}
                  >
                    <span className="flex-shrink-0">{GUIDES[t].icon}</span>
                    {GUIDES[t].label}
                  </button>
                ))}
              </nav>

              {/* 본문 */}
              <div className="flex-1 overflow-y-auto px-5 py-5">
                <div className="space-y-6">
                  {guide.methods.map((method, mi) => (
                    <div key={mi}>
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                        {method.title}
                      </p>
                      <ol className="space-y-3">
                        {method.steps.map((step, si) => (
                          <li key={si} className="flex items-start gap-3">
                            <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600/20 text-[10px] font-bold text-blue-400">
                              {si + 1}
                            </span>
                            <span className="text-sm leading-relaxed text-slate-300">
                              {'key' in step && (
                                <kbd className="mr-1.5 rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs text-slate-200">
                                  {step.key}
                                </kbd>
                              )}
                              {step.desc}
                            </span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-xl bg-slate-800/60 px-4 py-3">
                  <p className="text-xs leading-relaxed text-slate-400">
                    {guide.tip}
                  </p>
                </div>
              </div>
              </div>
            </div>

            {/* 푸터 */}
            <div className="border-t border-slate-800 px-5 py-4">
              <button
                type="button"
                onClick={close}
                className="w-full rounded-xl bg-slate-800 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-slate-700 hover:text-white"
              >
                닫기
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
