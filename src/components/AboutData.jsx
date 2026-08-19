import { CheckCircle2, Database, Info } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
const points = ['Data from 15 relevant communities','Posts & comments from 2021 – 2024','Mentions are de-duplicated & grouped','Upvotes indicate community support']
export default function AboutData() {
  const navigate = useNavigate()
  return <section className="panel about-panel"><div className="panel-heading"><Database size={18}/><h2>About This Data</h2><Info size={15}/></div><p>We analyze community discussions to find commonly mentioned approaches and experiences.</p><ul>{points.map((point) => <li key={point}><CheckCircle2 size={17}/><span>{point}</span></li>)}</ul><button className="text-link" type="button" onClick={() => navigate('/methodology')}>Learn more about our methodology →</button></section>
}
