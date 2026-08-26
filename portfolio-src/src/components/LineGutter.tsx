interface Props {
  count: number
  /** Line-height of the text this gutter sits beside, in px. Pass the
   * measured value so numbers land on the actual text baselines instead
   * of an assumed ratio that only happens to match at one viewport width. */
  lineHeightPx?: number
  className?: string
}

// A vertical strip of line numbers, echoing source-code line gutters.
// Purely a structural/atmospheric device tied to the site's editor motif.
export default function LineGutter({ count, lineHeightPx, className = '' }: Props) {
  return (
    <div className={`hidden md:flex flex-col items-end pr-4 select-none ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="gutter-line"
          style={lineHeightPx ? { height: lineHeightPx, lineHeight: `${lineHeightPx}px` } : undefined}
        >
          {String(i + 1).padStart(2, '0')}
        </span>
      ))}
    </div>
  )
}
