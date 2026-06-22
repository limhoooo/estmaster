import type { CPU, GPU } from '@/lib/types';

const MOBILE_SOCKETS = new Set(['FP6', 'FP7', 'FP7r2', 'BGA']);

export function isLaptopCPU(cpu: CPU): boolean {
  return MOBILE_SOCKETS.has(cpu.socket);
}

// psu_watt === 0 이면 노트북 전용 또는 내장 GPU
export function isLaptopGPU(gpu: GPU): boolean {
  return gpu.psu_watt === 0;
}

export function isLaptop(cpu: CPU, gpu: GPU): boolean {
  return isLaptopCPU(cpu) || isLaptopGPU(gpu);
}

export function isIntegratedGPU(gpu: GPU): boolean {
  const integrated = ['Radeon Graphics', 'Radeon Vega', 'Intel Iris', 'Intel UHD', 'Radeon 680M', 'Radeon 780M', 'Radeon 890M'];
  return integrated.some(name => gpu.model.includes(name));
}
