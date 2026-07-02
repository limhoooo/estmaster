import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '2026년 게임용 CPU 추천 — 예산별 최선의 선택 | 견적도사',
  description: '10만원대부터 50만원대까지, 2026년 현재 게임에서 가장 가성비 좋은 CPU를 예산별로 추천합니다.',
  keywords: ['게임용 CPU 추천 2026', 'CPU 가성비', '게이밍 CPU', '라이젠 인텔 CPU 추천'],
  alternates: { canonical: `${SITE.url}/articles/best-gaming-cpu-2026` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="2026년 게임용 CPU 추천 — 예산별 최선의 선택"
      description="10만원대 가성비부터 50만원대 하이엔드까지, 지금 사야 할 CPU"
      publishedAt="2026-07-02"
      tags={['CPU 추천', '구매 가이드', '2026 최신']}
    >
      <P>
        CPU 시장은 매 분기 새 모델이 쏟아지지만, 모든 CPU가 게임에서 같은 가치를 주지는 않습니다.
        게임은 싱글스레드 성능이 핵심이며, 코어가 많다고 fps가 높아지지는 않습니다.
        2026년 기준 예산별로 진짜 가성비 CPU를 추천해드립니다.
      </P>
      <Callout type="warn">
        아래 가격은 2026년 7월 기준 대략적인 시장가입니다. 실제 구매 전에 최신 가격을 확인하세요.
      </Callout>

      <H2>예산별 CPU 추천 한눈에 보기</H2>
      <Table
        headers={['예산', '추천 CPU', '소켓', '특징']}
        rows={[
          ['10~15만원', 'i5-12400F (중고)', 'LGA1700', '가성비 끝판왕, 중고 시장 풍부'],
          ['15~20만원', 'i5-13400F', 'LGA1700', '최신 13세대, DDR4/5 모두 지원'],
          ['25~30만원', '라이젠 5 7600X', 'AM5', 'AM5 장기 수명, 전성비 우수'],
          ['30~40만원', 'i5-13600K', 'LGA1700', '코어 많아 방송·편집 병행에 유리'],
          ['40~50만원', '라이젠 7 9700X', 'AM5', '게임+작업 균형, 최신 아키텍처'],
          ['50만원 이상', 'i9-14900K / 라이젠 9 9900X', '-', '하이엔드, 방송+렌더링+게임 동시 작업'],
        ]}
      />

      <H2>10만원대: i5-12400F (중고)</H2>
      <P>
        중고 시장에서 10~15만원에 구할 수 있는 i5-12400F는 2026년에도 게임용으로 충분한 CPU입니다.
        6코어 12스레드, 싱글 성능도 뛰어나 배그·롤·발로란트 등 대부분의 게임을 무리 없이 소화합니다.
        단, 내장 그래픽이 없으므로 GPU가 반드시 있어야 합니다.
      </P>
      <Callout type="tip">
        i5-12400F + B660 보드 + DDR4 16GB 조합이 10~15만원대 CPU 구성의 최선이라 해도 과언이 아닙니다.
      </Callout>

      <H2>20만원대: 라이젠 5 7600X</H2>
      <P>
        새 제품 기준 가장 가성비가 좋은 선택입니다. AM5 플랫폼으로 향후 라이젠 8000, 9000 시리즈로 업그레이드 시
        메인보드를 교체하지 않아도 됩니다. 게임 싱글스레드 성능도 최상위권입니다.
        단, DDR5만 지원하므로 새로 맞추는 분들에게 적합합니다.
      </P>

      <H2>30~40만원대: i5-13600K</H2>
      <H3>게임만 한다면?</H3>
      <P>
        i5-13600K의 게임 성능은 라이젠 5 7600X와 큰 차이가 없습니다.
        순수 게임 목적이라면 가격 대비 메리트가 작습니다.
      </P>
      <H3>게임 + 방송/편집 병행이라면?</H3>
      <P>
        14코어 20스레드라는 압도적인 코어 수 덕에 OBS 인코딩을 돌리면서도 게임 성능 하락이 적습니다.
        스트리머, 유튜버, 영상 편집 겸용이라면 이 CPU가 30~40만원대 최선의 선택입니다.
      </P>

      <H2>CPU만 바꾸면 얼마나 빨라질까? (현실적인 기대치)</H2>
      <UL>
        <li><strong className="text-white">GPU가 병목이라면:</strong> CPU를 아무리 바꿔도 게임 fps 변화가 거의 없습니다</li>
        <li><strong className="text-white">CPU가 실제 병목이라면:</strong> 10~30% fps 향상을 기대할 수 있습니다</li>
        <li><strong className="text-white">아주 오래된 CPU (i5-4세대 이하):</strong> 업그레이드 효과가 크게 납니다</li>
      </UL>
      <Callout type="warn">
        CPU 업그레이드 전에 반드시 병목 진단을 먼저 하세요. CPU 교체 후에도 게임 fps가 그대로라면 GPU가 한계인 것입니다.
      </Callout>

      <ToolCTA href="/diagnose" label="내 CPU가 병목인지 지금 진단하기" />
    </ArticleLayout>
  );
}
