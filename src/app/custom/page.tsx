import type { Metadata } from 'next';
import { loadCPUs, loadGPUs, loadGames } from '@/lib/data/loader';
import { SITE } from '@/lib/config/site';
import CustomBuilder from '@/components/custom/CustomBuilder';

export const metadata: Metadata = {
  title: `PC 커스텀 빌더 | ${SITE.name}`,
  description: 'CPU와 GPU를 직접 골라 어떤 게임이 원활하게 돌아가는지 확인하세요.',
  alternates: { canonical: `${SITE.url}/custom` },
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
