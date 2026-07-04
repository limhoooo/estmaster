import type { Metadata } from 'next';
import { SITE } from '@/lib/config/site';
import ArticleLayout, { H2, H3, P, UL, Callout, ToolCTA, Table } from '@/components/articles/ArticleLayout';

export const metadata: Metadata = {
  title: 'CPU GPU 병목 현상 완벽 정리 — 원인·증상·해결법 | 견적도사',
  description: 'CPU 병목, GPU 병목이 무엇인지, 어떻게 확인하는지, 어떻게 해결하는지 쉽게 설명합니다. PC가 느린 이유를 알아보세요.',
  keywords: ['CPU 병목', 'GPU 병목', 'PC 병목 현상', '병목 확인', 'CPU 병목 해결', 'GPU 병목 해결'],
  alternates: { canonical: `${SITE.url}/articles/cpu-gpu-bottleneck/` },
};

export default function Article() {
  return (
    <ArticleLayout
      title="CPU GPU 병목 현상 완벽 정리 — 원인·증상·해결법"
      description="PC가 왜 느린지 모르겠다면 병목 때문일 수 있습니다."
      publishedAt="2026-06-24"
      tags={['PC 병목', '성능 진단', '기초 지식']}
    >
      <P>
        비싼 그래픽카드를 샀는데 생각보다 게임이 잘 안 돌아가나요?
        오래된 CPU를 쓰고 있는데 GPU를 교체해도 성능이 크게 안 오른다면 병목 현상 때문일 수 있습니다.
        PC 병목이 무엇인지, 어떻게 확인하고 해결하는지 알아보겠습니다.
      </P>

      <H2>병목 현상이란?</H2>
      <P>
        병목(Bottleneck)은 원래 병의 목처럼 좁은 부분이 전체 흐름을 제한한다는 의미입니다.
        PC에서는 <strong className="text-white">CPU나 GPU 중 성능이 낮은 쪽이 다른 쪽의 성능을 충분히 활용하지 못하게 막는 현상</strong>을 말합니다.
      </P>
      <Callout type="info">
        예시: RTX 4080 + i5-4690K 조합. GPU는 최상급이지만 10년 된 CPU가 게임 데이터를 제때 보내주지 못해 GPU가 놀게 됩니다.
      </Callout>

      <H2>CPU 병목 vs GPU 병목</H2>
      <Table
        headers={['구분', 'CPU 병목', 'GPU 병목']}
        rows={[
          ['원인', 'CPU가 GPU보다 성능이 낮음', 'GPU가 CPU보다 성능이 낮음'],
          ['증상', 'CPU 사용률 90%+, GPU 사용률 50~60%', 'GPU 사용률 90%+, CPU 사용률 50~60%'],
          ['해결책', 'CPU(+메인보드) 업그레이드', 'GPU 업그레이드'],
          ['주로 발생', 'FPS·전략·오픈월드 게임', '그래픽 집약적 AAA 게임'],
        ]}
      />

      <H2>병목을 확인하는 방법</H2>
      <H3>방법 1: 게임 중 사용률 모니터링</H3>
      <P>
        작업 관리자(Ctrl+Shift+Esc) → 성능 탭에서 CPU와 GPU 사용률을 게임 중에 확인합니다.
      </P>
      <UL>
        <li>CPU 90%+, GPU 60% 이하 → CPU 병목</li>
        <li>GPU 90%+, CPU 60% 이하 → GPU 병목 (가장 이상적인 상태이기도 함)</li>
        <li>CPU와 GPU 모두 80~90% → 균형 잡힌 좋은 상태</li>
      </UL>

      <H3>방법 2: 해상도 변경 테스트</H3>
      <P>
        해상도를 낮췄을 때 FPS가 크게 오르지 않는다면 CPU 병목일 가능성이 높습니다.
        해상도를 낮추면 GPU 부하는 줄지만 CPU 부하는 거의 그대로이기 때문입니다.
      </P>

      <H3>방법 3: 견적도사로 즉시 확인</H3>
      <P>
        CPU 모델과 GPU 모델을 입력하면 자동으로 병목 유형과 업그레이드 추천을 알려드립니다.
      </P>

      <H2>CPU 병목 해결 방법</H2>
      <UL>
        <li><strong className="text-white">CPU 업그레이드:</strong> 가장 확실한 해결법. 소켓이 같으면 메인보드 교체 없이 가능.</li>
        <li><strong className="text-white">게임 설정 최적화:</strong> 그래픽 옵션 상향 시 GPU 부하 증가 → 상대적으로 CPU 병목 완화.</li>
        <li><strong className="text-white">해상도 상향:</strong> 1440p·4K로 올리면 GPU 부하가 늘어 CPU 병목이 줄어드는 경우도 있음.</li>
        <li><strong className="text-white">오버클럭:</strong> 위험 부담이 있지만 CPU 성능을 10~15% 올릴 수 있음.</li>
      </UL>

      <H2>GPU 병목 해결 방법</H2>
      <UL>
        <li><strong className="text-white">GPU 업그레이드:</strong> 가장 직접적인 해결책.</li>
        <li><strong className="text-white">그래픽 설정 낮춤:</strong> 임시방편이지만 즉각 효과.</li>
        <li><strong className="text-white">해상도 낮춤:</strong> 1440p → 1080p 변경 시 GPU 부하 30~40% 감소.</li>
        <li><strong className="text-white">DLSS/FSR 활용:</strong> AI 업스케일링으로 GPU 부하를 줄이면서 화질 유지.</li>
      </UL>

      <Callout type="tip">
        최적의 PC 구성은 CPU와 GPU 성능이 균형을 이루는 상태입니다. 한쪽이 너무 강하면 그 성능을 낭비하게 됩니다.
      </Callout>

      <H2>내 PC의 병목은?</H2>
      <P>직접 진단해보세요. CPU와 GPU 모델만 입력하면 바로 확인할 수 있습니다.</P>
      <ToolCTA href="/" label="내 PC 병목 무료 진단하기" />
    </ArticleLayout>
  );
}
