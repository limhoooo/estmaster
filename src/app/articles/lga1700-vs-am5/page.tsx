import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'LGA1700 vs AM5 — 지금 PC 조립할 때 어느 플랫폼이 유리할까? | 견적도사',
  description: '인텔 LGA1700과 AMD AM5 플랫폼을 가격·성능·업그레이드 경로·수명 관점에서 비교합니다. 2026년 기준 CPU 플랫폼 선택 가이드.',
  keywords: ['LGA1700 vs AM5', '인텔 AMD 비교', 'AM5 LGA1700 차이', 'CPU 플랫폼 선택', '인텔 12세대 13세대', 'Ryzen 7000'],
  alternates: { canonical: `${SITE.url}/articles/lga1700-vs-am5` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="LGA1700 vs AM5: 지금 PC 조립할 때 어느 플랫폼이 유리할까?"
      description="인텔 LGA1700과 AMD AM5 플랫폼, 2026년 기준 선택 가이드입니다."
      publishedAt="2026-06-24"
      tags={['CPU 비교', 'Intel vs AMD', '플랫폼 선택']}
    >
      <P>
        새로 PC를 조립하거나 CPU를 교체할 때 가장 먼저 결정해야 하는 것이 바로 플랫폼(소켓)입니다.
        인텔 LGA1700과 AMD AM5, 두 플랫폼 모두 현재 시장에서 주류를 차지하고 있습니다.
        어느 쪽이 더 나은지, 상황에 따라 어떻게 선택해야 하는지 알아보겠습니다.
      </P>

      <H2>각 플랫폼 기본 정보</H2>
      <Table
        headers={['항목', 'Intel LGA1700', 'AMD AM5']}
        rows={[
          ['지원 CPU 세대', '12·13·14세대', 'Ryzen 7000·8000·9000'],
          ['메모리 규격', 'DDR4/DDR5', 'DDR5 전용'],
          ['PCIe 버전', 'PCIe 5.0', 'PCIe 5.0'],
          ['TDP 범위', '65W ~ 253W', '65W ~ 170W'],
          ['출시 시기', '2021년~', '2022년~'],
          ['최신 CPU 지원 여부', '인텔 14세대가 마지막', '9000 시리즈까지 지원 중'],
        ]}
      />

      <H2>가격 비교</H2>
      <H3>보급형 (15~20만원대 CPU)</H3>
      <P>
        <strong className="text-white">LGA1700 승.</strong> i5-13400F(약 14만원), i5-12400F(약 13만원)는 AM5 보급형 대비
        가성비가 우수합니다. 메인보드도 B660/B760 기준 8~15만원으로 저렴합니다.
      </P>
      <H3>중급 (25~40만원대 CPU)</H3>
      <P>
        <strong className="text-white">비슷하거나 AM5 약간 우위.</strong> Ryzen 5 7600(약 19만원), Ryzen 7 7700(약 30만원)과
        i5-13600K(약 25만원) 등이 경쟁합니다. 성능 차이보다 생태계 선호도가 선택에 더 큰 영향을 미칩니다.
      </P>

      <H2>업그레이드 경로</H2>
      <Callout type="warn">
        LGA1700은 인텔이 14세대를 마지막으로 더 이상 새 CPU를 출시하지 않을 것으로 알려져 있습니다.
        AM5는 적어도 2025~2026년까지 신규 CPU 지원이 예정되어 있습니다.
      </Callout>
      <UL>
        <li><strong className="text-white">LGA1700:</strong> 이미 12~14세대로 완성된 플랫폼. 최신 CPU로의 업그레이드 경로가 막혀 있음.</li>
        <li><strong className="text-white">AM5:</strong> Ryzen 9000 시리즈까지 지원. 향후 추가 세대도 AM5 유지 가능성 있음.</li>
      </UL>

      <H2>게임 성능 비교</H2>
      <P>
        게임 성능 기준으로는 LGA1700과 AM5 동급 제품 간 차이가 5% 이내로 거의 동일합니다.
        게임 성능은 CPU보다 <strong className="text-white">GPU의 영향이 훨씬 크기 때문</strong>에 플랫폼 선택보다
        GPU 예산을 더 중시하는 것이 현명합니다.
      </P>

      <H2>추천 시나리오별 선택</H2>
      <Table
        headers={['상황', '추천 플랫폼', '이유']}
        rows={[
          ['빠듯한 예산 (30만원 이하 CPU+메인보드)', 'LGA1700', '저렴한 DDR4 메모리·보드 활용 가능'],
          ['장기 사용 목적 (5년+)', 'AM5', '업그레이드 경로가 더 길게 열려 있음'],
          ['기존 DDR4 메모리 재활용', 'LGA1700', 'AM5는 DDR5 전용'],
          ['최고 성능 목표', '케이스 바이 케이스', 'Ryzen 9900X vs i9-14900K 비교 후 선택'],
          ['지금 당장 가성비', 'LGA1700 i5-13400F', '가장 저렴하게 구성 가능'],
        ]}
      />

      <H2>기존 PC 업그레이드라면?</H2>
      <UL>
        <li><strong className="text-white">현재 LGA1700 사용 중:</strong> 13~14세대로 교체 가능. 소켓 그대로 활용.</li>
        <li><strong className="text-white">현재 LGA1151/1200 사용 중:</strong> LGA1700 or AM5로 플랫폼 전환 필요. 보드+CPU+메모리 모두 교체.</li>
        <li><strong className="text-white">현재 AM4 사용 중:</strong> AM5로 전환 시 보드+CPU+메모리 모두 교체. Ryzen 5000 시리즈로 AM4 내에서 업그레이드가 더 경제적일 수 있음.</li>
      </UL>

      <Callout type="tip">
        현재 소켓으로 업그레이드 가능한 최고 CPU가 무엇인지 확인하려면 견적도사에서 현재 CPU를 진단해보세요.
        소켓 호환성 경고와 함께 추천 CPU를 알려드립니다.
      </Callout>

      <ToolCTA href="/compare?type=CPU&a=i5-13400F&b=Ryzen+5+7600" label="i5-13400F vs Ryzen 5 7600 직접 비교하기" />
    </ArticleLayout>
  );
}
