'use client';

import { useEffect } from 'react';
import { SITE } from '@/lib/config/site';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface Props {
  slot: string;
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
}

export default function AdUnit({ slot, format = 'auto', className = '' }: Props) {
  const isPlaceholder = slot.startsWith('SLOT_ID_');

  useEffect(() => {
    if (isPlaceholder) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // AdSense 스크립트 로드 전 무시
    }
  }, [isPlaceholder]);

  // 슬롯 ID가 플레이스홀더면 렌더링 안 함 (빈 공간 방지)
  if (isPlaceholder) return null;

  return (
    <div className={`overflow-hidden ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={SITE.adsenseId}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
