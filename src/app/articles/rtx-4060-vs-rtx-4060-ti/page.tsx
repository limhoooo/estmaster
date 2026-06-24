import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'RTX 4060 vs RTX 4060 Ti 비교 — 10만원 더 쓸 가치 있을까? | 견적도사',
  description: 'RTX 4060과 RTX 4060 Ti 성능 차이 14%, 가격 차이 33%. 실제 게임 성능과 가성비를 분석해 어느 쪽이 더 현명한 선택인지 알려드립니다.',
  keywords: ['RTX 4060 vs RTX 4060 Ti', 'RTX 4060 비교', 'RTX 4060 Ti 가성비', '그래픽카드 추천'],
  alternates: { canonical: `${SITE.url}/articles/rtx-4060-vs-rtx-4060-ti` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="RTX 4060 vs RTX 4060 Ti: 10만원 더 쓸 가치 있을까?"
      description="성능 차이 14%, 가격 차이 33%. 실제 게임에서 얼마나 다른지 분석합니다."
      publishedAt="2026-06-24"
      tags={['GPU 비교', '구매 가이드', 'NVIDIA']}
    >
      <P>
        NVIDIA RTX 4060과 RTX 4060 Ti는 가장 많이 비교되는 GPU 조합 중 하나입니다.
        가격 차이는 약 <strong className="text-white">10만원</strong>인데, 성능 차이는 <strong className="text-white">약 14%</strong>에 불과합니다.
        이 차이가 실제 게임에서 어떻게 체감될지, 그리고 어느 쪽을 선택해야 할지 분석해보겠습니다.
      </P>

      <H2>기본 사양 비교</H2>
      <Table
        headers={['항목', 'RTX 4060', 'RTX 4060 Ti']}
        rows={[
          ['PassMark 점수', '14,782점', '16,870점'],
          ['성능 차이', '기준', '+14.1%'],
          ['예상 가격', '약 30만원대', '약 40만원대'],
          ['권장 파워', '550W', '600W'],
          ['출시연도', '2023년', '2023년'],
        ]}
      />
      <Callout type="info">
        PassMark 점수는 실제 게임 성능과 다소 차이가 있을 수 있습니다. 참고용으로만 활용하세요.
      </Callout>

      <H2>1080p 게임에서의 차이</H2>
      <P>
        1080p(FHD) 해상도 기준으로 두 GPU 모두 대부분의 게임을 <strong className="text-white">원활하게</strong> 실행할 수 있습니다.
        RTX 4060으로 사이버펑크 2077, 엘든 링, 배틀그라운드 모두 권장 사양을 충족합니다.
        RTX 4060 Ti는 같은 게임에서 약 10~15fps 더 높은 성능을 보여주지만, 이미 충분한 프레임이 나오는 상황에서는 체감 차이가 거의 없습니다.
      </P>
      <Callout type="tip">
        1080p 60fps 목표라면 RTX 4060으로 충분합니다. 1080p 최고 옵션 144fps 이상을 원한다면 RTX 4060 Ti가 더 유리합니다.
      </Callout>

      <H2>1440p 게임에서의 차이</H2>
      <P>
        1440p(QHD) 해상도에서는 차이가 더 두드러집니다. RTX 4060은 고사양 게임에서 중간 옵션으로 내려야 하는 경우가 생기지만,
        RTX 4060 Ti는 대부분의 게임을 중~높은 옵션에서 원활하게 즐길 수 있습니다.
        1440p 모니터를 사용 중이거나 구매 예정이라면 <strong className="text-white">RTX 4060 Ti를 강력히 추천</strong>합니다.
      </P>

      <H2>가성비 분석</H2>
      <P>
        10만원을 더 내고 14% 성능을 얻는 것은 <strong className="text-white">단순 가성비로는 불리합니다.</strong>
        10만원으로 RTX 4060 Ti 대신 RTX 4060을 사고 남은 돈으로 RAM 업그레이드나 SSD 추가를 고려할 수도 있습니다.
      </P>
      <UL>
        <li><strong className="text-white">RTX 4060 추천 대상:</strong> 1080p 게이머, 예산이 빠듯한 경우, 이미 좋은 사양의 기타 부품 보유</li>
        <li><strong className="text-white">RTX 4060 Ti 추천 대상:</strong> 1440p 게이머, 향후 2~3년을 내다보는 장기 투자, 최고 옵션 선호</li>
      </UL>

      <H2>결론</H2>
      <P>
        <strong className="text-white">1080p 게이머라면 RTX 4060</strong>으로도 충분합니다. 대부분의 게임에서 60~100fps 이상이 나옵니다.
        <strong className="text-white">1440p를 겨냥하거나 장기 사용을 원한다면 RTX 4060 Ti</strong>가 더 현명한 투자입니다.
        지금 어떤 GPU가 내 PC에 맞는지 진단이 필요하다면 아래 도구를 활용해보세요.
      </P>

      <ToolCTA href="/compare?type=GPU&a=RTX+4060&b=RTX+4060+Ti" label="RTX 4060 vs RTX 4060 Ti 직접 비교하기" />
    </ArticleLayout>
  );
}
