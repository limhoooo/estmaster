export const dynamic = 'force-static';

import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: '#2563eb',
          borderRadius: 7,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: 22,
          fontWeight: 900,
          fontFamily: 'sans-serif',
        }}
      >
        E
      </div>
    ),
    { width: 32, height: 32 },
  );
}
