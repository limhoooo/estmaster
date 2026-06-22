'use client';

interface Props {
  targetId: string;
  className?: string;
  children: React.ReactNode;
}

export default function ScrollAnchorButton({ targetId, className, children }: Props) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
