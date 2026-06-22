import type { BottleneckResult } from '@/lib/types';

interface Props {
  result: BottleneckResult;
  cpuModel: string;
  gpuModel: string;
}

const CONFIG = {
  CPU: {
    label: 'CPU 병목',
    desc: 'CPU가 GPU의 성능을 따라가지 못하고 있습니다. CPU 업그레이드를 권장합니다.',
    headingColor: 'text-amber-600 dark:text-amber-400',
    border: 'border-amber-200 dark:border-amber-800',
    bg: 'bg-amber-50 dark:bg-amber-900/10',
  },
  GPU: {
    label: 'GPU 병목',
    desc: 'GPU가 발목을 잡고 있습니다. GPU 업그레이드로 가장 큰 체감 향상을 기대할 수 있습니다.',
    headingColor: 'text-red-600 dark:text-red-400',
    border: 'border-red-200 dark:border-red-800',
    bg: 'bg-red-50 dark:bg-red-900/10',
  },
  balanced: {
    label: '균형 잡힌 구성',
    desc: 'CPU와 GPU가 잘 균형을 이루고 있습니다.',
    headingColor: 'text-emerald-600 dark:text-emerald-400',
    border: 'border-emerald-200 dark:border-emerald-800',
    bg: 'bg-emerald-50 dark:bg-emerald-900/10',
  },
};

interface BarRowProps {
  label: string;
  model: string;
  value: number;
  isBottleneck: boolean;
  note?: string;
}

function BarRow({ label, model, value, isBottleneck, note }: BarRowProps) {
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <span className="w-8 flex-shrink-0 text-xs font-bold text-slate-500 dark:text-slate-400">
            {label}
          </span>
          <span className="truncate text-sm font-medium text-slate-800 dark:text-slate-200">
            {model}
          </span>
          {isBottleneck && (
            <span className="flex-shrink-0 rounded bg-amber-100 px-1.5 py-0.5 text-xs text-amber-700 dark:bg-amber-900/40 dark:text-amber-400">
              병목
            </span>
          )}
        </div>
        <span className="ml-2 flex-shrink-0 text-sm font-bold text-slate-900 dark:text-slate-100">
          {value}점
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className={`h-full rounded-full transition-all duration-700 ${
            isBottleneck ? 'bg-amber-500' : 'bg-blue-500'
          }`}
          style={{ width: `${Math.max(value, 2)}%` }}
        />
      </div>
      {note && <p className="mt-1 text-xs text-slate-500">{note}</p>}
    </div>
  );
}

export default function BottleneckCard({ result, cpuModel, gpuModel }: Props) {
  const config = CONFIG[result.bottleneckType];

  return (
    <div className={`rounded-2xl border ${config.border} ${config.bg} p-6`}>
      <div className="mb-4 flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">병목 분석</h3>
          <p className={`mt-1 text-sm font-semibold ${config.headingColor}`}>{config.label}</p>
        </div>
        {result.bottleneckType !== 'balanced' && (
          <div className={`text-3xl font-black ${config.headingColor}`}>
            {result.bottleneckPercent}%
          </div>
        )}
      </div>
      <p className="mb-6 text-sm text-slate-600 dark:text-slate-400">{config.desc}</p>
      <div className="space-y-4">
        <BarRow
          label="CPU"
          model={cpuModel}
          value={result.normalizedCpuScore}
          isBottleneck={result.bottleneckType === 'CPU'}
        />
        <BarRow
          label="GPU"
          model={gpuModel}
          value={result.normalizedGpuScore}
          isBottleneck={result.bottleneckType === 'GPU'}
          note={
            result.resolution !== '1080p'
              ? `${result.resolution} 환경에서는 GPU 부하가 증가해 GPU 병목이 심화될 수 있습니다.`
              : undefined
          }
        />
      </div>
      <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
        * PassMark 기준 데이터베이스 내 상대적 백분위 점수 · 실제 성능과 차이 있을 수 있음
      </p>
    </div>
  );
}
