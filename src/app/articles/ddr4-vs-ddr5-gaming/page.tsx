import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'DDR4 vs DDR5: 게임 성능 차이, 업그레이드 가치 있을까? | 견적도사',
  description: 'DDR4와 DDR5 메모리의 게임 성능 차이를 실제 수치로 비교합니다. 지금 DDR5로 업그레이드할 가치가 있는지 알아보세요.',
  keywords: ['DDR4 vs DDR5', 'DDR5 게임 성능', 'RAM 업그레이드', 'DDR5 가성비'],
  alternates: { canonical: `${SITE.url}/articles/ddr4-vs-ddr5-gaming/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="DDR4 vs DDR5: 게임 성능 차이, 업그레이드 가치 있을까?"
      description="실제 게임에서 DDR4와 DDR5의 fps 차이, 그리고 지금 바꿔야 할지 판단 기준"
      publishedAt="2026-07-02"
      tags={['RAM', 'DDR5', 'PC 업그레이드']}
    >
      <P>
        새 PC를 맞추거나 업그레이드를 고민할 때 DDR4를 선택할지, DDR5를 선택할지 고민되는 분들이 많습니다.
        이론상 DDR5가 훨씬 빠르지만, 실제 게임에서 체감 차이가 얼마나 날지, 비용 대비 가치가 있는지 따져보겠습니다.
      </P>

      <H2>DDR4 vs DDR5 규격 비교</H2>
      <Table
        headers={['항목', 'DDR4', 'DDR5']}
        rows={[
          ['일반 속도', '2133~3600 MHz', '4800~7200 MHz'],
          ['최대 대역폭', '약 25 GB/s (듀얼채널)', '약 51 GB/s (듀얼채널)'],
          ['지연시간 (레이턴시)', '낮음 (CL14~18)', '상대적으로 높음 (CL30~40)'],
          ['전력 소비', '1.2V', '1.1V'],
          ['2026년 시장가 (16GB×2)', '약 4~6만원', '약 7~10만원'],
        ]}
      />
      <Callout type="info">
        DDR5는 이론 대역폭이 2배 이상이지만, 레이턴시가 높아 일부 상황에서 체감 성능이 기대보다 낮을 수 있습니다.
      </Callout>

      <H2>실제 게임에서 fps 차이는?</H2>
      <P>
        여러 벤치마크 결과를 종합하면, 대부분의 게임에서 DDR4 3200 MHz와 DDR5 5600 MHz의 fps 차이는
        <strong className="text-white"> 5% 이내</strong>입니다. 60fps 기준으로 약 1~3fps 차이로, 체감하기 매우 어렵습니다.
      </P>
      <H3>DDR5 효과가 큰 경우</H3>
      <UL>
        <li>Total War, 스타크래프트처럼 대규모 유닛을 처리하는 RTS 게임</li>
        <li>오픈월드 게임에서 CPU가 많은 오브젝트를 동시 처리할 때</li>
        <li>7900X3D, i9-14900K처럼 메모리 대역폭에 민감한 고성능 CPU</li>
      </UL>
      <H3>DDR5 효과가 거의 없는 경우</H3>
      <UL>
        <li>배틀그라운드, 롤, 발로란트 등 e스포츠 타이틀</li>
        <li>GPU가 병목인 상황 (대부분의 1440p·4K 게임)</li>
        <li>중급 CPU (i5, 라이젠 5) 조합</li>
      </UL>

      <H2>DDR5로 업그레이드해야 할까?</H2>
      <H3>기존 DDR4 시스템 사용 중 → 업그레이드 비추천</H3>
      <P>
        DDR4 → DDR5로 업그레이드하려면 CPU + 메인보드까지 교체해야 합니다.
        메모리만 바꾸면 되는 게 아니라 플랫폼 전체를 교체하는 비용이 들죠.
        게임 성능 향상이 5% 이내인 상황에서 이 비용을 감당하는 건 비효율적입니다.
        차라리 그 예산으로 GPU를 업그레이드하세요.
      </P>
      <H3>새 PC 조립 시 → DDR5 선택 권장</H3>
      <P>
        처음부터 새 시스템을 구성한다면 DDR5를 선택하는 게 낫습니다.
        가격 차이가 2~4만원으로 줄었고, 향후 3~5년을 사용할 플랫폼이라면 DDR5가 훨씬 유리합니다.
        최신 인텔·AMD 플랫폼 모두 DDR5를 기본으로 채택하는 방향으로 가고 있습니다.
      </P>
      <Callout type="tip">
        새 PC 조립이라면 DDR5 6000 MHz CL30을 기준으로 선택하세요. 가격 대비 성능 균형점입니다.
      </Callout>

      <H2>결론</H2>
      <UL>
        <li>게임 전용 사용이고 DDR4 기존 PC: <strong className="text-white">DDR4 유지, GPU 업그레이드 우선</strong></li>
        <li>새 PC 조립: <strong className="text-white">DDR5 선택 (장기 투자 관점)</strong></li>
        <li>방송·영상편집 병행: <strong className="text-white">DDR5 효과가 더 큼, 업그레이드 고려 가치 있음</strong></li>
      </UL>

      <ToolCTA href="/diagnose" label="내 PC 어디를 업그레이드해야 할지 진단하기" />
    </ArticleLayout>
  );
}
