import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '리그 오브 레전드(롤) PC 사양 — 144fps 구현하려면? | 견적도사',
  description: '롤 최소·권장 사양과 60fps·144fps·240fps 목표별 필요 CPU·GPU를 정리합니다. 저사양 PC에서도 할 수 있는 최적화 팁 포함.',
  keywords: ['롤 PC 사양', '리그 오브 레전드 사양', '롤 144fps', '롤 저사양 최적화'],
  alternates: { canonical: `${SITE.url}/articles/lol-pc-requirements/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="리그 오브 레전드(롤) PC 사양 — 144fps 내려면 얼마짜리 PC?"
      description="롤 60fps·144fps·240fps 목표별 PC 사양과 저사양 최적화 팁"
      publishedAt="2026-07-02"
      tags={['게임 사양', '리그 오브 레전드', 'e스포츠']}
    >
      <P>
        리그 오브 레전드는 오래된 PC에서도 돌아가는 가벼운 게임으로 알려져 있지만,
        144fps 이상 고주사율을 노린다면 생각보다 CPU 성능이 중요합니다.
        목표 fps별로 필요한 사양을 정리해드립니다.
      </P>
      <Callout type="info">
        아래 수치는 1080p 기준이며, 라이엇 공식 권장 사양과 실제 유저 체감을 종합한 수치입니다.
      </Callout>

      <H2>공식 최소·권장 사양</H2>
      <Table
        headers={['항목', '최소 사양', '권장 사양']}
        rows={[
          ['CPU', '2코어 이상 2GHz', '3코어 이상 3GHz (i5-3세대 수준)'],
          ['GPU', 'Shader 3.0 이상 (GTX 400 급)', 'NVIDIA GeForce 560 이상'],
          ['RAM', '2GB', '4GB 이상'],
          ['저장장치', '16GB 여유 공간', 'SSD 권장'],
          ['목표 fps', '30fps 이상', '60fps 이상'],
        ]}
      />
      <P>
        공식 최소 사양은 정말 "돌아가는" 수준입니다. 실제로 쾌적하게 플레이하려면 권장 사양보다 높은 스펙이 필요합니다.
      </P>

      <H2>fps 목표별 실제 필요 사양 (2026년 기준)</H2>
      <Table
        headers={['목표 fps', '필요 CPU', '필요 GPU', '예상 PC 비용']}
        rows={[
          ['30~60fps', 'i3-10세대 / 라이젠 3 3300X', '내장 그래픽 or GTX 1050', '중고 20만원 내외'],
          ['60fps 안정', 'i5-10400 / 라이젠 5 3600', 'GTX 1650 이상', '중고 30~40만원대'],
          ['144fps', 'i5-12400 / 라이젠 5 5600', 'GTX 1660 / RTX 3060', '50~70만원대'],
          ['240fps', 'i7-12700 / 라이젠 7 5800X3D', 'RTX 3070 이상', '100만원 이상'],
        ]}
      />
      <Callout type="tip">
        롤은 GPU보다 CPU 영향이 큽니다. 144fps 이상을 원한다면 GPU보다 CPU에 더 투자하는 게 효율적입니다.
      </Callout>

      <H2>저사양 PC 최적화 팁</H2>
      <H3>1. 그래픽 설정 낮추기</H3>
      <P>
        환경 품질, 캐릭터 품질을 낮음으로 설정하세요. 이펙트 품질을 낮추면 팀파이트 중 fps 하락을 크게 줄일 수 있습니다.
        그림자는 끄거나 최저로 설정하면 CPU 부하가 눈에 띄게 줄어듭니다.
      </P>
      <H3>2. 프레임 제한 설정</H3>
      <P>
        모니터 주사율보다 높은 fps로 게임을 돌리는 것은 GPU 온도만 높이고 실제 체감 이득이 없습니다.
        60Hz 모니터라면 fps를 60으로 제한하세요. 오히려 더 안정적인 플레이가 가능합니다.
      </P>
      <H3>3. 백그라운드 프로그램 종료</H3>
      <P>
        크롬, Discord 음악봇, Windows 업데이트 등 백그라운드 프로그램이 롤 성능을 크게 깎습니다.
        게임 중에는 불필요한 프로그램을 종료하세요. RAM이 적은 PC(8GB 이하)일수록 효과가 큽니다.
      </P>
      <H3>4. 전원 옵션 변경</H3>
      <P>
        Windows 전원 계획을 "고성능"으로 변경하세요. 균형 조정 모드에서는 CPU 클럭이 절전을 위해 낮아질 수 있습니다.
        제어판 → 전원 옵션 → 고성능 선택.
      </P>
      <H3>5. SSD 사용</H3>
      <P>
        HDD를 사용 중이라면 롤 게임 파일을 SSD로 이전하거나 SSD로 교체하세요.
        로딩 시간이 크게 줄고, 게임 중 텍스처 로딩 지연도 감소합니다.
      </P>

      <H2>내장 그래픽으로 롤이 되나요?</H2>
      <P>
        인텔 UHD 내장 그래픽이나 AMD Radeon 내장 그래픽으로도 롤은 실행됩니다.
        단, 그래픽 설정을 최저로 낮춰야 하고 30~60fps 정도만 기대할 수 있습니다.
        144fps 이상은 별도 GPU 없이는 내장 그래픽으로 불가능합니다.
      </P>

      <ToolCTA href="/diagnose" label="내 PC로 롤 144fps 가능한지 진단하기" />
    </ArticleLayout>
  );
}
