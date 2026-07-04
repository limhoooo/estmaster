import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '오버워치 2 PC 사양 총정리 — 144fps 경쟁전 대비하려면?',
  description: '오버워치 2 최소·권장 사양과 60fps·144fps 목표별 필요 CPU·GPU를 정리합니다. 저사양 최적화 팁 포함.',
  keywords: ['오버워치 2 PC 사양', '오버워치 2 권장사양', '오버워치 2 144fps', '오버워치 2 최적화'],
  alternates: { canonical: `${SITE.url}/articles/overwatch2-pc-requirements/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="오버워치 2 PC 사양 총정리 — 144fps 경쟁전 대비하려면?"
      description="60fps·144fps 목표별 PC 사양과 경쟁전에서 유리한 프레임 설정 팁"
      publishedAt="2026-07-03"
      tags={['게임 사양', '오버워치 2', 'e스포츠']}
    >
      <P>
        오버워치 2는 가벼운 최적화로 유명하지만, 경쟁전에서 유리한 고fps를 노린다면 이야기가 다릅니다.
        목표 fps별로 필요한 사양을 정리하고, 저사양에서도 경쟁력을 높이는 설정 팁을 알려드립니다.
      </P>
      <Callout type="info">
        아래 수치는 1080p 기준이며, 블리자드 공식 권장 사양과 실제 유저 체감을 종합한 수치입니다.
      </Callout>

      <H2>공식 최소·권장 사양</H2>
      <Table
        headers={['항목', '최소 사양', '권장 사양']}
        rows={[
          ['CPU', 'i3-6100 / FX-8100', 'i7-8700K / 라이젠 5 3600'],
          ['GPU', 'GTX 600 / RX 500 계열', 'GTX 1080 이상'],
          ['RAM', '8GB', '8GB 이상'],
          ['저장장치', '50GB 여유 공간', 'SSD 권장'],
          ['목표 fps', '30fps 이상', '60fps 이상'],
        ]}
      />

      <H2>fps 목표별 실제 필요 사양 (2026년 기준)</H2>
      <Table
        headers={['목표 fps', '필요 CPU', '필요 GPU', '예상 PC 비용']}
        rows={[
          ['60fps 안정', 'i5-4690K / 라이젠 5 3600', 'GTX 970 이상', '중고 20~30만원대'],
          ['144fps', 'i5-8600K / 라이젠 5 5600', 'GTX 1080 / RTX 2060', '40~50만원대'],
          ['240fps', 'i7-8700K 이상', 'RTX 3060 이상', '60만원대 이상'],
        ]}
      />
      <Callout type="tip">
        오버워치 2는 대전 액션 게임 특성상 CPU 싱글스레드 성능이 중요합니다. GPU만 좋은 것보다 CPU와 균형 있게 맞추는 게 효율적입니다.
      </Callout>

      <H2>경쟁전에서 유리한 설정 팁</H2>
      <H3>1. 렌더 스케일 낮추기</H3>
      <P>
        해상도를 낮추지 않고도 렌더 스케일(Render Scale)만 90%로 낮추면 화질 저하는 적으면서 fps는 눈에 띄게 오릅니다.
        경쟁전에서 프레임 안정성이 중요하다면 추천하는 설정입니다.
      </P>
      <H3>2. 반사·그림자 품질 낮춤</H3>
      <P>
        반사와 그림자 품질은 시각 효과 대비 fps 소모가 큰 옵션입니다. 낮음으로 설정해도 적 식별에는 문제 없습니다.
      </P>
      <H3>3. 프레임 제한 해제</H3>
      <P>
        144Hz 이상 모니터를 사용한다면 프레임 제한을 반드시 해제하세요. 기본값이 60fps로 제한되어 있는 경우가 있습니다.
      </P>

      <H2>내 PC로 돌릴 수 있을까?</H2>
      <UL>
        <li>GTX 970 이상: 1080p 60fps 안정</li>
        <li>GTX 1080 / RTX 2060 이상: 144fps 목표 가능</li>
        <li>RTX 3060 이상: 240fps 도전 가능</li>
      </UL>

      <ToolCTA href="/diagnose" label="내 PC로 오버워치 2 144fps 가능한지 진단하기" />
    </ArticleLayout>
  );
}
