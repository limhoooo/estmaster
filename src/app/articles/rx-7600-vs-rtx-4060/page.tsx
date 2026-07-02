import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'RX 7600 vs RTX 4060 비교 — AMD가 더 저렴한데 성능은? | 견적도사',
  description: 'RX 7600과 RTX 4060, 비슷한 가격대 AMD vs NVIDIA 보급형 GPU를 성능·가성비·게임 호환성으로 비교합니다.',
  keywords: ['RX 7600 vs RTX 4060', 'AMD 그래픽카드 추천', 'RTX 4060 가성비', '보급형 GPU 비교'],
  alternates: { canonical: `${SITE.url}/articles/rx-7600-vs-rtx-4060` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="RX 7600 vs RTX 4060: AMD가 더 저렴한데 성능은?"
      description="같은 가격대 AMD와 NVIDIA 보급형 GPU, 어느 쪽을 골라야 할까?"
      publishedAt="2026-07-02"
      tags={['GPU 비교', 'AMD vs NVIDIA', '가성비']}
    >
      <P>
        10~35만원대 보급형 GPU 시장에서 AMD RX 7600과 NVIDIA RTX 4060은 치열하게 경쟁하는 맞수입니다.
        RX 7600은 가격이 더 저렴하고, RTX 4060은 DLSS와 생태계 면에서 우위를 보입니다.
        어느 쪽이 내 상황에 맞는지 항목별로 비교해봅니다.
      </P>

      <H2>기본 사양 비교</H2>
      <Table
        headers={['항목', 'RX 7600', 'RTX 4060']}
        rows={[
          ['PassMark 점수', '약 16,500점', '약 14,800점'],
          ['VRAM', '8GB', '8GB'],
          ['권장 파워', '550W', '550W'],
          ['예상 가격', '약 25~30만원대', '약 30~35만원대'],
          ['출시연도', '2023년', '2023년'],
          ['레이트레이싱 성능', '보통', '우수'],
          ['업스케일링', 'FSR', 'DLSS 3.0'],
        ]}
      />
      <Callout type="info">
        순수 래스터 성능은 RX 7600이 약 10% 앞서지만, RTX 4060은 DLSS 3.0(프레임 생성)으로 체감 fps를 크게 높일 수 있습니다.
      </Callout>

      <H2>1080p 게임 성능</H2>
      <P>
        1080p 기준 래스터 성능은 RX 7600이 약 10% 앞섭니다. 배틀그라운드, 롤, 발로란트 같은 e스포츠 타이틀에서는
        RX 7600 쪽이 더 높은 fps를 기록합니다. 단, RTX 4060은 DLSS 지원 게임에서 성능을 크게 끌어올릴 수 있어
        고사양 AAA 게임에서 역전되는 경우도 있습니다.
      </P>

      <H2>레이트레이싱 & 업스케일링</H2>
      <H3>레이트레이싱</H3>
      <P>
        레이트레이싱 성능은 <strong className="text-white">RTX 4060이 확연히 우세</strong>합니다.
        사이버펑크 2077, 컨트롤 같은 레이트레이싱 최적화 타이틀에서 RTX 4060이 RX 7600보다 30~50% 높은 성능을 냅니다.
        레이트레이싱을 즐기고 싶다면 RTX 4060 선택이 맞습니다.
      </P>
      <H3>업스케일링 (DLSS vs FSR)</H3>
      <P>
        NVIDIA DLSS 3.0은 AI 기반 화질 향상과 프레임 생성을 지원하며, 지원 게임에서 fps를 2배 가까이 올릴 수 있습니다.
        AMD FSR은 하드웨어 무관하게 작동하는 장점이 있지만, 화질과 성능 면에서 DLSS에 비해 다소 부족합니다.
        하지만 FSR은 RTX 4060에서도 사용할 수 있다는 점을 참고하세요.
      </P>
      <Callout type="tip">
        DLSS 지원 게임 목록이 빠르게 늘고 있습니다. 주로 하는 게임이 DLSS를 지원한다면 RTX 4060이 유리합니다.
      </Callout>

      <H2>가성비 종합 평가</H2>
      <Table
        headers={['기준', '유리한 쪽', '이유']}
        rows={[
          ['순수 성능/가격', 'RX 7600', '10% 저렴하고 래스터 성능도 더 높음'],
          ['레이트레이싱', 'RTX 4060', '레이트레이싱 성능 압도적 차이'],
          ['업스케일링', 'RTX 4060', 'DLSS 3.0 프레임 생성 지원'],
          ['드라이버 안정성', 'RTX 4060', 'NVIDIA 드라이버 역사적으로 더 안정적'],
          ['중고 가치', 'RTX 4060', 'NVIDIA 브랜드 선호도로 중고가 더 높음'],
        ]}
      />

      <H2>어떤 사람에게 어떤 GPU가 맞나?</H2>
      <UL>
        <li><strong className="text-white">RX 7600 추천:</strong> 예산이 최우선, e스포츠 위주 게이머, 레이트레이싱 관심 없음</li>
        <li><strong className="text-white">RTX 4060 추천:</strong> AAA 게임 위주, 레이트레이싱 체험 원함, DLSS 활용 계획, 향후 중고 매각 고려</li>
      </UL>
      <Callout type="warn">
        가격 차이가 5만원 이내라면 RTX 4060을 선택하는 것이 장기적으로 유리합니다. 가격 차이가 10만원 이상 난다면 RX 7600도 충분히 고려할 만합니다.
      </Callout>

      <ToolCTA href="/compare?type=GPU&a=RX+7600&b=RTX+4060" label="RX 7600 vs RTX 4060 직접 비교하기" />
    </ArticleLayout>
  );
}
