import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'GTX 1060 아직 쓰고 있다면 — 2026년 업그레이드 타이밍 분석 | 견적도사',
  description: 'GTX 1060이 2026년에도 쓸 만한지, 업그레이드한다면 어떤 GPU로 가야 할지 분석합니다.',
  keywords: ['GTX 1060 업그레이드', 'GTX 1060 2026', 'GTX 1060 교체', '그래픽카드 업그레이드'],
  alternates: { canonical: `${SITE.url}/articles/gtx-1060-upgrade-2026/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="GTX 1060 아직 쓰고 있다면 — 2026년 업그레이드 타이밍 분석"
      description="GTX 1060으로 2026년 게임이 되는지, 어떤 GPU로 업그레이드해야 하는지"
      publishedAt="2026-07-02"
      tags={['GPU 업그레이드', 'GTX 1060', '업그레이드 가이드']}
    >
      <P>
        GTX 1060은 2016년 출시 이후 10년 가까이 수많은 게이머의 손에 남아 있는 GPU입니다.
        2026년 현재에도 쓸 만한지, 혹시 교체를 고민 중이라면 어떤 선택지가 있는지 솔직하게 정리해드립니다.
      </P>

      <H2>GTX 1060의 현재 위치</H2>
      <Table
        headers={['항목', 'GTX 1060 6GB', '비교 대상: RTX 3060']}
        rows={[
          ['PassMark 점수', '약 8,600점', '약 19,000점 (+121%)'],
          ['VRAM', '6GB', '12GB'],
          ['레이트레이싱', '미지원', '지원'],
          ['DLSS', '미지원', 'DLSS 2.0 지원'],
          ['DirectX', 'DX12 (제한적)', 'DX12 Ultimate'],
          ['예상 시장가 (중고)', '약 5~8만원', '약 25~30만원'],
        ]}
      />

      <H2>GTX 1060으로 2026년 게임이 되나?</H2>
      <H3>여전히 되는 것들</H3>
      <UL>
        <li>리그 오브 레전드, 발로란트, 오버워치 2 — 1080p 60fps 이상 가능</li>
        <li>배틀그라운드 — 1080p 낮음~중간 옵션 30~60fps</li>
        <li>구형 타이틀 (GTA V, 다크소울 3 등) — 1080p 중간 옵션 60fps</li>
      </UL>
      <H3>더 이상 버거운 것들</H3>
      <UL>
        <li>사이버펑크 2077 — 1080p 낮음 옵션 30fps 간신히</li>
        <li>호라이즌 포비든 웨스트 — 최소 사양 간신히 충족</li>
        <li>콜 오브 듀티: 워존 — 1080p에서 옵션 최저도 버벅임 발생 가능</li>
        <li>2024~2026년 출시 최신 AAA 타이틀 대부분</li>
      </UL>
      <Callout type="warn">
        GTX 1060은 VRAM이 6GB로, 최신 게임들이 요구하는 8GB에 미치지 못합니다. 이로 인해 텍스처 팝업, 프레임 드롭이 발생하는 게임이 늘고 있습니다.
      </Callout>

      <H2>업그레이드 해야 할 타이밍인지 체크리스트</H2>
      <UL>
        <li>즐기고 싶은 신작 게임이 최소 사양을 못 넘는다 → <strong className="text-white">업그레이드 시점</strong></li>
        <li>게임 중 갑자기 fps가 뚝뚝 떨어지는 현상이 잦다 → <strong className="text-white">VRAM 부족 신호</strong></li>
        <li>e스포츠 게임(롤·발로란트)만 주로 한다 → <strong className="text-white">아직 버팀 가능</strong></li>
        <li>1440p 모니터 구매를 고려하고 있다 → <strong className="text-white">GTX 1060은 1440p에 역부족</strong></li>
      </UL>

      <H2>GTX 1060에서 업그레이드 추천 경로</H2>
      <Table
        headers={['예산', '추천 GPU', '성능 향상', '특징']}
        rows={[
          ['10~15만원', 'RTX 2060 (중고)', '+약 60%', '레이트레이싱 입문, VRAM 6GB (부족할 수 있음)'],
          ['15~25만원', 'RTX 3060 (중고)', '+약 120%', 'VRAM 12GB, 가장 균형 잡힌 업그레이드'],
          ['25~35만원', 'RX 7600 / RTX 4060', '+약 90~100%', '최신 아키텍처, 새 제품 보증'],
          ['40만원 이상', 'RTX 4060 Ti / RX 7700 XT', '+약 130%', '1440p 도전 가능'],
        ]}
      />
      <Callout type="tip">
        중고 RTX 3060이 가장 가성비 좋은 업그레이드 경로입니다. VRAM 12GB로 당분간 VRAM 부족 걱정이 없고, 성능도 두 배 이상 향상됩니다.
      </Callout>

      <H2>CPU가 발목을 잡을 수 있습니다</H2>
      <P>
        GTX 1060을 쓰고 있던 PC라면 CPU도 구형일 가능성이 높습니다.
        i5-6세대, 라이젠 1세대 수준의 CPU라면 GPU를 업그레이드해도 CPU 병목으로 성능이 제한됩니다.
        업그레이드 전에 반드시 CPU 상태도 확인하세요.
      </P>

      <ToolCTA href="/diagnose" label="내 PC 어디를 먼저 업그레이드해야 할지 진단하기" />
    </ArticleLayout>
  );
}
