import { Link, useParams } from 'react-router-dom'

export default function DiscussionDetailPage({ condition, data }) {
  const { id } = useParams()

  if (!data) {
    return (
      <div className="content simple-page">
        <Link className="back-link" to="/discussions">
          ← Back to discussions
        </Link>

        <div className="hero-card">
          <p className="eyebrow">Community discussion</p>
          <h1>No live discussion data yet</h1>

          <p>
            Reddit API access is currently pending approval.
            Live community discussions will appear here once access is granted.
          </p>
        </div>
      </div>
    )
  }

  const discussions = data.discussions || []
  const item = discussions[Number(id)]

  if (!item) {
    return (
      <div className="content simple-page">
        <h1>Discussion not found</h1>

        <p>
          This discussion is not available for “{condition}”.
        </p>

        <Link to="/discussions">
          Back to discussions
        </Link>
      </div>
    )
  }

  return (
    <div className="content simple-page">

      <Link className="back-link" to="/discussions">
        ← Back to discussions
      </Link>

      <div className="hero-card">

        <span className="community-chip">
          {item.community}
        </span>

        <h1>{item.title}</h1>

        <p>
          {item.age} · {item.upvotes} upvotes · {item.comments} comments
        </p>

        <p>
          Search topic: “{condition}”
        </p>

      </div>

      <div className="panel prose-panel">

        <h2>Discussion preview</h2>

        <p>
          Reddit API access is currently pending approval.
          Once access is approved, live community data and source links
          will be integrated here automatically.
        </p>

        <button
          className="primary-inline-button"
          type="button"
          onClick={() =>
            alert(
              'Source links will be enabled when live Reddit API data is connected.'
            )
          }
        >
          Open source discussion
        </button>

      </div>

    </div>
  )
}