'use client';

import { useRouter } from 'next/navigation';

export default function HeaderDiagnoseButton() {
  const router = useRouter();

  const handleClick = () => {
    const el = document.getElementById('diagnose');
    if (el) {
      // 현재 페이지에 #diagnose 섹션이 있으면 바로 스크롤
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // 다른 페이지라면 홈으로 이동
      router.push('/#diagnose');
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 text-sm font-medium text-white"
    >
      진단하기
    </button>
  );
}
