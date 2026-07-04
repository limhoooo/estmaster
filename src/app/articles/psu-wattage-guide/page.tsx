import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: '파워서플라이 용량 계산 가이드 — 몇 W 사야 안전할까? | 견적도사',
  description: 'CPU·GPU 조합별 필요 파워 용량 계산법과 80 PLUS 등급의 의미, 파워 부족 시 나타나는 증상을 정리합니다.',
  keywords: ['파워서플라이 용량', 'PSU 계산', '파워 용량 계산기', '80 PLUS 등급'],
  alternates: { canonical: `${SITE.url}/articles/psu-wattage-guide/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="파워서플라이 용량 계산 가이드 — 몇 W 사야 안전할까?"
      description="GPU 교체 전 반드시 확인해야 할 파워 용량, 계산법과 80 PLUS 등급 완벽 정리"
      publishedAt="2026-07-03"
      tags={['PC 관리', '파워서플라이', '하드웨어 팁']}
    >
      <P>
        그래픽카드만 바꾸면 성능이 오를 줄 알았는데, 부팅이 안 되거나 게임 중 PC가 꺼지는 경우가 있습니다.
        대부분 파워서플라이 용량 부족이 원인입니다. 어떻게 계산하고, 얼마나 여유를 둬야 하는지 정리합니다.
      </P>

      <H2>GPU별 권장 파워 용량</H2>
      <Table
        headers={['GPU 등급', '대표 모델', '권장 파워']}
        rows={[
          ['보급형', 'RTX 4060 / RX 7600', '550W'],
          ['중급형', 'RTX 4070 / RX 7700 XT', '650W'],
          ['상급형', 'RTX 4070 Ti Super / RX 7800 XT', '700W'],
          ['최상급', 'RTX 4080 이상 / RX 7900 XTX', '750~850W'],
        ]}
      />
      <Callout type="info">
        위 수치는 GPU 제조사가 공식적으로 권장하는 "시스템 전체" 파워 용량입니다. GPU 단독 소비 전력이 아닙니다.
      </Callout>

      <H2>파워 용량, 어떻게 계산해야 하나?</H2>
      <P>
        가장 간단한 방법은 <strong className="text-white">GPU 권장 파워 + CPU TDP 여유분</strong>을 더하는 것입니다.
        고성능 CPU(105W 이상)를 함께 쓴다면 GPU 권장 파워보다 50~100W 여유를 더 두는 게 안전합니다.
      </P>
      <H3>계산 예시</H3>
      <UL>
        <li>RTX 4070(권장 650W) + 저전력 CPU(65W급) → 650W면 충분</li>
        <li>RTX 4070(권장 650W) + 고성능 CPU(125W급, i7-14700K 등) → 700~750W 권장</li>
        <li>RTX 4070 Ti Super(권장 700W) + 고성능 CPU → 750~800W 권장</li>
      </UL>
      <Callout type="tip">
        정확히 딱 맞는 용량보다 <strong>10~20% 여유</strong>를 두는 게 안전합니다. 파워는 최대 부하 근처에서 효율이 떨어지고 소음·발열도 커집니다.
      </Callout>

      <H2>80 PLUS 등급이 뭔가요?</H2>
      <Table
        headers={['등급', '변환 효율 (50% 부하 기준)', '특징']}
        rows={[
          ['화이트', '80%', '기본 등급, 저가 제품 위주'],
          ['브론즈', '85%', '가성비 파워의 표준'],
          ['실버', '87%', '브론즈와 골드 사이, 시장에 적음'],
          ['골드', '90%', '가장 대중적인 중상급 등급'],
          ['플래티넘', '92%', '고효율, 고사양 시스템에 적합'],
          ['티타늄', '94%', '최고 효율, 가격도 최상급'],
        ]}
      />
      <P>
        효율이 높을수록 같은 전력을 쓰고도 발열·전기료가 줄어듭니다. 일반 게이밍 PC라면
        <strong className="text-white"> 골드 등급이 가성비와 안정성의 균형점</strong>입니다.
      </P>

      <H2>파워 용량 부족 시 나타나는 증상</H2>
      <UL>
        <li>고사양 게임 중 갑자기 PC가 재부팅되거나 꺼짐</li>
        <li>GPU 사용률이 급격히 오르는 순간 화면이 멈추거나 블랙아웃</li>
        <li>여러 저장장치·주변기기를 추가한 뒤 부팅 실패</li>
        <li>파워에서 미세한 이상음(코일 노이즈보다 강한 소음)</li>
      </UL>
      <Callout type="warn">
        위 증상이 GPU 교체 직후 나타났다면 파워 용량 부족일 가능성이 큽니다. 파워 교체 전 다른 원인(드라이버, 온도)부터 배제한 뒤 파워를 의심하세요.
      </Callout>

      <H2>기존 파워를 재사용해도 될까?</H2>
      <P>
        3~5년 이상 사용한 파워는 용량이 충분해 보여도 노후화로 실제 출력이 떨어질 수 있습니다.
        고사양 GPU로 업그레이드하면서 파워 교체 시기가 겹친다면, 이번 기회에 함께 교체하는 것을 권장합니다.
      </P>

      <ToolCTA href="/diagnose" label="내 GPU 업그레이드에 파워가 충분한지 진단하기" />
    </ArticleLayout>
  );
}
