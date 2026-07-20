import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '메인보드 칩셋 완벽 정리 — B760 vs Z790, B650 vs X670',
  description: '인텔 B760·Z790, AMD B650·X670 칩셋 차이를 오버클럭·확장성·가격 기준으로 정리합니다. 내게 맞는 칩셋 고르는 법.',
  keywords: ['메인보드 칩셋 비교', 'B760 vs Z790', 'B650 vs X670', '메인보드 선택 가이드'],
  alternates: { canonical: `${SITE.url}/articles/motherboard-chipset-guide/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="메인보드 칩셋 완벽 정리 — B760 vs Z790, B650 vs X670"
      description="칩셋 이름만 봐서는 뭐가 다른지 모르겠다면, 이 글 하나로 정리하세요"
      publishedAt="2026-07-04"
      tags={['메인보드', '칩셋 비교', '구매 가이드']}
    >
      <P>
        CPU와 GPU는 열심히 고르면서 메인보드 칩셋은 대충 고르는 경우가 많습니다.
        하지만 칩셋에 따라 오버클럭 가능 여부, 확장 슬롯 개수, 가격이 크게 달라집니다.
        인텔·AMD 최신 칩셋 라인업을 정리해드립니다.
      </P>

      <H2>인텔 칩셋: B760 vs Z790</H2>
      <Table
        headers={['항목', 'B760', 'Z790']}
        rows={[
          ['CPU 오버클럭', '불가', '가능 (K 모델)'],
          ['메모리 오버클럭', '가능', '가능'],
          ['PCIe 레인', '상대적으로 적음', '더 많음'],
          ['가격대', '15~25만원대', '25~50만원대'],
          ['추천 대상', 'K 모델 아닌 CPU 사용자', 'K 모델 + 오버클럭 계획자'],
        ]}
      />
      <Callout type="warn">
        i5-13600K 같은 K 모델 CPU를 B760 보드에 꽂으면 CPU 자체 오버클럭은 불가능합니다.
        오버클럭 계획이 없다면 문제없지만, K 모델을 사면서 오버클럭도 안 할 거라면 굳이 K 모델을 살 필요가 없다는 점도 함께 고려하세요.
      </Callout>

      <H2>AMD 칩셋: B650 vs X670</H2>
      <Table
        headers={['항목', 'B650', 'X670']}
        rows={[
          ['CPU 오버클럭', '가능', '가능'],
          ['PCIe 레인', '상대적으로 적음', '더 많음 (칩셋 2개 구성)'],
          ['M.2 슬롯 개수', '보통 2~3개', '보통 4개 이상'],
          ['가격대', '18~30만원대', '35~60만원대'],
          ['추천 대상', '일반 게이밍 조합', '다중 SSD·고급 확장 필요'],
        ]}
      />
      <Callout type="info">
        AMD는 인텔과 달리 B650에서도 CPU 오버클럭이 가능합니다. 이 점이 인텔과 가장 큰 차이입니다.
      </Callout>

      <H2>보급형 칩셋도 있다 — H610 / A620</H2>
      <P>
        예산을 최대한 아껴야 한다면 인텔 H610, AMD A620 같은 보급형 칩셋도 선택지입니다.
        다만 확장 슬롯이 적고 전원부가 약해 상급 CPU와 조합하면 성능을 온전히 못 뽑아낼 수 있습니다.
        <strong className="text-white"> i5·라이젠 5급 이하 CPU와 조합할 때만 권장</strong>합니다.
      </P>

      <H2>칩셋 고를 때 체크리스트</H2>
      <UL>
        <li><strong className="text-white">오버클럭 계획이 있는가?</strong> 인텔은 Z 시리즈 필수, AMD는 대부분 칩셋에서 가능</li>
        <li><strong className="text-white">M.2 SSD를 여러 개 쓸 계획인가?</strong> 슬롯 개수가 많은 상급 칩셋 고려</li>
        <li><strong className="text-white">CPU 등급은 어느 정도인가?</strong> 상급 CPU에 보급형 칩셋은 전원부 안정성 문제 우려</li>
        <li><strong className="text-white">향후 CPU만 교체할 계획이 있는가?</strong> 소켓 수명이 긴 플랫폼(AM5 등)을 우선 고려</li>
      </UL>
      <Callout type="tip">
        오버클럭 계획이 없는 대부분의 게이머에게는 인텔 B760, AMD B650이 가격 대비 가장 합리적인 선택입니다.
      </Callout>

      <ToolCTA href="/diagnose" label="내 CPU에 맞는 조합 진단받기" />
    </ArticleLayout>
  );
}
