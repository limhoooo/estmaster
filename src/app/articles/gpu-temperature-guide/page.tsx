import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '그래픽카드 온도 가이드 — 적정 온도와 과열 해결법 | 견적도사',
  description: '그래픽카드 온도가 너무 높으면 수명이 줄고 성능이 떨어집니다. 적정 온도 범위, 과열 원인, 쉬운 해결 방법을 정리합니다.',
  keywords: ['그래픽카드 온도', 'GPU 온도 적정', '그래픽카드 과열 해결', 'GPU 수명'],
  alternates: { canonical: `${SITE.url}/articles/gpu-temperature-guide/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="그래픽카드 온도 가이드 — 적정 온도와 과열 해결법"
      description="GPU 온도가 얼마나 되어야 정상인지, 과열 시 어떻게 해결하는지"
      publishedAt="2026-07-02"
      tags={['PC 관리', 'GPU 온도', '하드웨어 팁']}
    >
      <P>
        게임 중 PC가 갑자기 꺼지거나 화면이 멈추는 경험이 있으신가요? 그래픽카드 과열이 원인일 수 있습니다.
        GPU 온도가 어느 정도여야 정상인지, 과열 시 어떻게 해결하는지 정리해드립니다.
      </P>

      <H2>GPU 온도 기준표</H2>
      <Table
        headers={['온도 범위', '상태', '해설']}
        rows={[
          ['~30°C', '대기 상태', '정상. PC 켜두고 아무 것도 안 할 때'],
          ['40~65°C', '가벼운 작업 / 고사양 게임', '정상 범위. 걱정 불필요'],
          ['65~80°C', '풀로드 게임', '대부분의 GPU가 이 범위에서 동작. 정상'],
          ['80~90°C', '고부하 지속', '정상이지만 통풍 개선 권장'],
          ['90°C 이상', '과열 위험', '스로틀링 발생. 즉시 원인 파악 필요'],
          ['100°C+', '위험 과열', '게임이 강제 종료되거나 PC가 꺼질 수 있음'],
        ]}
      />
      <Callout type="info">
        NVIDIA RTX 시리즈는 기본적으로 83°C를 목표 온도로 설계됩니다. 83°C 내외는 정상 동작 범위입니다.
      </Callout>

      <H2>GPU 온도 확인 방법</H2>
      <H3>무료 소프트웨어로 확인하기</H3>
      <UL>
        <li><strong className="text-white">MSI Afterburner:</strong> 가장 많이 쓰는 GPU 모니터링 툴. 게임 중 오버레이로 실시간 온도 확인 가능</li>
        <li><strong className="text-white">HWiNFO64:</strong> CPU·GPU·SSD 온도를 한눈에 확인. 상세한 수치 모니터링 필요 시 추천</li>
        <li><strong className="text-white">GPU-Z:</strong> GPU 전용 정보 툴. 센서 탭에서 실시간 온도·클럭·전력 확인 가능</li>
      </UL>

      <H2>GPU 과열의 주요 원인</H2>
      <H3>1. 먼지 쌓임 (가장 흔한 원인)</H3>
      <P>
        GPU 팬과 히트싱크에 먼지가 쌓이면 냉각 효율이 급격히 떨어집니다.
        6개월~1년에 한 번 케이스를 열고 압축 에어로 먼지를 제거해야 합니다.
        먼지 청소만으로 온도가 10~15°C 내려가는 경우가 흔합니다.
      </P>
      <H3>2. 케이스 내부 통풍 불량</H3>
      <P>
        케이스 팬이 없거나 방향이 잘못 설정되면 GPU에서 발생한 열이 빠져나가지 못합니다.
        전면 흡기 → 후면/상단 배기 방향으로 팬을 설정하세요.
      </P>
      <H3>3. 열 전도체(써멀 패드·그리스) 노화</H3>
      <P>
        GPU 구매 후 3~5년이 지났다면 써멀 그리스가 굳어 냉각 효율이 떨어질 수 있습니다.
        직접 교체가 어렵다면 AS 센터를 이용하세요.
      </P>
      <H3>4. 팬 고장 또는 팬 정지 설계</H3>
      <P>
        많은 GPU가 50~60°C 이하에서는 팬을 멈추는 Semi-Fanless 설계를 채택합니다. 대기 상태에서 팬이 안 도는 건 정상입니다.
        하지만 게임 중에도 팬이 안 돈다면 고장일 수 있으니 확인이 필요합니다.
      </P>

      <H2>과열 해결 방법</H2>
      <UL>
        <li><strong className="text-white">단기:</strong> MSI Afterburner로 팬 커브를 공격적으로 조정 (60°C 시 팬 80%)</li>
        <li><strong className="text-white">중기:</strong> 케이스 먼지 청소, 케이스 팬 추가</li>
        <li><strong className="text-white">장기:</strong> 써멀 그리스 교체, 더 큰 케이스로 교체</li>
      </UL>
      <Callout type="tip">
        게임 중 GPU 온도가 90°C를 넘는다면 먼저 케이스 뚜껑을 열고 온도 변화를 확인해보세요. 뚜껑을 여니 온도가 10°C 내려간다면 케이스 통풍 개선이 핵심입니다.
      </Callout>

      <H2>파워리밋(Power Limit) 낮추기</H2>
      <P>
        온도를 빠르게 낮추는 방법 중 하나는 GPU의 Power Limit을 낮추는 것입니다.
        MSI Afterburner에서 Power Limit을 80~90%로 낮추면 성능이 약간 감소하지만 온도가 크게 줄어듭니다.
        소형 케이스나 여름철 고온 환경에서 유용한 임시 방편입니다.
      </P>

      <ToolCTA href="/diagnose" label="내 PC 성능과 부품 상태 지금 진단하기" />
    </ArticleLayout>
  );
}
