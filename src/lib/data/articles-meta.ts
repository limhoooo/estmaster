export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  publishedAt: string;
}

export const ARTICLES: ArticleMeta[] = [
  {
    slug: 'rtx-4060-vs-rtx-4060-ti',
    title: 'RTX 4060 vs RTX 4060 Ti: 10만원 더 쓸 가치 있을까?',
    description: '성능 차이 14%, 가격 차이 33%. 실제 게임에서 얼마나 다른지, 어느 쪽이 더 현명한 선택인지 분석합니다.',
    tags: ['GPU 비교', '구매 가이드', 'NVIDIA'],
    publishedAt: '2026-06-24',
  },
  {
    slug: 'best-gpu-by-budget-2026',
    title: '2026년 예산별 그래픽카드 추천 — 10만원부터 60만원까지',
    description: '10만원대 중고부터 60만원대 신품까지, 각 예산에서 최고의 가성비 그래픽카드를 추천합니다.',
    tags: ['GPU 추천', '구매 가이드', '가성비'],
    publishedAt: '2026-06-24',
  },
  {
    slug: 'pc-upgrade-guide',
    title: '게임 PC 업그레이드 가이드 — 30만원으로 뭘 바꿔야 할까?',
    description: '30만원 예산으로 CPU를 바꿔야 할까, GPU를 바꿔야 할까? 병목 진단부터 구매까지 단계별로 설명합니다.',
    tags: ['업그레이드 가이드', 'PC 최적화'],
    publishedAt: '2026-06-24',
  },
  {
    slug: 'battlegrounds-pc-requirements',
    title: '배틀그라운드(PUBG) PC 사양 총정리 — 60fps 구현하려면?',
    description: '배그 최소·권장·울트라 사양과 각 FPS 목표별 필요 CPU·GPU를 총정리합니다.',
    tags: ['게임 사양', '배틀그라운드', 'PUBG'],
    publishedAt: '2026-06-24',
  },
  {
    slug: 'cpu-gpu-bottleneck',
    title: 'CPU GPU 병목 현상 완벽 정리 — 원인·증상·해결법',
    description: 'PC가 왜 느린지 모르겠다면 병목 때문일 수 있습니다. CPU 병목과 GPU 병목의 차이, 확인 방법, 해결 방법을 정리합니다.',
    tags: ['PC 병목', '성능 진단', '기초 지식'],
    publishedAt: '2026-06-24',
  },
  {
    slug: 'lga1700-vs-am5',
    title: 'LGA1700 vs AM5: 지금 PC 조립할 때 어느 플랫폼이 유리할까?',
    description: '인텔 LGA1700과 AMD AM5 플랫폼을 가격, 성능, 업그레이드 경로, 수명 관점에서 비교합니다.',
    tags: ['CPU 비교', 'Intel vs AMD', '플랫폼 선택'],
    publishedAt: '2026-06-24',
  },
];
