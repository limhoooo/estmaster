import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'RTX 4070 Super vs RTX 4070 Ti Super — 20만원 차이, 가치 있을까?',
  description: 'RTX 4070 Super와 RTX 4070 Ti Super의 성능·가격 차이를 분석하고, 어떤 사용자에게 어느 쪽이 유리한지 알려드립니다.',
  keywords: ['RTX 4070 Super vs Ti Super', 'RTX 4070 Ti Super 후기', 'RTX 4070 Super 가성비', '1440p 그래픽카드 추천'],
  alternates: { canonical: `${SITE.url}/articles/rtx-4070-super-vs-ti-super/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="RTX 4070 Super vs RTX 4070 Ti Super: 20만원 차이, 가치 있을까?"
      description="1440p~4K 그래픽카드 두 형제 모델, 가격 차이만큼 성능 차이가 날까?"
      publishedAt="2026-07-03"
      tags={['GPU 비교', '구매 가이드', 'NVIDIA']}
    >
      <P>
        RTX 4070 Super와 RTX 4070 Ti Super는 같은 세대, 비슷한 이름으로 헷갈리기 쉬운 두 GPU입니다.
        20만원 안팎의 가격 차이가 실제 성능 차이로 이어지는지, 어떤 사용자에게 어느 쪽이 맞는지 비교합니다.
      </P>

      <H2>기본 사양 비교</H2>
      <Table
        headers={['항목', 'RTX 4070 Super', 'RTX 4070 Ti Super']}
        rows={[
          ['PassMark 점수', '약 24,600점', '약 28,500점'],
          ['VRAM', '12GB', '16GB'],
          ['권장 파워', '650W', '700W'],
          ['예상 가격', '약 75~85만원대', '약 100~110만원대'],
          ['출시연도', '2024년', '2024년'],
          ['추천 해상도', '1440p 최적', '1440p ~ 4K 초입'],
        ]}
      />
      <Callout type="info">
        PassMark 점수 기준 Ti Super가 약 16% 더 높지만, 가격 차이는 약 30%입니다. 순수 가성비는 Super 쪽이 앞섭니다.
      </Callout>

      <H2>1440p · 4K 해상도별 성능</H2>
      <H3>1440p (QHD)</H3>
      <P>
        두 모델 모두 1440p에서는 대부분의 게임을 높은 옵션으로 무리 없이 돌립니다.
        RTX 4070 Super로도 1440p 144Hz 모니터를 충분히 활용할 수 있어, 1440p가 목표라면 Super로 충분합니다.
      </P>
      <H3>4K (UHD)</H3>
      <P>
        4K에서는 VRAM 용량 차이(12GB vs 16GB)가 체감되기 시작합니다.
        고해상도 텍스처를 쓰는 최신 AAA 게임에서 Ti Super가 더 안정적인 프레임을 유지합니다.
        4K가 주목적이라면 Ti Super 쪽이 확실히 유리합니다.
      </P>

      <H2>VRAM 12GB vs 16GB, 실제로 중요할까?</H2>
      <P>
        1440p에서는 12GB로도 대부분 부족함이 없습니다. 하지만 4K + 텍스처 최상 옵션이거나,
        향후 3~4년 더 사용할 계획이라면 16GB가 더 안전한 선택입니다.
        최신 게임들이 점점 더 많은 VRAM을 요구하는 추세이기 때문입니다.
      </P>
      <Callout type="warn">
        Ti Super는 권장 파워가 700W로 Super(650W)보다 높습니다. 기존 파워가 650W 이하라면 파워 교체 비용도 함께 고려하세요.
      </Callout>

      <H2>결론: 어떤 사람에게 어느 쪽이 맞나?</H2>
      <UL>
        <li><strong className="text-white">RTX 4070 Super 추천:</strong> 1440p 게이머, 가성비 우선, 파워 교체 부담 없이 업그레이드</li>
        <li><strong className="text-white">RTX 4070 Ti Super 추천:</strong> 4K 게이밍 목표, VRAM 여유 확보, 3~4년 이상 장기 사용 계획</li>
      </UL>
      <P>
        가격 차이가 15만원 이내라면 Ti Super를, 20만원 이상 벌어진다면 Super의 가성비가 더 매력적입니다.
      </P>

      <ToolCTA href="/compare?type=GPU&a=RTX+4070+Super&b=RTX+4070+Ti+Super" label="RTX 4070 Super vs Ti Super 직접 비교하기" />
    </ArticleLayout>
  );
}
