import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'RX 7800 XT vs RTX 4070 — 1440p 대결, 승자는?',
  description: 'RX 7800 XT와 RTX 4070, 비슷한 가격대 1440p 게이밍 GPU를 성능·가성비·레이트레이싱·업스케일링으로 비교합니다.',
  keywords: ['RX 7800 XT vs RTX 4070', 'RX 7800 XT 리뷰', 'RTX 4070 가성비', '1440p 그래픽카드 비교'],
  alternates: { canonical: `${SITE.url}/articles/rx-7800-xt-vs-rtx-4070/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="RX 7800 XT vs RTX 4070: 1440p 대결, 승자는?"
      description="비슷한 가격대 AMD·NVIDIA 1440p 게이밍 GPU, 항목별로 비교합니다"
      publishedAt="2026-07-04"
      tags={['GPU 비교', 'AMD vs NVIDIA', '가성비']}
    >
      <P>
        1440p 게이밍 GPU 시장에서 AMD RX 7800 XT와 NVIDIA RTX 4070은 비슷한 가격대에서 경쟁하는 맞수입니다.
        RX 7800 XT는 순수 래스터 성능과 VRAM에서, RTX 4070은 업스케일링과 전성비에서 강점을 보입니다.
      </P>

      <H2>기본 사양 비교</H2>
      <Table
        headers={['항목', 'RX 7800 XT', 'RTX 4070']}
        rows={[
          ['PassMark 점수', '약 20,500점', '약 22,200점'],
          ['VRAM', '16GB', '12GB'],
          ['권장 파워', '650W', '650W'],
          ['예상 가격', '약 55~60만원대', '약 55~60만원대'],
          ['출시연도', '2023년', '2022년'],
          ['업스케일링', 'FSR 3.0', 'DLSS 3.0'],
        ]}
      />
      <Callout type="info">
        PassMark 점수는 순수 벤치마크 기준이며, 실제 게임 성능은 타이틀별 최적화 상태에 따라 차이가 있을 수 있습니다.
      </Callout>

      <H2>1440p 게임 성능</H2>
      <P>
        1440p 래스터 성능은 두 제품이 거의 대등한 수준이며, 게임별로 승자가 갈립니다.
        AMD 최적화가 잘된 타이틀에서는 RX 7800 XT가, NVIDIA 최적화가 잘된 타이틀에서는 RTX 4070이 근소하게 앞섭니다.
        체감할 정도의 큰 격차는 아닙니다.
      </P>

      <H2>VRAM 16GB vs 12GB — 실제로 중요할까?</H2>
      <P>
        RX 7800 XT의 <strong className="text-white">16GB VRAM은 향후 게임 수명 면에서 확실한 장점</strong>입니다.
        고해상도 텍스처 팩을 사용하는 최신 게임에서 12GB는 한계에 부딪힐 가능성이 있는 반면,
        16GB는 앞으로 몇 년간 더 여유롭게 대응할 수 있습니다.
      </P>

      <H2>레이트레이싱 & 업스케일링</H2>
      <H3>레이트레이싱</H3>
      <P>
        레이트레이싱 성능은 <strong className="text-white">RTX 4070이 확연히 우세</strong>합니다.
        레이트레이싱을 활성화하는 게임에서는 RTX 4070이 RX 7800 XT보다 20~35% 높은 성능을 기록합니다.
      </P>
      <H3>업스케일링 (DLSS vs FSR)</H3>
      <P>
        NVIDIA DLSS 3.0은 프레임 생성 기술로 지원 게임에서 fps를 크게 끌어올립니다.
        AMD FSR 3.0도 프레임 생성을 지원하지만 화질 면에서는 DLSS가 여전히 근소하게 앞선다는 평가가 많습니다.
      </P>
      <Callout type="tip">
        레이트레이싱과 DLSS를 자주 쓸 계획이라면 RTX 4070, 순수 래스터 성능과 VRAM 여유를 중시한다면 RX 7800 XT가 유리합니다.
      </Callout>

      <H2>전성비 & 발열</H2>
      <P>
        전성비는 <strong className="text-white">RTX 4070이 더 우수</strong>합니다.
        동일한 성능 대비 전력 소비가 낮아 발열과 소음 관리 면에서 유리합니다.
        RX 7800 XT는 순정 상태에서 다소 더 많은 전력을 소비하는 편입니다.
      </P>

      <H2>가성비 종합 평가</H2>
      <Table
        headers={['기준', '유리한 쪽', '이유']}
        rows={[
          ['순수 래스터 성능', 'RTX 4070', 'PassMark 기준 소폭 우위'],
          ['VRAM 여유', 'RX 7800 XT', '16GB vs 12GB, 향후 게임 대응력'],
          ['레이트레이싱', 'RTX 4070', '20~35% 높은 성능'],
          ['업스케일링 화질', 'RTX 4070', 'DLSS 3.0 화질 우위'],
          ['전성비', 'RTX 4070', '동일 성능 대비 낮은 전력 소비'],
        ]}
      />

      <H2>어떤 사람에게 어떤 GPU가 맞나?</H2>
      <UL>
        <li><strong className="text-white">RX 7800 XT 추천:</strong> VRAM 여유를 중시, 레이트레이싱 관심 적음, 순수 래스터 성능 위주</li>
        <li><strong className="text-white">RTX 4070 추천:</strong> 레이트레이싱·DLSS 활용 계획, 전성비 중시, NVIDIA 생태계 선호</li>
      </UL>

      <ToolCTA href="/compare?type=GPU&a=RX+7800+XT&b=RTX+4070" label="RX 7800 XT vs RTX 4070 직접 비교하기" />
    </ArticleLayout>
  );
}
