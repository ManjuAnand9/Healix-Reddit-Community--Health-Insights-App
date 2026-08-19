import { Info } from 'lucide-react'

function buildPath(values, width, height, padding) {
  const max = Math.max(...values)
  const min = 0
  const xStep = (width - padding.left - padding.right) / (values.length - 1)
  const yScale = (value) => {
    const usable = height - padding.top - padding.bottom
    return padding.top + usable - ((value - min) / (max - min)) * usable
  }
  return values.map((value, index) => {
    const x = padding.left + index * xStep
    const y = yScale(value)
    return `${index === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`
  }).join(' ')
}

export default function TrendChart({ values }) {
  const width = 860
  const height = 260
  const padding = { top: 18, right: 18, bottom: 42, left: 52 }
  const path = buildPath(values, width, height, padding)
  const areaPath = `${path} L ${width - padding.right} ${height - padding.bottom} L ${padding.left} ${height - padding.bottom} Z`
  const xLabels = ['Jan 2021', 'Jul 2021', 'Jan 2022', 'Jul 2022', 'Jan 2023', 'Jul 2023', 'Jan 2024', 'Jul 2024']

  return (
    <section className="panel chart-panel">
      <div className="panel-heading spread">
        <div className="heading-inline"><h2>Mentions Over Time</h2><Info size={16} /></div>
        <select className="chart-select" defaultValue="monthly" aria-label="Chart interval">
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </div>

      <div className="chart-wrap">
        <svg viewBox={`0 0 ${width} ${height}`} className="trend-chart" role="img" aria-label="Mentions over time chart">
          <defs>
            <linearGradient id="areaGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#2f8cff" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2f8cff" stopOpacity="0.01" />
            </linearGradient>
          </defs>
          {[0, 250, 500, 750, 1000].map((label, idx) => {
            const y = height - padding.bottom - idx * ((height - padding.top - padding.bottom) / 4)
            return (
              <g key={label}>
                <line x1={padding.left} x2={width - padding.right} y1={y} y2={y} stroke="#e8edf5" strokeWidth="1" />
                <text x="8" y={y + 4} className="axis-text">{label === 1000 ? '1K' : label}</text>
              </g>
            )
          })}
          <path d={areaPath} fill="url(#areaGradient)" />
          <path d={path} fill="none" stroke="#2f8cff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          {values.map((value, index) => {
            const max = Math.max(...values)
            const xStep = (width - padding.left - padding.right) / (values.length - 1)
            const x = padding.left + index * xStep
            const y = padding.top + (height - padding.top - padding.bottom) - (value / max) * (height - padding.top - padding.bottom)
            return <circle key={index} cx={x} cy={y} r="2.2" fill="#2f8cff" />
          })}
          {xLabels.map((label, index) => {
            const x = padding.left + index * ((width - padding.left - padding.right) / (xLabels.length - 1))
            return <text key={label} x={x} y={height - 12} textAnchor={index === 0 ? 'start' : index === xLabels.length - 1 ? 'end' : 'middle'} className="axis-text">{label}</text>
          })}
        </svg>
      </div>
    </section>
  )
}
