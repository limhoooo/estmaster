import type { CompatibilityWarning } from '@/lib/types';

interface Props {
  warning: CompatibilityWarning;
}

const ICONS: Record<CompatibilityWarning['type'], string> = {
  socket: '🔌',
  psu: '⚡',
};

export default function CompatWarning({ warning }: Props) {
  return (
    <div className="flex gap-3 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 px-4 py-3">
      <span className="flex-shrink-0 mt-0.5">{ICONS[warning.type]}</span>
      <p className="text-sm text-amber-800 dark:text-amber-300">{warning.message}</p>
    </div>
  );
}
