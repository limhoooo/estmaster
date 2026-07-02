import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'RTX 4070 2026년 리뷰 — 지금도 살 만한 GPU인가? | 견적도사',
  description: 'RTX 4070은 2026년에도 가성비 1위 GPU일까? 성능, 가격, 경쟁 모델과의 비교로 지금 구매 가치를 분석합니다.',
  keywords: ['RTX 4070 리뷰', 'RTX 4070 가성비', 'RTX 4070 2026', '그래픽카드 추천 2026'],
  alternates: { canonical: `${SITE.url}/articles/rtx-4070-review-2026` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="RTX 4070 2026년 리뷰 — 지금도 살 만한 GPU인가?"
      description="성능, 가격, 수명까지 따져보는 RTX 4070 구매 가이드"
      publishedAt="2026-07-02"
      tags={['GPU 리뷰', 'NVIDIA', '구매 가이드']}
    >
      <P>
        RTX 4070은 2023년 출시 이후 꾸준히 사랑받는 GPU입니다.
        2026년에 접어든 지금, 신형 모델이 쏟아지는 상황에서도 RTX 4070은 여전히 유효한 선택일까요?
        성능·가격·수명을 종합해 분석합니다.
      </P>

      <H2>RTX 4070 기본 스펙</H2>
      <Table
        headers={['항목', '수치']}
        rows={[
          ['PassMark 점수', '약 22,000점'],
          ['권장 파워', '650W'],
          ['출시연도', '2023년'],
          ['예상 시장가', '약 50~60만원대'],
          ['주요 경쟁 모델', 'RX 7700 XT, RTX 4060 Ti'],
        ]}
      />
      <Callout type="info">
        PassMark 점수는 2026년 7월 기준 참고값입니다. 실제 게임 성능과 다소 차이가 있을 수 있습니다.
      </Callout>

      <H2>1080p · 1440p · 4K 해상도별 성능</H2>
      <H3>1080p (FHD)</H3>
      <P>
        1080p에서는 거의 모든 게임을 최고 옵션 + 100fps 이상으로 실행할 수 있습니다.
        사이버펑크 2077 울트라 옵션 기준으로도 DLSS 활성화 시 80~100fps가 안정적으로 유지됩니다.
        1080p 유저에게는 오버 스펙이라고 볼 수도 있지만, 144Hz 고주사율 모니터 사용자에겐 딱 맞는 선택입니다.
      </P>
      <H3>1440p (QHD)</H3>
      <P>
        RTX 4070의 진가가 발휘되는 해상도입니다.
        대부분의 최신 AAA 게임을 높은 옵션에서 60~90fps로 즐길 수 있고, DLSS를 켜면 100fps 이상도 가능합니다.
        1440p 144Hz 모니터를 사용하거나 계획 중인 유저에게 <strong className="text-white">가장 추천하는 구성</strong>입니다.
      </P>
      <H3>4K (UHD)</H3>
      <P>
        4K에서는 고사양 게임에서 옵션 조절이 필요합니다. 4K 60fps 목표라면 DLSS 품질 모드 활용을 추천합니다.
        4K 게이밍이 주목적이라면 RTX 4070 Ti 이상을 고려하세요.
      </P>

      <H2>경쟁 모델과 비교</H2>
      <Table
        headers={['모델', '성능 (상대)', '예상 가격', '추천 해상도']}
        rows={[
          ['RTX 4060 Ti', '-15%', '약 40만원대', '1080p ~ 1440p 초입'],
          ['RTX 4070', '기준', '약 55만원대', '1440p 최적'],
          ['RTX 4070 Super', '+12%', '약 65만원대', '1440p ~ 4K 초입'],
          ['RX 7700 XT', '-8%', '약 45만원대', '1080p ~ 1440p'],
        ]}
      />
      <Callout type="tip">
        RTX 4070 Super와의 가격 차이가 10만원 내외라면 Super를 선택하는 게 유리합니다. 가격 차이가 더 크다면 RTX 4070이 가성비 우위입니다.
      </Callout>

      <H2>2026년 지금 구매해도 될까?</H2>
      <P>
        결론부터 말하면 <strong className="text-white">1440p 게이머에게는 여전히 최선의 선택 중 하나</strong>입니다.
        RTX 4070은 출시 이후 꾸준히 가격이 내려왔고, 중고 시장에서도 합리적인 가격에 구할 수 있습니다.
        DLSS 3.0 지원으로 향후 2~3년은 충분히 커버할 수 있는 수명을 가졌습니다.
      </P>
      <UL>
        <li><strong className="text-white">구매 추천:</strong> 1440p 게이머, 예산 50~60만원대, DLSS 활용 계획이 있는 경우</li>
        <li><strong className="text-white">다른 모델 고려:</strong> 4K 주목적이면 RTX 4070 Ti 이상, 예산 절약이 우선이면 RTX 4060 Ti</li>
      </UL>

      <ToolCTA href="/diagnose" label="내 PC에 RTX 4070이 맞는지 진단하기" />
    </ArticleLayout>
  );
}
