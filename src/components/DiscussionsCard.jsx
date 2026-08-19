import { ArrowBigUp, ArrowRight, MessageCircle, MessageSquareText } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function DiscussionsCard({ discussions }) {
  const navigate = useNavigate()
  return (
    <section className="panel discussions-panel">
      <div className="panel-heading spread"><div className="heading-inline"><h2>Top Community Discussions</h2><MessageSquareText size={16}/></div><button className="mini-button" type="button" onClick={() => navigate('/discussions')}>View all</button></div>
      <div className="discussion-list">
        {discussions.map((item, index) => (
          <button className="discussion-row discussion-row-button" type="button" key={item.title} onClick={() => navigate(`/discussions/${index}`)}>
            <div className={`source-dot ${item.tone}`}>●</div><div className="discussion-copy"><h3>{item.title}</h3><p>{item.community} <span>•</span> {item.age}</p></div><div className="discussion-metrics"><span><ArrowBigUp size={16}/> {item.upvotes}</span><span><MessageCircle size={16}/> {item.comments}</span></div>
          </button>
        ))}
      </div>
      <button className="panel-footer-button" type="button" onClick={() => navigate('/discussions')}>View all discussions <ArrowRight size={17}/></button>
    </section>
  )
}
