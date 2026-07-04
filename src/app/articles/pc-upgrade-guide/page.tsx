import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, OL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '게임 PC 업그레이드 가이드 — 30만원으로 CPU vs GPU 뭘 바꿔야 할까? | 견적도사',
  description: '30만원 예산으로 CPU를 바꿔야 할까, GPU를 바꿔야 할까? 병목 진단부터 구매까지 단계별로 설명합니다.',
  keywords: ['PC 업그레이드 가이드', 'CPU GPU 업그레이드', '게임 PC 업글', '30만원 PC 업그레이드'],
  alternates: { canonical: `${SITE.url}/articles/pc-upgrade-guide/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="게임 PC 업그레이드 가이드 — 30만원으로 뭘 바꿔야 할까?"
      description="병목 진단부터 구매까지, 30만원 예산 PC 업그레이드 단계별 가이드입니다."
      publishedAt="2026-06-24"
      tags={['업그레이드 가이드', 'PC 최적화']}
    >
      <P>
        PC를 업그레이드하고 싶은데 예산이 30만원이라면, CPU와 GPU 중 어느 것을 먼저 바꿔야 할까요?
        잘못된 선택을 하면 돈을 써도 체감 성능이 거의 개선되지 않을 수 있습니다.
        올바른 순서로 접근해야 30만원을 최대한 효율적으로 사용할 수 있습니다.
      </P>

      <H2>1단계: 내 PC의 병목부터 확인하세요</H2>
      <P>
        업그레이드 전 가장 먼저 해야 할 일은 <strong className="text-white">병목 진단</strong>입니다.
        CPU 성능이 부족한데 GPU를 바꾸면 효과가 없고, GPU가 발목을 잡는데 CPU를 바꿔도 마찬가지입니다.
      </P>
      <Callout type="tip">
        견적도사에서 현재 CPU와 GPU를 입력하면 무엇이 병목인지 즉시 알 수 있습니다.
      </Callout>
      <ToolCTA href="/" label="내 PC 병목 무료 진단하기" />

      <H2>2단계: GPU 병목이라면</H2>
      <P>
        가장 흔한 경우입니다. 고사양 게임에서 GPU 사용률이 90~100%에 달하는 반면 CPU는 50~60%에 머무는 상황이라면
        GPU 업그레이드가 답입니다.
      </P>
      <H3>30만원으로 선택할 수 있는 GPU</H3>
      <Table
        headers={['GPU', '예상 가격', '현재 대비 성능 향상']}
        rows={[
          ['RTX 4060', '약 30만원대', 'GTX 1060 대비 약 2배, GTX 1070 대비 약 70%'],
          ['RX 6700 XT', '약 22~25만원대', 'GTX 1070 대비 약 75%, 남은 예산으로 RAM 업글 가능'],
          ['RTX 3060 Ti (중고)', '약 20만원대', 'GTX 1070 대비 약 85%, 가성비 우수'],
        ]}
      />
      <Callout type="warn">
        GPU 교체 시 현재 파워 용량을 반드시 확인하세요. RTX 4060은 550W, RX 6700 XT는 650W 이상을 권장합니다.
      </Callout>

      <H2>3단계: CPU 병목이라면</H2>
      <P>
        게임 중 CPU 사용률이 80~100%이고 GPU 사용률이 50~60%에 머무는 상황이라면 CPU가 병목입니다.
        FPS 게임, 전략 게임, 오픈월드 게임에서 CPU 병목이 자주 발생합니다.
      </P>
      <H3>30만원으로 선택할 수 있는 CPU</H3>
      <Table
        headers={['CPU', '예상 가격', '주의사항']}
        rows={[
          ['i5-13600K', '약 25만원대', 'LGA1700 소켓 (기존 12세대 보드 호환)'],
          ['i5-13400F', '약 14만원대', 'LGA1700, 남은 16만원으로 다른 부품도 가능'],
          ['Ryzen 5 7600', '약 19만원대', 'AM5 소켓 — 메인보드도 교체 필요할 수 있음'],
          ['Ryzen 5 5600', '약 10만원대', 'AM4 소켓, 기존 보드 재활용 가능'],
        ]}
      />
      <Callout type="warn">
        CPU 소켓이 현재 메인보드와 다르면 메인보드도 함께 교체해야 합니다. 예산을 초과할 수 있으니 소켓 호환성을 먼저 확인하세요.
      </Callout>

      <H2>4단계: RAM도 체크하세요</H2>
      <P>
        요즘 게임들은 16GB RAM을 권장합니다. 8GB에서 16GB로 업그레이드하는 것만으로도 게임 로딩 속도와
        멀티태스킹이 크게 개선됩니다. 가격도 DDR4 16GB 기준 약 3~5만원으로 저렴합니다.
      </P>

      <H2>우선순위 정리</H2>
      <OL>
        <li><strong className="text-white">병목 진단 먼저</strong> — CPU/GPU 중 발목을 잡는 것 확인</li>
        <li><strong className="text-white">소켓/호환성 확인</strong> — CPU 교체 시 메인보드 교체 여부</li>
        <li><strong className="text-white">파워 용량 확인</strong> — GPU 교체 시 필수</li>
        <li><strong className="text-white">RAM 상태 체크</strong> — 8GB라면 16GB 업그레이드 병행 권장</li>
      </OL>

      <ToolCTA href="/" label="지금 내 PC 병목 진단하고 추천 받기" />
    </ArticleLayout>
  );
}
