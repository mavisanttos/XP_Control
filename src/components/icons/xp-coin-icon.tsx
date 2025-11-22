export function XpCoinIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="48" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="2" />
      <circle cx="50" cy="50" r="40" fill="url(#gradientCoin)" stroke="currentColor" strokeWidth="2.5" />

      {/* Inner shine effect */}
      <circle cx="40" cy="35" r="15" fill="white" opacity="0.1" />

      {/* XP Text - more visible */}
      <text
        x="50"
        y="60"
        textAnchor="middle"
        fontSize="26"
        fontWeight="bold"
        fill="white"
        opacity="1"
        fontFamily="Arial, sans-serif"
      >
        XP
      </text>

      <defs>
        <radialGradient id="gradientCoin">
          <stop offset="0%" stopColor="currentColor" opacity="0.4" />
          <stop offset="100%" stopColor="currentColor" opacity="0.8" />
        </radialGradient>
      </defs>
    </svg>
  )
}
