export function RobotIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <rect x="7" y="7" width="2" height="2" />
      <rect x="15" y="7" width="2" height="2" />
      <path d="M9 15h6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  )
}

export function CoinsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M8 12c0-2.2 1.8-4 4-4s4 1.8 4 4" />
      <path d="M8 12c0 2.2 1.8 4 4 4s4-1.8 4-4" />
      <line x1="12" y1="8" x2="12" y2="16" />
    </svg>
  )
}

export function VaultIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="7" width="18" height="12" rx="2" ry="2" />
      <circle cx="12" cy="13" r="2" />
      <path d="M12 9v8" />
      <rect x="8" y="3" width="8" height="4" rx="1" ry="1" />
    </svg>
  )
}

export function TrophyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 9H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2" />
      <path d="M18 9h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
      <path d="M6 13c0-3 2-5 6-5s6 2 6 5" />
      <path d="M9 19h6" />
      <path d="M12 22v-2" />
    </svg>
  )
}

export function LockIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}
