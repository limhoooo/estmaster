import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'SSD vs HDD 게임 성능 차이 — 교체하면 얼마나 빨라질까? | 견적도사',
  description: 'SSD와 HDD의 게임 로딩 속도 차이, 실제 fps 영향, 어떤 SSD를 사야 하는지까지 정리합니다.',
  keywords: ['SSD vs HDD 게임', 'SSD 업그레이드 효과', 'NVMe SSD 추천', 'SSD 게임 로딩'],
  alternates: { canonical: `${SITE.url}/articles/ssd-vs-hdd-gaming` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="SSD vs HDD 게임 성능 차이 — 교체하면 얼마나 빨라질까?"
      description="로딩 속도부터 fps 영향, 추천 SSD까지 게이머를 위한 저장장치 가이드"
      publishedAt="2026-07-02"
      tags={['SSD', '저장장치', 'PC 업그레이드']}
    >
      <P>
        "SSD로 바꾸면 게임 fps가 올라가나요?" 자주 받는 질문입니다.
        정답은 "fps는 거의 안 오르지만, 체감 쾌적함은 크게 달라집니다."
        SSD와 HDD가 게임 경험에 어떤 차이를 만드는지 정리해드립니다.
      </P>

      <H2>SSD vs HDD 속도 비교</H2>
      <Table
        headers={['항목', 'HDD (7200rpm)', 'SATA SSD', 'NVMe SSD (M.2)']}
        rows={[
          ['순차 읽기 속도', '약 150 MB/s', '약 550 MB/s', '약 3,000~7,000 MB/s'],
          ['랜덤 읽기 (4K)', '약 1 MB/s', '약 40 MB/s', '약 50~100 MB/s'],
          ['게임 로딩 시간 (상대)', '기준 (느림)', '2~4배 빠름', '5~10배 빠름'],
          ['가격 (1TB)', '약 4~6만원', '약 8~12만원', '약 10~15만원'],
        ]}
      />
      <Callout type="info">
        NVMe SSD와 SATA SSD의 순차 읽기 차이는 크지만, 게임 로딩에서 체감 차이는 NVMe vs SATA 기준으로는 크지 않습니다. HDD → SSD 전환이 가장 큰 체감 차이를 만듭니다.
      </Callout>

      <H2>게임별 로딩 시간 차이 (HDD vs SSD)</H2>
      <Table
        headers={['게임', 'HDD 로딩', 'SSD 로딩', '단축 시간']}
        rows={[
          ['배틀그라운드 (맵 로딩)', '약 70초', '약 20초', '-50초'],
          ['사이버펑크 2077 (빠른 이동)', '약 30~60초', '약 5~10초', '-40초'],
          ['GTA 5 (게임 진입)', '약 5~7분', '약 1~2분', '-4~5분'],
          ['롤 (게임 로딩)', '약 40~60초', '약 10~20초', '-30초'],
          ['엘든 링 (지역 이동)', '약 15초', '약 5초', '-10초'],
        ]}
      />

      <H2>SSD가 fps를 올려주나요?</H2>
      <P>
        직접적으로는 아닙니다. SSD는 CPU·GPU·RAM과 달리 fps 자체를 올려주지는 않습니다.
        다만 아래 상황에서 fps 안정성에 영향을 줍니다.
      </P>
      <UL>
        <li><strong className="text-white">오픈월드 스트리밍:</strong> GTA V, 사이버펑크처럼 실시간으로 대용량 데이터를 읽는 게임에서 HDD는 스터터링(fps 불규칙 끊김)을 유발</li>
        <li><strong className="text-white">RAM 부족 시 스왑:</strong> RAM이 부족해 가상 메모리(페이징)가 발동할 때 SSD는 HDD보다 훨씬 빠른 속도로 처리</li>
        <li><strong className="text-white">텍스처 팝업:</strong> HDD에서는 고해상도 텍스처가 늦게 로드되어 뿌옇게 보이다가 바뀌는 팝업 현상이 빈번</li>
      </UL>
      <Callout type="tip">
        사이버펑크 2077, Starfield 같은 대형 오픈월드 게임은 SSD가 사실상 필수입니다. 공식 권장 사양에서도 SSD를 명시하고 있습니다.
      </Callout>

      <H2>어떤 SSD를 사야 할까?</H2>
      <H3>SATA SSD vs NVMe M.2 SSD</H3>
      <P>
        일반 게이밍 목적이라면 <strong className="text-white">SATA SSD도 충분</strong>합니다.
        HDD에서 SATA SSD로 전환하는 것만으로도 로딩 시간이 3~4배 빨라지는 큰 체감을 얻을 수 있습니다.
        NVMe M.2 SSD는 가격이 조금 더 비싸지만, 같은 가격대라면 NVMe를 선택하는 게 낫습니다.
        단, 메인보드에 M.2 슬롯이 있는지 먼저 확인하세요.
      </P>
      <H3>용량 선택 기준</H3>
      <UL>
        <li><strong className="text-white">500GB ~ 1TB:</strong> 게임 3~5개 설치. 자주 지웠다 깔아야 하는 번거로움</li>
        <li><strong className="text-white">1TB (권장):</strong> 게임 10~15개 여유 있게 설치 가능. 가성비 최선</li>
        <li><strong className="text-white">2TB:</strong> 게임 설치 걱정 없음. 고해상도 영상 저장에도 여유</li>
      </UL>

      <H2>HDD를 아예 없애도 되나요?</H2>
      <P>
        게임·OS 전용으로는 SSD만으로도 충분합니다.
        단, 대용량 영상 파일, 사진 백업, 스트리밍 녹화 등 대용량 저장이 필요하다면
        HDD를 보조 저장소로 병행 사용하는 것이 비용 면에서 효율적입니다.
        SSD(게임·OS) + HDD(대용량 저장) 조합이 현실적인 최선입니다.
      </P>

      <ToolCTA href="/diagnose" label="내 PC 업그레이드 우선순위 지금 진단하기" />
    </ArticleLayout>
  );
}
