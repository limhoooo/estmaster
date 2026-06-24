import type { Metadata } from 'next';
import { loadCPUs, loadGPUs, loadGames } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';
import CustomBuilder from '@/components/custom/CustomBuilder';

export const metadata: Metadata = {
  title: 'PC 커스텀 빌더 — CPU GPU 조합별 게임 실행 등급 확인 | 견적도사',
  description:
    '원하는 CPU와 GPU를 직접 골라 사이버펑크·배그·엘든링 등 33개 게임이 원활하게 실행되는지 확인하세요. 쿠팡·다나와 구매 링크 즉시 제공.',
  keywords: ['PC 커스텀', 'CPU GPU 조합', '게임 실행 가능 여부', '게임 사양 확인', 'PC 빌더'],
  alternates: { canonical: `${SITE.url}/custom` },
  openGraph: {
    title: 'PC 커스텀 빌더 — CPU GPU 조합별 게임 등급 | 견적도사',
    description: 'CPU·GPU를 직접 골라 어떤 게임이 돌아가는지 즉시 확인. 구매 링크 제공.',
    url: `${SITE.url}/custom`,
  },
};

export default function CustomPage() {
  const cpus = loadCPUs();
  const gpus = loadGPUs();
  const games = loadGames();

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white sm:text-3xl">PC 커스텀 빌더</h1>
          <p className="mt-2 text-sm text-slate-400">
            원하는 CPU·GPU를 직접 골라 어떤 게임이 원활하게 실행되는지 확인하세요.
          </p>
        </div>
        <CustomBuilder cpus={cpus} gpus={gpus} games={games} />
      </div>
    </div>
  );
}
