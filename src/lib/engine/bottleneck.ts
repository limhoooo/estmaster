import type { CPU, GPU, Resolution, BottleneckResult, BottleneckType } from '@/lib/types';

// Higher resolution = GPU works harder → GPU effective score reduced
const RESOLUTION_GPU_WEIGHT: Record<Resolution, number> = {
  '1080p': 1.0,
  '1440p': 0.85,
  '4K': 0.70,
};

function normalizeScore(score: number, min: number, max: number): number {
  if (max === min) return 50;
  return ((score - min) / (max - min)) * 100;
}

export function calculateBottleneck(
  cpu: CPU,
  gpu: GPU,
  resolution: Resolution,
  allCpus: CPU[],
  allGpus: GPU[]
): BottleneckResult {
  const cpuScores = allCpus.map(c => c.score);
  const gpuScores = allGpus.map(g => g.score);

  const minCpu = Math.min(...cpuScores);
  const maxCpu = Math.max(...cpuScores);
  const minGpu = Math.min(...gpuScores);
  const maxGpu = Math.max(...gpuScores);

  const normCpu = normalizeScore(cpu.score, minCpu, maxCpu);
  const normGpu = normalizeScore(gpu.score, minGpu, maxGpu);

  const gpuWeight = RESOLUTION_GPU_WEIGHT[resolution];
  const effectiveGpu = normGpu * gpuWeight;

  let bottleneckType: BottleneckType;
  let bottleneckPercent: number;

  if (normCpu < effectiveGpu * 0.75) {
    bottleneckType = 'CPU';
    bottleneckPercent = Math.round((1 - normCpu / effectiveGpu) * 100);
  } else if (effectiveGpu < normCpu * 0.75) {
    bottleneckType = 'GPU';
    bottleneckPercent = Math.round((1 - effectiveGpu / normCpu) * 100);
  } else {
    bottleneckType = 'balanced';
    bottleneckPercent = Math.round(
      (Math.abs(normCpu - effectiveGpu) / Math.max(normCpu, effectiveGpu)) * 100
    );
  }

  return {
    cpuScore: cpu.score,
    gpuScore: gpu.score,
    normalizedCpuScore: Math.round(normCpu),
    normalizedGpuScore: Math.round(normGpu),
    bottleneckType,
    bottleneckPercent: Math.min(bottleneckPercent, 99),
    resolution,
  };
}
