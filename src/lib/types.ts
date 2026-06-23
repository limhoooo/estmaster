export type Resolution = '1080p' | '1440p' | '4K';
export type GameGrade = 'smooth' | 'playable' | 'difficult';
export type BottleneckType = 'CPU' | 'GPU' | 'balanced';

export interface GPU {
  model: string;
  brand: string;
  score: number;
  year: number;
  psu_watt: number;
}

export interface CPU {
  model: string;
  brand: string;
  score: number;
  cores: number;
  threads: number;
  year: number;
  socket: string;
}

export interface Game {
  name: string;
  min_cpu: string;
  min_gpu: string;
  min_ram: number;
  rec_cpu: string;
  rec_gpu: string;
  rec_ram: number;
}

export interface MockPrice {
  approximate: string;
  danawa_url: string;
  coupang_url: string;
}

export interface GameDiagResult {
  game: Game;
  cpuGrade: GameGrade;
  gpuGrade: GameGrade;
  overallGrade: GameGrade;
}

export interface BottleneckResult {
  cpuScore: number;
  gpuScore: number;
  normalizedCpuScore: number;
  normalizedGpuScore: number;
  bottleneckType: BottleneckType;
  bottleneckPercent: number;
  resolution: Resolution;
}

export interface CompatibilityWarning {
  type: 'socket' | 'psu';
  message: string;
}

export type RecommendTierKey = 'budget' | 'balanced' | 'performance';

export interface RecommendTier {
  tier: RecommendTierKey;
  label: string;
  recommendedModel: string;
  price: MockPrice;
  warnings: CompatibilityWarning[];
  improvedGames: Array<{
    name: string;
    before: GameGrade;
    after: GameGrade;
  }>;
}

export interface Recommendation {
  component: 'CPU' | 'GPU';
  currentModel: string;
  tiers: RecommendTier[];
}

export interface DiagnoseInput {
  cpu: string;
  gpu: string;
  ram: number;
  resolution: Resolution;
  psuWatt: number;
}

export interface DiagnoseResult {
  input: DiagnoseInput;
  cpuData: CPU;
  gpuData: GPU;
  bottleneck: BottleneckResult;
  gameResults: GameDiagResult[];
  recommendation: Recommendation | null;
}
