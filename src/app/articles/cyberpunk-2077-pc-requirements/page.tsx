import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '사이버펑크 2077 PC 사양 총정리 — 2026년 최적화 가이드 | 견적도사',
  description: '사이버펑크 2077 최소·권장·레이트레이싱 사양과 각 옵션별 필요 GPU·CPU를 2026년 기준으로 총정리합니다.',
  keywords: ['사이버펑크 2077 사양', '사이버펑크 2077 PC', '사이버펑크 최적화', '사이버펑크 권장사양'],
  alternates: { canonical: `${SITE.url}/articles/cyberpunk-2077-pc-requirements/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="사이버펑크 2077 PC 사양 총정리 — 2026년 최적화 가이드"
      description="옵션별 필요 GPU/CPU, 레이트레이싱까지 실제로 돌리려면 얼마짜리 PC?"
      publishedAt="2026-07-02"
      tags={['게임 사양', '사이버펑크 2077', 'PC 최적화']}
    >
      <P>
        사이버펑크 2077은 2020년 출시 이후 지속적인 패치로 최적화가 크게 개선됐습니다.
        2026년 현재 DLC 팬텀 리버티까지 즐기려면 어느 정도 사양이 필요한지, 목표 fps별로 정리해드립니다.
      </P>
      <Callout type="info">
        아래 모든 수치는 <strong>1080p 기준</strong>입니다. 1440p·4K는 GPU 요구 사양이 크게 올라가니 별도 항목을 참고하세요.
      </Callout>

      <H2>공식 최소·권장 사양 (1080p 기준)</H2>
      <Table
        headers={['항목', '최소 사양', '권장 사양 (고옵션)', '레이트레이싱 울트라']}
        rows={[
          ['CPU', 'i7-6700 / Ryzen 5 1600', 'i7-8700K / Ryzen 5 3600', 'i9-9900K / Ryzen 9 5900X'],
          ['GPU', 'GTX 1060 6GB / RX 580 8GB', 'RTX 2060 SUPER / RX 5700 XT', 'RTX 2080 SUPER / RX 6800 XT'],
          ['RAM', '8GB', '12GB', '16GB'],
          ['저장장치', 'HDD 가능', 'SSD 권장', 'SSD 필수'],
          ['목표 fps', '30fps 저옵션', '60fps 높음', '30fps 레이트레이싱'],
        ]}
      />

      <H2>2026년 실제 체감 기준 사양</H2>
      <P>
        공식 사양보다 실제 체감을 기준으로 정리하면 아래와 같습니다.
        1080p 60fps를 안정적으로 즐기려면 GTX 1060으로는 부족하고, 최소 RTX 2060 이상을 권장합니다.
      </P>
      <Table
        headers={['목표', '필요 GPU (1080p)', '필요 CPU', '예상 비용']}
        rows={[
          ['1080p 30fps 저옵', 'GTX 1060 / RX 580', 'i5-8400 이상', '중고 조립 20만원대'],
          ['1080p 60fps 중옵', 'RTX 2060 / RX 5600 XT', 'i5-10400 이상', '30~40만원대'],
          ['1080p 60fps 고옵', 'RTX 3060 / RX 6600 XT', 'i5-12400 이상', '40~50만원대'],
          ['1080p 고옵 + DLSS', 'RTX 3070 / RTX 4060', 'i7-10700 이상', '50~65만원대'],
          ['1440p 60fps 고옵', 'RTX 4070 / RX 7800 XT', 'i7-12700 이상', '80만원대 이상'],
          ['레이트레이싱 울트라', 'RTX 4080 이상', 'i9-12900K 이상', '150만원대 이상'],
        ]}
      />
      <Callout type="warn">
        레이트레이싱 울트라 + 4K는 현재 최고 사양 GPU로도 버거운 수준입니다. DLSS 없이는 RTX 4090도 60fps를 유지하기 어렵습니다.
      </Callout>

      <H2>성능을 올리는 핵심 팁</H2>
      <H3>1. DLSS / FSR 활성화</H3>
      <P>
        RTX GPU 사용자라면 DLSS 품질 모드 활성화만으로도 fps가 30~50% 오릅니다.
        NVIDIA GPU가 없어도 FSR(AMD FidelityFX Super Resolution)로 비슷한 효과를 얻을 수 있습니다.
      </P>
      <H3>2. 군중 밀도 낮추기</H3>
      <P>
        그래픽 설정에서 군중 밀도를 낮추면 CPU 부하가 크게 줄어 fps 안정성이 높아집니다.
        화질 체감 변화는 적으면서 성능 개선 효과가 큰 설정입니다.
      </P>
      <H3>3. SSD로 교체</H3>
      <P>
        나이트 시티는 엄청난 데이터를 실시간으로 스트리밍합니다. HDD에서는 텍스처 팝업, 로딩 지연이 빈번하게 발생합니다.
        SSD 교체만으로도 체감 쾌적함이 크게 오릅니다.
      </P>

      <H2>내 PC로 돌릴 수 있을까?</H2>
      <UL>
        <li>RTX 2060 이상: 1080p 60fps 중~고옵 가능</li>
        <li>RTX 3060 이상: 1080p 고옵 안정, 1440p 중옵 가능</li>
        <li>RTX 4060 이상: 1080p 최고옵 + DLSS로 144fps 도전 가능</li>
        <li>RTX 4070 이상: 1440p 고옵 안정, 레이트레이싱 중급 체험 가능</li>
      </UL>

      <ToolCTA href="/diagnose" label="내 PC로 사이버펑크 2077 돌릴 수 있는지 진단하기" />
    </ArticleLayout>
  );
}
