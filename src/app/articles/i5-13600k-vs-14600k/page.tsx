import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'i5-13600K vs i5-14600K — 같은 가격이면 뭘 사야 할까? | 견적도사',
  description: '인텔 i5-13600K와 i5-14600K, 코어 구성은 같지만 클럭이 다른 두 CPU를 게임 성능과 가격으로 비교합니다.',
  keywords: ['i5-13600K vs i5-14600K', 'i5-14600K 후기', 'i5-13600K 가성비', '인텔 13세대 14세대 비교'],
  alternates: { canonical: `${SITE.url}/articles/i5-13600k-vs-14600k` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="i5-13600K vs i5-14600K: 같은 가격이면 뭘 사야 할까?"
      description="같은 14코어, 클럭만 다른 두 CPU — 실제 게임 성능 차이는?"
      publishedAt="2026-07-03"
      tags={['CPU 비교', '구매 가이드', 'Intel']}
    >
      <P>
        i5-13600K와 i5-14600K는 코어·스레드 구성이 완전히 동일해 "같은 CPU를 재탕한 것 아니냐"는
        말도 나옵니다. 실제로 다른 건 클럭뿐인데, 이게 게임 성능에 얼마나 영향을 주는지 확인해보겠습니다.
      </P>

      <H2>기본 사양 비교</H2>
      <Table
        headers={['항목', 'i5-13600K', 'i5-14600K']}
        rows={[
          ['코어/스레드', '14코어 / 20스레드', '14코어 / 20스레드'],
          ['PassMark 점수', '약 38,200점', '약 46,300점'],
          ['소켓', 'LGA1700', 'LGA1700'],
          ['DDR 지원', 'DDR4 / DDR5', 'DDR4 / DDR5'],
          ['출시연도', '2022년', '2023년'],
          ['예상 가격', '약 28만원대', '약 32만원대'],
        ]}
      />
      <Callout type="info">
        코어·스레드 구성이 완전히 같은데도 PassMark 점수는 14600K가 약 21% 높습니다. 이는 부스트 클럭 상향과 전력 한계 조정 덕분입니다.
      </Callout>

      <H2>같은 소켓, 같은 코어 — 그런데 왜 성능 차이가 나나?</H2>
      <P>
        두 CPU는 같은 랩터레이크 아키텍처를 씁니다. 14600K는 13600K 대비 P코어·E코어 부스트 클럭이 소폭 올라가고,
        전력 한계(PL2)가 조금 더 높게 설정되어 있어 멀티코어 작업에서 유리합니다.
        완전히 새로운 아키텍처가 아니라 "리프레시(Refresh)" 모델이라는 점을 알아두세요.
      </P>

      <H2>게임 성능 비교</H2>
      <P>
        1080p·1440p 게임 성능(고성능 GPU 기준)에서는 두 CPU 차이가 3~5fps 이내로 거의 체감되지 않습니다.
        게임은 대부분 싱글스레드/소수 코어 성능에 의존하는데, 두 CPU의 싱글코어 성능 차이가 크지 않기 때문입니다.
      </P>
      <H3>멀티태스킹 · 인코딩 작업</H3>
      <P>
        게임 방송을 병행하거나 영상 편집 작업이 잦다면 <strong className="text-white">14600K가 소폭 유리</strong>합니다.
        멀티코어 부스트 클럭이 높아 렌더링·인코딩 시간이 조금 더 짧습니다.
      </P>

      <H2>발열 · 전력 소비</H2>
      <P>
        14600K는 부스트 클럭이 높은 만큼 풀로드 시 전력 소비와 발열이 13600K보다 다소 큽니다.
        좋은 공랭 쿨러 이상을 권장하며, 소형 케이스라면 쿨링 여유를 확인하세요.
      </P>
      <Callout type="warn">
        가격 차이가 5만원 이내라면 14600K가 나은 선택입니다. 게임 전용이고 가격 차이가 크다면 13600K로도 체감 차이는 거의 없습니다.
      </Callout>

      <H2>결론: 어떤 사람에게 어느 쪽이 맞나?</H2>
      <UL>
        <li><strong className="text-white">게임 전용, 예산 우선:</strong> i5-13600K (가격 대비 성능 차이 미미)</li>
        <li><strong className="text-white">방송·편집 병행:</strong> i5-14600K (멀티코어 클럭 우위)</li>
        <li><strong className="text-white">기존 13600K 보유자:</strong> 업그레이드 실익 거의 없음, 교체 비추천</li>
      </UL>

      <ToolCTA href="/compare?type=CPU&a=i5-13600K&b=i5-14600K" label="i5-13600K vs i5-14600K 직접 비교하기" />
    </ArticleLayout>
  );
}
