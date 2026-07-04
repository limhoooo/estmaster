export interface Combo {
  slug: string;
  cpu: string;
  gpu: string;
  tagline: string;
}

export const COMBOS: Combo[] = [
  { slug: 'i5-12400f-rtx-3060', cpu: 'i5-12400F', gpu: 'RTX 3060', tagline: '60~70만원대 가성비 입문' },
  { slug: 'ryzen-5-5600-rtx-3060', cpu: 'Ryzen 5 5600', gpu: 'RTX 3060', tagline: 'AM4 보드 재활용 가성비 조합' },
  { slug: 'i3-12100f-gtx-1660-super', cpu: 'i3-12100F', gpu: 'GTX 1660 SUPER', tagline: '40만원대 초저가 입문' },
  { slug: 'ryzen-5-5500-rx-6600', cpu: 'Ryzen 5 5500', gpu: 'RX 6600', tagline: '50만원대 가성비 e스포츠' },
  { slug: 'i5-13400f-rtx-4060', cpu: 'i5-13400F', gpu: 'RTX 4060', tagline: '90만원대 중급 밸런스' },
  { slug: 'ryzen-5-7600-rtx-4060', cpu: 'Ryzen 5 7600', gpu: 'RTX 4060', tagline: 'AM5 신규 플랫폼 중급형' },
  { slug: 'i5-12400f-rtx-4060-ti', cpu: 'i5-12400F', gpu: 'RTX 4060 Ti', tagline: '100만원대 1440p 입문' },
  { slug: 'ryzen-5-5600x-rx-6650-xt', cpu: 'Ryzen 5 5600X', gpu: 'RX 6650 XT', tagline: 'AM4 막차 가성비 조합' },
  { slug: 'i5-13600k-rtx-4070', cpu: 'i5-13600K', gpu: 'RTX 4070', tagline: '130만원대 1440p 최적' },
  { slug: 'ryzen-5-7600x-rtx-4070', cpu: 'Ryzen 5 7600X', gpu: 'RTX 4070', tagline: 'AM5 1440p 추천 조합' },
  { slug: 'i5-14600k-rtx-4070-super', cpu: 'i5-14600K', gpu: 'RTX 4070 Super', tagline: '150만원대 상급 밸런스' },
  { slug: 'ryzen-7-5700x-rtx-4070', cpu: 'Ryzen 7 5700X', gpu: 'RTX 4070', tagline: 'AM4 후기형 고성능 조합' },
  { slug: 'i7-13700k-rtx-4070-ti-super', cpu: 'i7-13700K', gpu: 'RTX 4070 Ti Super', tagline: '200만원대 상급형' },
  { slug: 'ryzen-7-7700x-rtx-4070-ti', cpu: 'Ryzen 7 7700X', gpu: 'RTX 4070 Ti', tagline: 'AM5 상급 4K 초입' },
  { slug: 'i7-14700k-rtx-4080', cpu: 'i7-14700K', gpu: 'RTX 4080', tagline: '230만원대 4K 게이밍' },
  { slug: 'ryzen-9-7900x-rtx-4080-super', cpu: 'Ryzen 9 7900X', gpu: 'RTX 4080 Super', tagline: '고성능 스트리밍+게임' },
  { slug: 'i9-14900k-rtx-4090', cpu: 'i9-14900K', gpu: 'RTX 4090', tagline: '최상급 4K 하이엔드' },
  { slug: 'ryzen-9-7950x-rtx-4090', cpu: 'Ryzen 9 7950X', gpu: 'RTX 4090', tagline: 'AM5 최상급 하이엔드' },
  { slug: 'i5-8600k-gtx-1060', cpu: 'i5-8600K', gpu: 'GTX 1060', tagline: '2018년식 구형 게이밍 PC' },
  { slug: 'i7-8700k-gtx-1070', cpu: 'i7-8700K', gpu: 'GTX 1070', tagline: '2017년식 여전히 쓸만한 구형' },
  { slug: 'ryzen-5-3600-rtx-3060-ti', cpu: 'Ryzen 5 3600', gpu: 'RTX 3060 Ti', tagline: '2020년식 팬데믹 시기 인기 조합' },
  { slug: 'i5-10400f-gtx-1660-super', cpu: 'i5-10400F', gpu: 'GTX 1660 SUPER', tagline: '2020년식 가성비 조합' },
  { slug: 'ryzen-7-5700x-rtx-3070', cpu: 'Ryzen 7 5700X', gpu: 'RTX 3070', tagline: '2022년식 인기 중상급 조합' },
  { slug: 'i5-11400f-rtx-3060', cpu: 'i5-11400F', gpu: 'RTX 3060', tagline: '2021년식 인기 가성비 조합' },
];
