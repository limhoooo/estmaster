import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '배틀그라운드(PUBG) PC 사양 총정리 2026 — 60fps 구현 필요 사양 | 견적도사',
  description: '배틀그라운드 최소·권장 사양과 60fps·144fps 목표별 필요 CPU·GPU를 총정리합니다. 내 PC로 배그가 원활하게 돌아가는지 확인해보세요.',
  keywords: ['배틀그라운드 권장사양', '배그 PC 사양', 'PUBG 사양', '배틀그라운드 60fps 사양', '배그 그래픽카드 추천'],
  alternates: { canonical: `${SITE.url}/articles/battlegrounds-pc-requirements` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="배틀그라운드(PUBG) PC 사양 총정리 — 60fps 구현하려면?"
      description="배그 최소·권장 사양과 FPS 목표별 필요 사양을 총정리합니다."
      publishedAt="2026-06-24"
      tags={['게임 사양', '배틀그라운드', 'PUBG']}
    >
      <P>
        배틀그라운드(PUBG)는 국내에서 가장 많이 플레이되는 게임 중 하나입니다. 하지만 특유의 최적화 이슈로
        사양을 높여도 기대만큼 성능이 나오지 않는 경우가 많습니다. 실제로 어떤 사양이 필요한지 정리해보겠습니다.
      </P>

      <H2>공식 최소·권장 사양 (게임사 기준, 1080p)</H2>
      <Table
        headers={['항목', '최소 사양', '권장 사양']}
        rows={[
          ['CPU', 'Intel i5-4690K', 'Intel i7-8700K'],
          ['GPU', 'NVIDIA GTX 970', 'NVIDIA GTX 1060'],
          ['RAM', '8GB', '16GB'],
          ['저장공간', '30GB SSD', '50GB SSD'],
          ['운영체제', 'Windows 10 64bit', 'Windows 10 64bit'],
        ]}
      />
      <Callout type="warn">
        공식 권장 사양은 2016~2017년 기준입니다. 현재 업데이트된 그래픽 품질에서 원활하게 즐기려면 더 높은 사양이 필요합니다.
      </Callout>

      <H2>실제 FPS 목표별 권장 사양 (2026 현재 기준)</H2>

      <H3>1080p / 60fps 목표 — 캐주얼 플레이어</H3>
      <Table
        headers={['부품', '추천 사양', '비고']}
        rows={[
          ['CPU', 'i5-8600K / Ryzen 5 3600 이상', '최소 6코어 권장'],
          ['GPU', 'GTX 1060 6GB / RX 580 이상', '중간 옵션 기준'],
          ['RAM', '16GB', '필수'],
        ]}
      />

      <H3>1080p / 120~144fps 목표 — 경쟁 지향</H3>
      <Table
        headers={['부품', '추천 사양', '비고']}
        rows={[
          ['CPU', 'i5-13400F / Ryzen 5 5600 이상', '단일 코어 성능 중요'],
          ['GPU', 'RTX 3060 / RX 6600 이상', '낮은 옵션 설정 가능'],
          ['RAM', '16GB (듀얼채널)', '듀얼채널 필수'],
        ]}
      />

      <H3>1440p / 60~100fps 목표</H3>
      <Table
        headers={['부품', '추천 사양', '비고']}
        rows={[
          ['CPU', 'i7-12700K / Ryzen 7 5800X 이상', ''],
          ['GPU', 'RTX 4060 Ti / RX 6700 XT 이상', ''],
          ['RAM', '16~32GB', ''],
        ]}
      />

      <H2>배틀그라운드 CPU 선택 팁</H2>
      <P>
        배틀그라운드는 특히 <strong className="text-white">CPU 의존도가 높은 게임</strong>입니다.
        GPU가 좋아도 CPU가 약하면 프레임이 크게 떨어집니다.
        경쟁 지향 플레이어라면 CPU 업그레이드를 GPU보다 먼저 고려하세요.
      </P>
      <UL>
        <li>낮은 그래픽 설정에서도 GPU보다 CPU가 더 많은 영향을 미침</li>
        <li>6코어 이상 CPU 권장 (i5-8600K, Ryzen 5 5600 등)</li>
        <li>고주사율(144Hz+) 모니터라면 CPU가 프레임을 좌우</li>
      </UL>

      <H2>배틀그라운드 그래픽 설정 최적화 팁</H2>
      <UL>
        <li><strong className="text-white">렌더링 스케일:</strong> 100% 유지 (낮추면 화질 저하 심함)</li>
        <li><strong className="text-white">시야 거리:</strong> 울트라 (저사양에서는 낮음)</li>
        <li><strong className="text-white">그림자:</strong> 낮음~보통 (GPU 부하 최소화)</li>
        <li><strong className="text-white">후처리:</strong> 낮음 (성능 향상 체감 큼)</li>
        <li><strong className="text-white">질감:</strong> 중간~높음 (VRAM 여유 있으면 높음)</li>
      </UL>

      <Callout type="tip">
        144Hz 이상 모니터를 사용 중이라면 그래픽 설정을 과감히 낮추고 프레임을 높이는 전략이 유리합니다.
      </Callout>

      <H2>내 PC로 배그 얼마나 잘 돌아갈까?</H2>
      <P>
        현재 내 PC 사양을 입력하면 배틀그라운드 실행 등급(원활/버벅임/어려움)을 즉시 확인할 수 있습니다.
      </P>

      <ToolCTA href="/" label="내 PC로 배틀그라운드 실행 등급 확인하기" />
    </ArticleLayout>
  );
}
