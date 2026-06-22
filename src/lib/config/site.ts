// ============================================================
// 사이트 설정 — 배포 전 반드시 실제 값으로 교체하세요
// ============================================================

export const SITE = {
  // 실제 도메인으로 교체 (끝에 슬래시 없이)
  url: 'https://estmaster.kr',

  name: '견적도사',
  nameEn: 'EstMaster',

  description:
    'CPU·GPU·RAM을 입력하면 병목을 진단하고 가장 체감 효과가 큰 업그레이드를 추천해드립니다. 무료 PC 성능 진단 도구.',

  keywords: [
    'PC 업그레이드',
    'PC 병목',
    'CPU 병목',
    'GPU 병목',
    'PC 성능 진단',
    '그래픽카드 추천',
    'PC 사양 추천',
    '게임 PC 최적화',
    'CPU GPU 비교',
    '견적도사',
  ] as string[],

  // Google AdSense 게시자 ID — AdSense 계정 → 계정 → 계정 정보에서 확인
  adsenseId: 'ca-pub-XXXXXXXXXXXXXXXXX',

  // Google Search Console 인증 코드 — Search Console → 설정 → 소유권 확인 → HTML 태그 방식
  googleVerification: '',

  // 네이버 서치어드바이저 인증 코드
  naverVerification: '',

  ogImage: '/og-image.png',
} as const;
