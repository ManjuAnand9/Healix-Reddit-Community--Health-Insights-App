export default function Logo() {
  return (
    <div className="brand">
      <div className="brand-mark" aria-hidden="true">
        <svg viewBox="0 0 52 52" role="img">
          <path d="M26 46C20 41 7 32 7 19.5C7 12.6 12.3 8 18.2 8c4.1 0 6.8 2.1 7.8 4.3C27 10.1 29.7 8 33.8 8 39.7 8 45 12.6 45 19.5 45 32 32 41 26 46Z" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinejoin="round"/>
          <path d="M10.5 27h8l3-8.2 5.3 16.3 4-11 2.2 3h8.5" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div>
        <div className="brand-name">Healix</div>
        <div className="brand-subtitle">Community health insights</div>
      </div>
    </div>
  )
}
