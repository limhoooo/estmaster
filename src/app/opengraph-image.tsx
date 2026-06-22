export const dynamic = 'force-static';

import { ImageResponse } from 'next/og';

export const alt = '견적도사 — 무료 PC 업그레이드 진단';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      // Satori 규칙: 자식 2개 이상인 div는 반드시 display:flex 필요, <br/> 사용 불가
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          padding: '60px',
          position: 'relative',
        }}
      >
        <div style={{ color: '#60a5fa', fontSize: 18, letterSpacing: 4, marginBottom: 20, display: 'flex' }}>
          무료 PC 업그레이드 진단 도구
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 28 }}>
          <div style={{
            width: 64, height: 64,
            background: '#2563eb',
            borderRadius: 16,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 32, fontWeight: 900, color: 'white',
          }}>
            E
          </div>
          <div style={{ color: 'white', fontSize: 72, fontWeight: 900, letterSpacing: -2, display: 'flex' }}>
            견적도사
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginBottom: 48 }}>
          <div style={{ color: '#94a3b8', fontSize: 26, textAlign: 'center', display: 'flex' }}>
            CPU · GPU · RAM을 입력하면
          </div>
          <div style={{ color: '#94a3b8', fontSize: 26, textAlign: 'center', display: 'flex' }}>
            병목 원인과 최적의 업그레이드를 즉시 알려드립니다
          </div>
        </div>

        <div style={{
          background: '#2563eb',
          color: 'white',
          padding: '14px 36px',
          borderRadius: 12,
          fontSize: 22,
          fontWeight: 700,
          display: 'flex',
        }}>
          지금 무료로 진단하기 →
        </div>

        <div style={{ position: 'absolute', bottom: 32, color: '#475569', fontSize: 16, display: 'flex' }}>
          estmaster.kr
        </div>
      </div>
    ),
    { ...size },
  );
}
