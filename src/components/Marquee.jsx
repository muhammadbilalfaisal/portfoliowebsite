const items = [
  "BILALHUSTLE",
  "WEB DEVELOPMENT",
  "AI AUTOMATION",
  "SAAS",
  "DIGITAL SYSTEMS",
];

const sequence = [...items, ...items];

function MarqueeGroup({ suffix, hidden = false }) {
  return (
    <div className="marquee-group" aria-hidden={hidden || undefined}>
      {sequence.map((item, index) => (
        <span key={`${item}-${suffix}-${index}`}>
          {item}
          <i>✦</i>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="marquee" aria-label={items.join(", ")}>
      <div className="marquee-track">
        <MarqueeGroup suffix="primary" />
        <MarqueeGroup suffix="duplicate" hidden />
      </div>
    </div>
  );
}
