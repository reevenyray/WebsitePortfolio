// Abstract UI illustrations used in the carousel until real screenshots
// exist. Pass `image` to show a screenshot instead. Purely decorative.
// Colours come from the --hue set on the parent slide (see App.css, .vis__*).
// Props: kind ('dashboard' | 'store' | 'tracker'), image (string, optional)

function Chrome() {
  return (
    <g>
      <rect x="0" y="0" width="480" height="34" className="vis__bar" />
      <circle cx="18" cy="17" r="4.5" className="vis__dot" />
      <circle cx="34" cy="17" r="4.5" className="vis__dot" />
      <circle cx="50" cy="17" r="4.5" className="vis__dot" />
      <rect x="150" y="9" width="180" height="16" rx="8" className="vis__ghost" />
    </g>
  );
}

function Dashboard() {
  return (
    <>
      <Chrome />
      {/* map area */}
      <rect x="16" y="50" width="282" height="254" rx="8" className="vis__ghost" />
      {[90, 140, 190, 240].map((y) => (
        <line key={y} x1="16" x2="298" y1={y} y2={y} className="vis__grid" />
      ))}
      {[80, 140, 200, 260].map((x) => (
        <line key={x} y1="50" y2="304" x1={x} x2={x} className="vis__grid" />
      ))}
      <path d="M30 270 C90 200 130 250 180 170 S250 120 290 90" className="vis__line" />
      {[
        [120, 214],
        [186, 168],
        [252, 112],
      ].map(([cx, cy], i) => (
        <g key={cx}>
          <circle cx={cx} cy={cy} r="16" className="vis__halo" />
          <circle cx={cx} cy={cy} r={i === 1 ? 8 : 6} className="vis__strong" />
        </g>
      ))}
      {/* incident list */}
      {[50, 108, 166, 224].map((y, i) => (
        <g key={y}>
          <rect x="314" y={y} width="150" height="50" rx="8" className="vis__ghost" />
          <circle cx="334" cy={y + 25} r="6" className={i === 0 ? 'vis__strong' : 'vis__soft'} />
          <rect x="350" y={y + 14} width="90" height="7" rx="3.5" className="vis__soft" />
          <rect x="350" y={y + 29} width="60" height="6" rx="3" className="vis__faint" />
        </g>
      ))}
    </>
  );
}

function Store() {
  return (
    <>
      <Chrome />
      {/* filters */}
      <rect x="16" y="50" width="108" height="254" rx="8" className="vis__ghost" />
      <rect x="28" y="64" width="60" height="8" rx="4" className="vis__soft" />
      {[88, 116, 144, 172, 200].map((y, i) => (
        <g key={y}>
          <rect x="28" y={y} width="12" height="12" rx="3" className={i % 2 ? 'vis__faint' : 'vis__strong'} />
          <rect x="48" y={y + 3} width={56 - (i % 3) * 8} height="6" rx="3" className="vis__faint" />
        </g>
      ))}
      <rect x="28" y="246" width="84" height="32" rx="16" className="vis__strong" />
      {/* products */}
      {[0, 1, 2].map((c) =>
        [0, 1].map((r) => (
          <g key={`${c}${r}`}>
            <rect x={140 + c * 112} y={50 + r * 130} width="100" height="120" rx="8" className="vis__ghost" />
            <rect x={148 + c * 112} y={58 + r * 130} width="84" height="58" rx="6" className="vis__faint" />
            <rect x={148 + c * 112} y={126 + r * 130} width="64" height="7" rx="3.5" className="vis__soft" />
            <rect x={148 + c * 112} y={142 + r * 130} width="34" height="12" rx="6" className="vis__strong" />
          </g>
        ))
      )}
    </>
  );
}

function Tracker() {
  const bars = [60, 84, 76, 110, 130, 122, 160];
  return (
    <>
      <Chrome />
      {/* KPI row */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={16 + i * 154} y="50" width="142" height="56" rx="8" className="vis__ghost" />
          <rect x={28 + i * 154} y="64" width="50" height="6" rx="3" className="vis__faint" />
          <rect x={28 + i * 154} y="80" width="76" height="14" rx="4" className={i === 0 ? 'vis__strong' : 'vis__soft'} />
        </g>
      ))}
      {/* growth chart */}
      <rect x="16" y="120" width="290" height="184" rx="8" className="vis__ghost" />
      {bars.map((h, i) => (
        <rect key={i} x={34 + i * 38} y={286 - h} width="24" height={h} rx="4" className={i === bars.length - 1 ? 'vis__strong' : 'vis__soft'} />
      ))}
      {/* batches table */}
      <rect x="320" y="120" width="144" height="184" rx="8" className="vis__ghost" />
      {[138, 168, 198, 228, 258].map((y, i) => (
        <g key={y}>
          <rect x="332" y={y} width="56" height="7" rx="3.5" className="vis__soft" />
          <rect x="400" y={y} width="52" height="7" rx="3.5" className={i === 1 ? 'vis__strong' : 'vis__faint'} />
          <line x1="332" x2="452" y1={y + 18} y2={y + 18} className="vis__grid" />
        </g>
      ))}
    </>
  );
}

const kinds = { dashboard: Dashboard, store: Store, tracker: Tracker };

function ProjectVisual({ kind = 'dashboard', image }) {
  if (image) {
    return <img className="vis-image" src={image} alt="" loading="lazy" />;
  }
  const Scene = kinds[kind] || Dashboard;
  return (
    <svg
      className="vis"
      viewBox="0 0 480 320"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="480" height="320" rx="12" className="vis__frame" />
      <clipPath id={`clip-${kind}`}>
        <rect width="480" height="320" rx="12" />
      </clipPath>
      <g clipPath={`url(#clip-${kind})`}>
        <Scene />
      </g>
    </svg>
  );
}

export default ProjectVisual;
