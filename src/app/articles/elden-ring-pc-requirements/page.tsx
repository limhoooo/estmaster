import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '엘든 링 PC 사양 총정리 — 60fps 안정적으로 돌리려면?',
  description: '엘든 링 최소·권장 사양과 60fps 목표별 필요 CPU·GPU를 정리합니다. 프레임 드랍 원인과 최적화 팁 포함.',
  keywords: ['엘든 링 PC 사양', '엘든 링 권장사양', '엘든 링 60fps', '엘든 링 프레임 드랍'],
  alternates: { canonical: `${SITE.url}/articles/elden-ring-pc-requirements/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="엘든 링 PC 사양 총정리 — 60fps 안정적으로 돌리려면?"
      description="최소·권장 사양과 목표 fps별 필요 사양, 고질적인 프레임 드랍 해결법까지"
      publishedAt="2026-07-03"
      tags={['게임 사양', '엘든 링', 'PC 최적화']}
    >
      <P>
        엘든 링은 출시 초기 최적화 이슈로 유명했지만, 이후 패치로 상당 부분 개선됐습니다.
        그럼에도 특정 지역(불놀이 마을, 로데일 등)에서는 여전히 프레임 드랍이 발생합니다.
        공식 사양과 실제 체감 기준을 함께 정리해드립니다.
      </P>
      <Callout type="info">
        아래 수치는 <strong>1080p 기준</strong>입니다. 엘든 링은 60fps 고정 설계라 그 이상은 모드 없이는 의미가 없습니다.
      </Callout>

      <H2>공식 최소·권장 사양</H2>
      <Table
        headers={['항목', '최소 사양', '권장 사양']}
        rows={[
          ['CPU', 'i5-8600K / 라이젠 5 3600', 'i7-8700K / 라이젠 5 3600X'],
          ['GPU', 'GTX 1060 3GB / RX 580 4GB', 'GTX 1080 / RX 2070 SUPER'],
          ['RAM', '12GB', '16GB'],
          ['저장장치', '60GB 여유 공간, SSD 권장', 'SSD 필수'],
          ['목표 fps', '30fps 이상', '60fps'],
        ]}
      />

      <H2>목표 fps별 실제 필요 사양</H2>
      <Table
        headers={['목표', '필요 GPU', '필요 CPU', '예상 PC 비용']}
        rows={[
          ['1080p 30~40fps', 'GTX 1060 / RX 580', 'i5-8400 이상', '중고 20만원대'],
          ['1080p 60fps 안정', 'GTX 1080 / RTX 2060', 'i5-10400 이상', '30~40만원대'],
          ['1080p 60fps 오픈필드 끊김 없음', 'RTX 3060 이상', 'i5-12400 이상', '50만원대 이상'],
        ]}
      />
      <Callout type="warn">
        엘든 링은 60fps 고정 게임이라 그래픽카드를 아무리 좋은 걸 써도 60fps 이상 체감 이득은 없습니다.
        예산은 "60fps를 끊김 없이 유지하는 것"에 집중하는 게 효율적입니다.
      </Callout>

      <H2>고질적인 프레임 드랍, 왜 생길까?</H2>
      <H3>1. CPU 병목이 원인인 경우가 많음</H3>
      <P>
        엘든 링은 오픈필드에서 NPC·이펙트 연산이 많아 GPU보다 <strong className="text-white">CPU 병목</strong>이 자주 발생합니다.
        GPU 사용률이 낮은데도 fps가 떨어진다면 CPU 업그레이드가 더 효과적일 수 있습니다.
      </P>
      <H3>2. 특정 구간(불놀이 마을, 로데일)</H3>
      <P>
        이 구간들은 오브젝트 밀도가 높아 상위 사양에서도 fps 드랍이 보고됩니다.
        게임 자체 최적화 이슈이므로 사양을 올려도 완전히 해결되지 않을 수 있습니다.
      </P>
      <H3>3. SSD 미사용</H3>
      <P>
        HDD 사용 시 맵 전환·순간이동 시 로딩이 길어지고, 텍스처 팝업이 심해집니다.
        SSD로 교체하면 로딩 관련 끊김이 크게 줄어듭니다.
      </P>

      <H2>내 PC로 돌릴 수 있을까?</H2>
      <UL>
        <li>GTX 1060 이상: 저옵션 30fps 안정</li>
        <li>GTX 1080 / RTX 2060 이상: 1080p 60fps 대부분 구간 안정</li>
        <li>RTX 3060 이상: 오픈필드 포함 60fps 끊김 최소화</li>
      </UL>

      <ToolCTA href="/diagnose" label="내 PC로 엘든 링 60fps 가능한지 진단하기" />
    </ArticleLayout>
  );
}
