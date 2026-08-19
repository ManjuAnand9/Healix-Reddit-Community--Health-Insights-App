import { ArrowRight, Info } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function ApproachesCard({ approaches }) {
  const navigate = useNavigate()
  const max = Math.max(...approaches.map((item) => item.mentions))
  return (
    <section className="panel approaches-panel">
      <div className="panel-heading"><h2>Top 10 Community Mentioned Approaches</h2><Info size={16}/></div>
      <div className="approach-list">
        {approaches.map((item, index) => (
          <button className="approach-row approach-row-button" type="button" key={item.name} onClick={() => navigate(`/approaches/${encodeURIComponent(item.name)}`)}>
            <span className="rank">{index + 1}</span><span className="approach-name">{item.name}</span><div className="bar-track" aria-hidden="true"><div className="bar-fill" style={{ width: `${Math.max(9, (item.mentions / max) * 100)}%` }}/></div><span className="mentions">{item.mentions} mentions</span><span className="percent-pill">{item.share}</span>
          </button>
        ))}
      </div>
      <button className="panel-footer-button" type="button" onClick={() => navigate('/approaches')}>View all 142 approaches <ArrowRight size={17}/></button>
    </section>
  )
}
