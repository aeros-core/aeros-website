import type { ReactNode } from 'react'

// Hand-drawn line illustrations in the same ink style as the cup
// measurement diagram on the category pages: #0A0A0A strokes with
// #737373 muted details, no fills.

const ink = {
  stroke: '#0A0A0A',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
} as const

const mute = {
  stroke: '#737373',
  strokeWidth: 1,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  fill: 'none',
} as const

const cupOutline = (
  <>
    <ellipse cx={80} cy={30} rx={32} ry={6.5} {...ink} />
    <path d="M48 30 L59 99" {...ink} />
    <path d="M112 30 L101 99" {...ink} />
    <ellipse cx={80} cy={99} rx={21} ry={4} {...ink} />
  </>
)

const steam = (
  <>
    <path d="M71 18 C68.5 14.5 73.5 12.5 71 9" {...mute} />
    <path d="M89 18 C86.5 14.5 91.5 12.5 89 9" {...mute} />
  </>
)

const ART: Record<string, ReactNode> = {
  // ── Cup types ──────────────────────────────────────────────
  'single-wall-hot': (
    <>
      {cupOutline}
      {steam}
      <path d="M46.5 44 L113.5 44 L110 66 L50 66 Z" {...ink} />
    </>
  ),
  'double-wall-paper-cups': (
    <>
      {cupOutline}
      <ellipse cx={80} cy={30.5} rx={25} ry={4.8} {...mute} />
      <path d="M55 31.5 L64.5 96.5" {...mute} />
      <path d="M105 31.5 L95.5 96.5" {...mute} />
    </>
  ),
  'ripple-wall': (
    <>
      <ellipse cx={80} cy={30} rx={32} ry={6.5} {...ink} />
      <path
        d="M48 30 l5.1 8.6 l-2.35 8.6 l5.1 8.6 l-2.35 8.6 l5.1 8.6 l-2.35 8.6 l5.1 8.6 l-2.35 8.8"
        {...ink}
      />
      <path
        d="M112 30 l-5.1 8.6 l2.35 8.6 l-5.1 8.6 l2.35 8.6 l-5.1 8.6 l2.35 8.6 l-5.1 8.6 l2.35 8.8"
        {...ink}
      />
      <ellipse cx={80} cy={99} rx={21} ry={4} {...ink} />
    </>
  ),
  'cold-cup': (
    <>
      {cupOutline}
      <path d="M86 7 L92 7" {...ink} />
      <path d="M86 7 L93 29" {...ink} />
      <path d="M92 7 L99 29" {...ink} />
      <path d="M95 31 L90 50" {...mute} strokeDasharray="3 3" />
      <circle cx={64} cy={58} r={2.2} {...mute} />
      <circle cx={78} cy={73} r={2.2} {...mute} />
      <circle cx={95} cy={57} r={2.2} {...mute} />
    </>
  ),
  compostable: (
    <>
      {cupOutline}
      <path d="M66 62 C69 49 87 44 97 50 C94 63 75 69 66 62 Z" {...ink} />
      <path d="M70 60.5 C78 56 87 52.5 94 51.5" {...mute} />
    </>
  ),

  // ── Catalog categories ─────────────────────────────────────
  'paper-cups': (
    <>
      {cupOutline}
      {steam}
    </>
  ),
  lids: (
    <>
      <ellipse cx={80} cy={72} rx={42} ry={8} {...ink} />
      <path d="M43 68 C52 46 108 46 117 68" {...ink} />
      <ellipse cx={80} cy={51} rx={10} ry={2.8} {...mute} />
      <ellipse
        cx={101}
        cy={57}
        rx={4.5}
        ry={2}
        transform="rotate(-16 101 57)"
        {...ink}
      />
    </>
  ),
  'paper-bowls': (
    <>
      <ellipse cx={80} cy={48} rx={44} ry={9} {...ink} />
      <path d="M36 48 L47 86" {...ink} />
      <path d="M124 48 L113 86" {...ink} />
      <ellipse cx={80} cy={86} rx={33} ry={5.5} {...ink} />
      <path d="M71 38 C68.5 34.5 73.5 32.5 71 29" {...mute} />
      <path d="M89 38 C86.5 34.5 91.5 32.5 89 29" {...mute} />
    </>
  ),
  'takeout-containers': (
    <>
      <path d="M46 58 L60 40 L124 40 L114 58 Z" {...ink} />
      <path d="M46 58 L114 58 L109 98 L51 98 Z" {...ink} />
      <path d="M80 58 L80 98" {...mute} strokeDasharray="3 3" />
      <path d="M73 58 L87 58 L87 65 L73 65 Z" {...mute} />
    </>
  ),
  napkins: (
    <>
      <path d="M44 40 L100 40 L100 80 L44 80 Z" {...mute} />
      <path d="M50 46 L106 46 L106 86 L50 86 Z" {...mute} />
      <path d="M56 52 L112 52 L112 92 L56 92 Z" {...ink} />
      <path d="M56 52 L112 92" {...mute} strokeDasharray="3 3" />
    </>
  ),
  'paper-straws': (
    <>
      <g transform="rotate(-14 80 56)">
        <rect x={64} y={14} width={8} height={84} rx={4} {...mute} />
      </g>
      <g transform="rotate(12 80 56)">
        <rect x={76} y={10} width={8} height={92} rx={4} {...ink} />
        <path d="M76 26 L84 22" {...mute} />
        <path d="M76 42 L84 38" {...mute} />
        <path d="M76 58 L84 54" {...mute} />
        <path d="M76 74 L84 70" {...mute} />
        <path d="M76 90 L84 86" {...mute} />
      </g>
    </>
  ),
  'paper-plates': (
    <>
      <ellipse cx={80} cy={62} rx={48} ry={15} {...ink} />
      <ellipse cx={80} cy={62} rx={30} ry={9} {...mute} />
    </>
  ),
  sanitizers: (
    <>
      <rect x={58} y={52} width={44} height={48} rx={7} {...ink} />
      <path d="M74 52 L74 40 L86 40 L86 52" {...ink} />
      <path d="M80 40 L80 29 L99 29 L99 35" {...ink} />
      <circle cx={99} cy={43} r={2.2} {...mute} />
      <rect
        x={66}
        y={64}
        width={28}
        height={22}
        rx={4}
        {...mute}
        strokeDasharray="3 3"
      />
    </>
  ),
  gloves: (
    <>
      <path
        d="M60 100 L60 58 C60 44 69 44 69 56 C69 40 78 40 78 54 C78 41 87 41 87 55 C87 46 95 46 95 58 L95 74 C103 67 110 73 104 80 L96 90 L96 100 Z"
        {...ink}
      />
      <path d="M60 92 L96 92" {...mute} />
    </>
  ),
  'trash-bags': (
    <>
      <path
        d="M60 46 C53 64 53 86 62 100 L98 100 C107 86 107 64 100 46"
        {...ink}
      />
      <path d="M66 46 C61 33 72 29 75 41" {...ink} />
      <path d="M94 46 C99 33 88 29 85 41" {...ink} />
      <circle cx={80} cy={44} r={4.5} {...ink} />
      <path d="M72 60 C70 74 71 86 74 94" {...mute} strokeDasharray="3 3" />
      <path d="M88 60 C90 74 89 86 86 94" {...mute} strokeDasharray="3 3" />
    </>
  ),
  'surface-wipes': (
    <>
      <ellipse cx={80} cy={44} rx={30} ry={7.5} {...ink} />
      <path d="M50 44 L50 90" {...ink} />
      <path d="M110 44 L110 90" {...ink} />
      <path d="M50 90 C50 97 110 97 110 90" {...ink} />
      <ellipse cx={80} cy={44} rx={22} ry={5} {...mute} />
      <path d="M80 42 C75 32 89 28 82 16 C86 12 92 15 96 11" {...ink} />
    </>
  ),
  detergents: (
    <>
      <rect x={52} y={46} width={46} height={54} rx={7} {...ink} />
      <rect x={57} y={28} width={16} height={11} rx={2} {...ink} />
      <path d="M60 39 L60 46" {...ink} />
      <path d="M70 39 L70 46" {...ink} />
      <path d="M98 56 C112 56 112 78 98 78" {...ink} />
      <rect
        x={62}
        y={62}
        width={26}
        height={24}
        rx={4}
        {...mute}
        strokeDasharray="3 3"
      />
    </>
  ),
}

export default function CategoryIllustration({
  art,
  className,
}: {
  art: string
  className?: string
}) {
  const node = ART[art]
  if (!node) return null
  return (
    <svg
      viewBox="0 0 160 112"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {node}
    </svg>
  )
}
