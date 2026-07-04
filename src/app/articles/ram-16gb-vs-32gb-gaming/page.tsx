import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'RAM 16GB vs 32GB — 게임에서 차이 나나? 업그레이드 가이드 | 견적도사',
  description: 'RAM 16GB와 32GB의 게임 성능 차이, 실제로 32GB가 필요한 상황인지 판단하는 방법을 알려드립니다.',
  keywords: ['RAM 16GB vs 32GB', 'RAM 업그레이드', '게임 RAM 용량', '메모리 업그레이드'],
  alternates: { canonical: `${SITE.url}/articles/ram-16gb-vs-32gb-gaming/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="RAM 16GB vs 32GB: 게임에서 차이 나나? 업그레이드 가이드"
      description="언제 32GB가 필요한지, 16GB로 충분한지 실제 게임 기준으로 정리"
      publishedAt="2026-07-02"
      tags={['RAM', '메모리', 'PC 업그레이드']}
    >
      <P>
        "게임하려면 RAM이 몇 GB면 되나요?" 가장 많이 받는 질문 중 하나입니다.
        16GB면 충분하다는 말도 있고, 32GB는 있어야 한다는 말도 있습니다.
        실제 데이터와 게임별 사용량을 바탕으로 정리해드립니다.
      </P>

      <H2>2026년 기준 게임별 RAM 사용량</H2>
      <Table
        headers={['게임', 'RAM 사용량 (게임 중 최대)', '8GB 충분?', '16GB 충분?']}
        rows={[
          ['리그 오브 레전드', '약 3~4GB', '✅', '✅'],
          ['배틀그라운드 (PUBG)', '약 8~10GB', '❌ (스왑 발생)', '✅'],
          ['사이버펑크 2077', '약 10~14GB', '❌', '✅ (여유 적음)'],
          ['호라이즌 포비든 웨스트', '약 12~16GB', '❌', '⚠️ (아슬아슬)'],
          ['콜 오브 듀티: 워존', '약 10~14GB', '❌', '✅'],
          ['Marvel Rivals', '약 8~10GB', '❌', '✅'],
          ['크롬 탭 10개 + 배그 동시', '약 12~16GB', '❌', '⚠️'],
        ]}
      />
      <Callout type="info">
        RAM 사용량은 설정, 해상도, 백그라운드 프로그램 수에 따라 달라집니다. 위 수치는 일반적인 중~고옵션 기준입니다.
      </Callout>

      <H2>8GB RAM — 2026년엔 부족합니다</H2>
      <P>
        솔직히 말씀드리면, 8GB RAM으로는 2026년 최신 게임들을 원활하게 즐기기 어렵습니다.
        배틀그라운드만 해도 게임 단독으로 8~10GB를 씁니다.
        디스코드, 크롬, OBS 같은 백그라운드 프로그램을 같이 켜면 메모리가 부족해 SSD 스왑이 발생하고, 이는 심각한 버벅임으로 이어집니다.
        <strong className="text-white">8GB → 16GB 업그레이드는 게임 쾌적함에 가장 체감 효과가 큰 업그레이드</strong>입니다.
      </P>

      <H2>16GB RAM — 대부분의 게이머에게 충분</H2>
      <P>
        16GB는 2026년 현재 게임 전용 PC의 적정 용량입니다.
        배틀그라운드, 사이버펑크 2077, 콜오브듀티 등 대부분의 게임을 여유 있게 돌릴 수 있고,
        크롬 탭 몇 개 + 디스코드 정도의 백그라운드 실행은 문제없습니다.
      </P>
      <Callout type="tip">
        16GB를 구성할 때는 8GB×2 듀얼채널 구성을 선택하세요. 16GB×1 단일 채널보다 듀얼채널이 성능이 약 5~15% 더 높습니다.
      </Callout>

      <H2>32GB RAM — 이런 사람에게 필요합니다</H2>
      <H3>32GB가 유의미한 경우</H3>
      <UL>
        <li>게임 + 방송(OBS) + 크롬 탭 많이 동시 사용</li>
        <li>게임하면서 영상 렌더링·편집 동시 작업</li>
        <li>포토샵, 어도비 프리미어 같은 고용량 프로그램 병행</li>
        <li>가상 머신(VM) 운영</li>
        <li>향후 3~5년 업그레이드 없이 쓰겠다는 미래 대비</li>
      </UL>
      <H3>32GB가 낭비인 경우</H3>
      <UL>
        <li>게임만 한다</li>
        <li>크롬 탭을 5개 이하로 쓴다</li>
        <li>스트리밍을 하지 않는다</li>
      </UL>

      <H2>RAM 업그레이드 비용 대비 효과</H2>
      <Table
        headers={['업그레이드', '비용 (대략)', '게임 효과', '추천도']}
        rows={[
          ['8GB → 16GB', '3~5만원', '버벅임 해소, 체감 큼', '⭐⭐⭐⭐⭐'],
          ['16GB → 32GB', '5~8만원', '게임만이라면 거의 없음', '⭐⭐ (특수 목적만)'],
          ['DDR4 → DDR5', '플랫폼 교체 필요', '게임 5% 미만', '⭐ (신규 조립에만)'],
        ]}
      />

      <ToolCTA href="/diagnose" label="내 PC에서 RAM이 병목인지 진단하기" />
    </ArticleLayout>
  );
}
