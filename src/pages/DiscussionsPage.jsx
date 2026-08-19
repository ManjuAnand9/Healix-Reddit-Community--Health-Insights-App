import { useNavigate } from 'react-router-dom'
import { ArrowBigUp, MessageCircle } from 'lucide-react'

export default function DiscussionsPage({ condition, data }) {
  const navigate = useNavigate()

  if (!data) {
    return (
      <div className="content simple-page">
        <div className="section-page-header">
          <div>
            <p className="eyebrow">Source discussions</p>
            <h1>Community Discussions for “{condition}”</h1>
            <p>
              Reddit API access is currently pending approval.
              Live community discussions will appear here once access is granted.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const discussions = data.discussions || []

  return (
    <div className="content simple-page">

      <div className="section-page-header">
        <div>
          <p className="eyebrow">Source discussions</p>

          <h1>
            Community Discussions for “{condition}”
          </h1>

          <p>
            Browse the sample conversations used by the dashboard.
          </p>
        </div>
      </div>

      <div className="discussion-page-list">

        {discussions.map((item, index) => (
          <button
            className="discussion-page-card"
            type="button"
            key={item.title}
            onClick={() => navigate(`/discussions/${index}`)}
          >

            <div>
              <span className="community-chip">
                {item.community}
              </span>

              <h3>{item.title}</h3>

              <p>{item.age}</p>
            </div>

            <div className="discussion-page-metrics">

              <span>
                <ArrowBigUp size={17} />
                {item.upvotes}
              </span>

              <span>
                <MessageCircle size={17} />
                {item.comments}
              </span>

            </div>

          </button>
        ))}

      </div>

    </div>
  )
}