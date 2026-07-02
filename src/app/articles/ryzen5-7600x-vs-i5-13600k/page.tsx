import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '라이젠 5 7600X vs i5-13600K — 게임용 CPU 최강자는? | 견적도사',
  description: '라이젠 5 7600X와 인텔 i5-13600K를 게임 성능, 가격, 전성비, 플랫폼 확장성으로 비교합니다. 2026년에도 유효한 분석.',
  keywords: ['라이젠 5 7600X vs i5-13600K', '게임용 CPU 추천', 'AMD Intel CPU 비교', 'CPU 가성비'],
  alternates: { canonical: `${SITE.url}/articles/ryzen5-7600x-vs-i5-13600k` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="라이젠 5 7600X vs i5-13600K: 게임용 CPU 최강자는?"
      description="AMD와 Intel 중급 CPU, 게임 성능·전성비·플랫폼까지 총비교"
      publishedAt="2026-07-02"
      tags={['CPU 비교', 'AMD vs Intel', '게임용 CPU']}
    >
      <P>
        30만원대 중급 CPU 시장에서 AMD 라이젠 5 7600X와 인텔 i5-13600K는 가장 많이 비교되는 맞수입니다.
        두 CPU 모두 게임용으로 훌륭한 성능을 보여주지만, 선택에 따라 플랫폼 전체 구성이 달라집니다.
        어느 쪽이 내게 맞는지 꼼꼼히 따져보겠습니다.
      </P>

      <H2>기본 사양 비교</H2>
      <Table
        headers={['항목', '라이젠 5 7600X', 'i5-13600K']}
        rows={[
          ['코어/스레드', '6코어 / 12스레드', '14코어 / 20스레드'],
          ['부스트 클럭', '5.3 GHz', '5.1 GHz'],
          ['PassMark 점수', '약 24,500점', '약 36,000점'],
          ['TDP', '105W', '125W'],
          ['소켓', 'AM5', 'LGA1700'],
          ['DDR 지원', 'DDR5 전용', 'DDR4 / DDR5'],
          ['예상 가격', '약 25만원대', '약 30만원대'],
        ]}
      />
      <Callout type="info">
        PassMark 점수는 멀티스레드 기준입니다. 게임은 주로 싱글스레드 성능에 의존하므로 참고용으로만 활용하세요.
      </Callout>

      <H2>게임 성능 비교</H2>
      <P>
        순수 게임 성능(1080p, 고성능 GPU 기준)은 두 CPU가 매우 유사합니다.
        대부분의 게임에서 1~5fps 이내 차이로, 체감하기 어렵습니다.
        싱글스레드 속도는 7600X가 소폭 앞서지만, i5-13600K는 코어 수에서 크게 우위를 점합니다.
      </P>
      <H3>게임 외 작업 (방송, 영상편집 등)</H3>
      <P>
        방송 인코딩, 영상 편집, 스트리밍 병행 작업에서는 <strong className="text-white">i5-13600K가 확연히 유리</strong>합니다.
        14코어 20스레드로 멀티태스킹 여유가 훨씬 크고, OBS 인코딩을 CPU로 돌리면서도 게임 성능 하락이 적습니다.
        게임만 한다면 차이가 없지만, 게임 + 방송을 병행한다면 i5-13600K가 낫습니다.
      </P>

      <H2>플랫폼 확장성 비교</H2>
      <H3>라이젠 5 7600X (AM5 플랫폼)</H3>
      <P>
        AM5 소켓은 AMD가 2025~2027년까지 지원을 약속한 플랫폼입니다.
        라이젠 7000 시리즈에서 9000 시리즈로 업그레이드할 때 메인보드를 교체하지 않아도 됩니다.
        단, DDR5 전용이므로 DDR4 메모리를 재활용하려면 반드시 교체가 필요합니다.
      </P>
      <H3>i5-13600K (LGA1700 플랫폼)</H3>
      <P>
        LGA1700은 인텔 12~13세대를 지원하는 소켓입니다. 14세대(랩터레이크 리프레시)까지는 호환되나,
        인텔이 새 소켓(LGA1851)으로 전환을 시작해 <strong className="text-white">장기 업그레이드 경로가 제한</strong>됩니다.
        DDR4와 DDR5를 모두 지원하는 점은 기존 메모리 재활용에 유리합니다.
      </P>
      <Callout type="warn">
        기존에 DDR4 메모리가 있다면 i5-13600K + DDR4 보드가 총 비용 면에서 유리합니다. 처음부터 새로 맞춘다면 AM5 플랫폼 장기 수명이 더 좋습니다.
      </Callout>

      <H2>전성비 (전력 대비 성능)</H2>
      <P>
        전성비는 <strong className="text-white">라이젠 5 7600X가 확실히 유리</strong>합니다.
        i5-13600K는 풀로드 시 발열과 전력 소비가 크고, 좋은 쿨러가 필요합니다.
        7600X도 기본 쿨러가 없어 쿨러를 별도 구매해야 하지만, 전력 효율 자체는 TSMC 5nm 공정으로 더 좋습니다.
      </P>

      <H2>결론: 내 상황에 맞는 CPU는?</H2>
      <UL>
        <li><strong className="text-white">게임 전용 + 장기 업그레이드:</strong> 라이젠 5 7600X (AM5 플랫폼 수명)</li>
        <li><strong className="text-white">게임 + 방송/편집 병행:</strong> i5-13600K (코어 수 우위)</li>
        <li><strong className="text-white">DDR4 메모리 재활용:</strong> i5-13600K (DDR4/5 모두 지원)</li>
        <li><strong className="text-white">전력·발열 민감:</strong> 라이젠 5 7600X (전성비 우수)</li>
      </UL>

      <ToolCTA href="/diagnose" label="내 CPU가 병목인지 지금 진단하기" />
    </ArticleLayout>
  );
}
