import type { GameGrade } from '@/lib/types';

interface Props {
  grade: GameGrade;
  size?: 'sm' | 'md';
}

const CONFIG: Record<GameGrade, { label: string; className: string }> = {
  smooth: {
    label: '원활',
    className:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800',
  },
  playable: {
    label: '버벅임 가능',
    className:
      'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800',
  },
  difficult: {
    label: '실행 어려움',
    className:
      'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800',
  },
};

export default function GradeBadge({ grade, size = 'md' }: Props) {
  const { label, className } = CONFIG[grade];
  const sizeClass = size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm';

  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium whitespace-nowrap ${sizeClass} ${className}`}
    >
      {label}
    </span>
  );
}
