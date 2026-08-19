import { Link, useParams } from 'react-router-dom'

export default function ApproachDetailPage({ condition, data }) {
  const { name } = useParams()
  const decoded = decodeURIComponent(name)

  if (!data) {
    return (
      <div className="content simple-page">
        <Link className="back-link" to="/approaches">
          ← Back to approaches
        </Link>

        <div className="hero-card">
          <p className="eyebrow">Community-mentioned approach</p>
          <h1>{decoded}</h1>

          <p>
            Reddit API access is currently pending approval.
            Live community data will appear here once access is granted.
          </p>
        </div>
      </div>
    )
  }

  const approaches = data.approaches || []

  const item = approaches.find(
    (approach) => approach.name === decoded
  )

  if (!item) {
    return (
      <div className="content simple-page">
        <h1>Approach not found</h1>

        <p>
          This approach is not available for “{condition}”.
        </p>

        <Link to="/approaches">
          Back to approaches
        </Link>
      </div>
    )
  }

  return (
    <div className="content simple-page">

      <Link className="back-link" to="/approaches">
        ← Back to approaches
      </Link>

      <div className="hero-card">

        <p className="eyebrow">
          Community-mentioned approach
        </p>

        <h1>{item.name}</h1>

        <p>
          This approach was found in the sample community dataset
          for “{condition}”.
        </p>

      </div>

      <div className="detail-stats-row">

        <div>
          <strong>{item.mentions}</strong>
          <span>Mentions</span>
        </div>

        <div>
          <strong>{item.share}</strong>
          <span>Share of grouped mentions</span>
        </div>

      </div>

      <div className="panel prose-panel">

        <h2>What this means</h2>

        <p>
          This value represents how frequently this approach appears
          in the current sample dataset.
        </p>

        <p>
          Reddit API access is currently pending approval.
          Once access is approved, live community data will be
          integrated and reflected here automatically.
        </p>

      </div>

    </div>
  )
}