import { useNavigate } from 'react-router-dom'

export default function ApproachesPage({ condition, data }) {
  const navigate = useNavigate()

  if (!data) {
    return (
      <div className="content simple-page">
        <div className="section-page-header">
          <div>
            <p className="eyebrow">Community patterns</p>
            <h1>Top Approaches for “{condition}”</h1>
            <p>
              Reddit API access is currently pending approval.
              Live community data will appear here once access is granted.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const approaches = data.approaches || []

  return (
    <div className="content simple-page">
      <div className="section-page-header">
        <div>
          <p className="eyebrow">Community patterns</p>

          <h1>
            Top Approaches for “{condition}”
          </h1>

          <p>
            Explore commonly mentioned approaches in the sample dataset.
          </p>
        </div>
      </div>

      <div className="list-page-grid">
        {approaches.map((item, index) => (
          <button
            className="detail-card"
            type="button"
            key={item.name}
            onClick={() =>
              navigate(`/approaches/${encodeURIComponent(item.name)}`)
            }
          >
            <span className="detail-rank">
              #{index + 1}
            </span>

            <div>
              <h3>{item.name}</h3>

              <p>
                {item.mentions} mentions · {item.share} of grouped mentions
              </p>
            </div>

            <span className="detail-arrow">
              →
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}