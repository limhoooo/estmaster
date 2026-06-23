export default function CoupangBanner() {
  return (
    <div className="flex justify-center overflow-hidden bg-slate-950 py-3">
      <a
        href="https://link.coupang.com/a/eN43ax67ps"
        target="_blank"
        rel="noopener noreferrer"
        referrerPolicy="unsafe-url"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://ads-partners.coupang.com/banners/999556?subId=&traceId=V0-301-5f9bd61900e673c0-I999556&w=728&h=90"
          alt="쿠팡 파트너스 배너"
          width={728}
          height={90}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </a>
    </div>
  );
}
