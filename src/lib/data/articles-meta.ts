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
  {
    slug: 'rtx-4070-review-2026',
    title: 'RTX 4070 2026년 리뷰 — 지금도 살 만한 GPU인가?',
    description: 'RTX 4070은 2026년에도 가성비 1위 GPU일까? 성능, 가격, 경쟁 모델과의 비교로 지금 구매 가치를 분석합니다.',
    tags: ['GPU 리뷰', 'NVIDIA', '구매 가이드'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'rx-7600-vs-rtx-4060',
    title: 'RX 7600 vs RTX 4060: AMD가 더 저렴한데 성능은?',
    description: '같은 가격대 AMD와 NVIDIA 보급형 GPU, 성능·가성비·게임 호환성으로 어느 쪽을 골라야 할지 비교합니다.',
    tags: ['GPU 비교', 'AMD vs NVIDIA', '가성비'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'ryzen5-7600x-vs-i5-13600k',
    title: '라이젠 5 7600X vs i5-13600K: 게임용 CPU 최강자는?',
    description: '30만원대 중급 CPU 대결. 게임 성능, 전성비, 플랫폼 확장성까지 종합 비교합니다.',
    tags: ['CPU 비교', 'AMD vs Intel', '게임용 CPU'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'cyberpunk-2077-pc-requirements',
    title: '사이버펑크 2077 PC 사양 총정리 — 2026년 최적화 가이드',
    description: '사이버펑크 2077 최소·권장·레이트레이싱 사양과 각 옵션별 필요 GPU·CPU를 2026년 기준으로 총정리합니다.',
    tags: ['게임 사양', '사이버펑크 2077', 'PC 최적화'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'ddr4-vs-ddr5-gaming',
    title: 'DDR4 vs DDR5: 게임 성능 차이, 업그레이드 가치 있을까?',
    description: '실제 게임에서 DDR4와 DDR5의 fps 차이, 그리고 지금 바꿔야 할지 판단 기준을 정리합니다.',
    tags: ['RAM', 'DDR5', 'PC 업그레이드'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'gpu-temperature-guide',
    title: '그래픽카드 온도 가이드 — 적정 온도와 과열 해결법',
    description: '그래픽카드 온도가 너무 높으면 수명이 줄고 성능이 떨어집니다. 적정 온도 범위, 과열 원인, 해결 방법을 정리합니다.',
    tags: ['PC 관리', 'GPU 온도', '하드웨어 팁'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'best-gaming-cpu-2026',
    title: '2026년 게임용 CPU 추천 — 예산별 최선의 선택',
    description: '10만원대부터 50만원대까지, 2026년 현재 게임에서 가장 가성비 좋은 CPU를 예산별로 추천합니다.',
    tags: ['CPU 추천', '구매 가이드', '2026 최신'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'ram-16gb-vs-32gb-gaming',
    title: 'RAM 16GB vs 32GB: 게임에서 차이 나나? 업그레이드 가이드',
    description: 'RAM 16GB와 32GB의 게임 성능 차이, 실제로 32GB가 필요한 상황인지 판단하는 방법을 알려드립니다.',
    tags: ['RAM', '메모리', 'PC 업그레이드'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'lol-pc-requirements',
    title: '리그 오브 레전드(롤) PC 사양 — 144fps 구현하려면?',
    description: '롤 최소·권장 사양과 60fps·144fps·240fps 목표별 필요 CPU·GPU를 정리합니다. 저사양 최적화 팁 포함.',
    tags: ['게임 사양', '리그 오브 레전드', 'e스포츠'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'gtx-1060-upgrade-2026',
    title: 'GTX 1060 아직 쓰고 있다면 — 2026년 업그레이드 타이밍 분석',
    description: 'GTX 1060으로 2026년 게임이 되는지, 어떤 GPU로 업그레이드해야 하는지 솔직하게 분석합니다.',
    tags: ['GPU 업그레이드', 'GTX 1060', '업그레이드 가이드'],
    publishedAt: '2026-07-02',
  },
  {
    slug: 'ssd-vs-hdd-gaming',
    title: 'SSD vs HDD 게임 성능 차이 — 교체하면 얼마나 빨라질까?',
    description: 'SSD와 HDD의 게임 로딩 속도 차이, fps 영향, 어떤 SSD를 사야 하는지까지 정리합니다.',
    tags: ['SSD', '저장장치', 'PC 업그레이드'],
    publishedAt: '2026-07-02',
  },
];
