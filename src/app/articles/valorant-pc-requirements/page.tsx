import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '발로란트 PC 사양 — 240fps 프로 세팅까지 총정리',
  description: '발로란트 최소·권장 사양과 144fps·240fps 목표별 필요 CPU·GPU를 정리합니다. 저사양 최적화 팁 포함.',
  keywords: ['발로란트 PC 사양', '발로란트 권장사양', '발로란트 240fps', '발로란트 최적화'],
  alternates: { canonical: `${SITE.url}/articles/valorant-pc-requirements/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="발로란트 PC 사양 — 240fps 프로 세팅까지 총정리"
      description="발로란트는 가벼운 게임이지만 고fps 경쟁전을 노린다면 사양이 중요합니다"
      publishedAt="2026-07-04"
      tags={['게임 사양', '발로란트', 'e스포츠']}
    >
      <P>
        발로란트는 라이엇 게임즈가 저사양 PC에서도 원활히 돌아가도록 설계한 게임입니다.
        하지만 프로 선수들이 사용하는 240fps 이상 고주사율 세팅을 노린다면 이야기가 달라집니다.
        목표 fps별로 필요한 사양을 정리해드립니다.
      </P>
      <Callout type="info">
        아래 수치는 1080p 기준이며, 라이엇 공식 권장 사양과 실제 유저 체감을 종합한 수치입니다.
      </Callout>

      <H2>공식 최소·권장 사양</H2>
      <Table
        headers={['항목', '최소 사양', '권장 사양']}
        rows={[
          ['CPU', '2코어 이상 (i3-4150급)', 'i5-3570K 이상'],
          ['GPU', 'Intel HD 4000급', 'GTX 970 이상'],
          ['RAM', '4GB', '4GB 이상'],
          ['저장장치', '수 GB 여유 공간', 'SSD 권장'],
          ['목표 fps', '30fps 이상', '60fps 이상'],
        ]}
      />
      <P>
        공식 사양만 보면 매우 낮지만, 이건 "실행되는" 수준입니다. 경쟁전에서 유리한 고fps를 원한다면 훨씬 높은 사양이 필요합니다.
      </P>

      <H2>fps 목표별 실제 필요 사양 (2026년 기준)</H2>
      <Table
        headers={['목표 fps', '필요 CPU', '필요 GPU', '예상 PC 비용']}
        rows={[
          ['144fps 안정', 'i5-4690K / 라이젠 5 3600', 'GTX 970 이상', '중고 20~30만원대'],
          ['240fps', 'i5-8600K / 라이젠 5 5600', 'GTX 1660 이상', '40~50만원대'],
          ['360fps+ (프로 세팅)', 'i5-12400 이상', 'RTX 3060 이상', '60만원대 이상'],
        ]}
      />
      <Callout type="tip">
        발로란트는 CPU 싱글스레드 성능에 크게 의존하는 게임입니다. 프로 선수 다수가 고클럭 CPU에 중급 GPU를 조합하는 이유입니다.
      </Callout>

      <H2>프로 선수들은 어떤 세팅을 쓸까?</H2>
      <P>
        많은 프로 선수들이 360Hz 모니터와 함께 <strong className="text-white">고클럭 CPU + 중급 GPU</strong> 조합을 사용합니다.
        발로란트는 그래픽 옵션을 낮게 설정해도 시각적으로 크게 불리하지 않아, GPU보다 CPU와 모니터 주사율에 투자하는 경향이 강합니다.
      </P>

      <H2>저사양 PC 최적화 팁</H2>
      <H3>1. 그래픽 품질 최소로</H3>
      <P>
        재질 품질, 디테일 품질을 낮음으로 설정하세요. 발로란트는 옵션을 낮춰도 적 식별에 불리하지 않도록 설계되어 있습니다.
      </P>
      <H3>2. 안티에일리어싱 끄기</H3>
      <P>
        MSAA를 끄면 fps가 크게 오릅니다. 대신 화면 테두리가 다소 거칠어질 수 있습니다.
      </P>
      <H3>3. 프레임 상한 설정</H3>
      <P>
        모니터 주사율에 맞춰 프레임 상한을 설정하면 불필요한 GPU 부하 없이 안정적인 프레임을 유지할 수 있습니다.
      </P>

      <H2>내 PC로 돌릴 수 있을까?</H2>
      <UL>
        <li>내장 그래픽: 저옵션 60fps 내외 가능</li>
        <li>GTX 970 이상: 144fps 목표 가능</li>
        <li>GTX 1660 이상: 240fps 목표 가능</li>
        <li>RTX 3060 이상: 360fps 이상 프로 세팅 가능</li>
      </UL>

      <ToolCTA href="/diagnose" label="내 PC로 발로란트 몇 fps 나오는지 진단하기" />
    </ArticleLayout>
  );
}
