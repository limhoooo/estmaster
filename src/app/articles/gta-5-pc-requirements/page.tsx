import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'GTA V PC 사양 총정리 — 2026년에도 최고 옵션 60fps 가능할까?',
  description: 'GTA V 최소·권장 사양과 60fps·144fps 목표별 필요 CPU·GPU를 정리합니다. 출시 10년이 지난 지금 기준 실제 요구 사양.',
  keywords: ['GTA V PC 사양', 'GTA5 권장사양', 'GTA5 최적화', 'GTA5 60fps'],
  alternates: { canonical: `${SITE.url}/articles/gta-5-pc-requirements/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="GTA V PC 사양 총정리 — 2026년에도 최고 옵션 60fps 가능할까?"
      description="출시 10년이 지난 GTA V, 지금 기준으로 얼마짜리 PC면 최고 옵션이 될까?"
      publishedAt="2026-07-04"
      tags={['게임 사양', 'GTA V', 'PC 최적화']}
    >
      <P>
        GTA V는 2013년 출시된 게임이지만 지속적인 온라인 업데이트로 여전히 많은 인원이 즐기고 있습니다.
        오래된 게임이라 사양 부담이 적을 것 같지만, 최고 옵션 + 높은 fps를 노린다면 생각보다 사양이 필요합니다.
      </P>
      <Callout type="info">
        아래 수치는 <strong>1080p 기준</strong>입니다. GTA V는 온라인 모드에서 최적화가 낮아지는 경향이 있어 싱글플레이 기준과 차이가 날 수 있습니다.
      </Callout>

      <H2>공식 최소·권장 사양</H2>
      <Table
        headers={['항목', '최소 사양', '권장 사양']}
        rows={[
          ['CPU', 'i5-3570K / 라이젠 3세대급', 'i5-8600K / 라이젠 5 2600'],
          ['GPU', 'GTX 780 / RX 470급', 'GTX 1060 / RX 580'],
          ['RAM', '8GB', '16GB'],
          ['저장장치', '72GB 여유 공간', 'SSD 권장'],
          ['목표 fps', '30fps 이상', '60fps'],
        ]}
      />

      <H2>목표 fps별 실제 필요 사양 (2026년 기준)</H2>
      <Table
        headers={['목표', '필요 GPU', '필요 CPU', '예상 PC 비용']}
        rows={[
          ['1080p 60fps 최고옵', 'GTX 1060 / RX 580 이상', 'i5-8400 이상', '중고 25만원대'],
          ['1080p 144fps 최고옵', 'RTX 3060 이상', 'i5-12400 이상', '50만원대'],
          ['1440p 60fps 최고옵', 'RTX 4060 이상', 'i5-12400 이상', '60~70만원대'],
        ]}
      />
      <Callout type="tip">
        GTA V는 오래된 게임이라 최신 GPU에서는 최고 옵션으로도 부담이 거의 없습니다. 오히려 온라인 모드의 CPU 부하가 병목이 되는 경우가 많습니다.
      </Callout>

      <H2>온라인 모드가 유독 무거운 이유</H2>
      <P>
        GTA 온라인은 오랜 기간 콘텐츠가 누적되면서 로딩 시간과 백그라운드 연산 부하가 커졌습니다.
        같은 사양이라도 싱글플레이보다 온라인 모드에서 fps가 더 낮게 나오는 경우가 흔합니다.
        <strong className="text-white"> SSD 사용은 온라인 모드 로딩 시간 단축에 특히 효과적</strong>입니다.
      </P>

      <H2>구형 PC로도 될까?</H2>
      <UL>
        <li>GTX 780 / GTX 970 이상: 저~중옵션 30~60fps 가능</li>
        <li>GTX 1060 이상: 최고 옵션 1080p 60fps 안정</li>
        <li>RTX 3060 이상: 1080p 144fps 또는 1440p 60fps 여유</li>
      </UL>
      <Callout type="warn">
        오래된 게임이라고 무조건 저사양에서 잘 돌아가는 건 아닙니다. 온라인 모드를 자주 즐긴다면 최소 GTX 1060급 이상을 권장합니다.
      </Callout>

      <ToolCTA href="/diagnose" label="내 PC로 GTA V 최고 옵션 가능한지 진단하기" />
    </ArticleLayout>
  );
}
