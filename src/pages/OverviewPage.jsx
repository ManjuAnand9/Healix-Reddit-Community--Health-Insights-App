import { Bookmark, MoreVertical, Share2 } from 'lucide-react'
import ApproachesCard from '../components/ApproachesCard.jsx'
import DiscussionsCard from '../components/DiscussionsCard.jsx'
import StatCard from '../components/StatCard.jsx'
import TrendChart from '../components/TrendChart.jsx'
import AboutData from '../components/AboutData.jsx'

export default function OverviewPage({
  condition,
  data,
  saved,
  onToggleSaved,
  onShare,
  onOpenMore
}) {

  if (!data) {
    return (
      <div className="content">
        <section className="page-heading-row">
          <div>
            <h1>
              Results for <span>“{condition}”</span>
            </h1>
            <p>No mock dataset is currently available for this search.</p>
          </div>
        </section>

        <section
          className="card"
          style={{
            padding: '32px',
            marginTop: '20px'
          }}
        >
          <h2>Live data coming soon</h2>

          <p style={{ marginTop: '12px', lineHeight: '1.7' }}>
            Reddit API access is currently pending approval.
            Live community data will appear here once access is granted.
          </p>

          <p style={{ marginTop: '12px', lineHeight: '1.7' }}>
            For now, try one of the supported demo searches:
          </p>

          <p style={{ marginTop: '8px', fontWeight: '600' }}>
            disc bulge · sciatica · lower back pain · knee pain relief · neck pain
          </p>
        </section>
      </div>
    )
  }

  const {
    stats,
    approaches,
    discussions,
    trendValues
  } = data

  const discussionStat = stats.find(
    (stat) => stat.id === 'discussions'
  )

  return (
    <div className="content">

      <section className="page-heading-row">
        <div>
          <h1>
            Results for <span>“{condition}”</span>
          </h1>

          <p>
            Based on {discussionStat?.value || 'available'} discussions{' '}
            {discussionStat?.note
              ? discussionStat.note.toLowerCase()
              : 'from relevant communities'}
          </p>
        </div>

        <div className="page-actions">

          <button
            className={`secondary-button ${saved ? 'saved' : ''}`}
            onClick={onToggleSaved}
            type="button"
          >
            <Bookmark
              size={18}
              fill={saved ? 'currentColor' : 'none'}
            />

            {saved ? 'Saved' : 'Save Search'}
          </button>

          <button
            className="secondary-button"
            onClick={onShare}
            type="button"
          >
            <Share2 size={18} />
            Share
          </button>

          <button
            className="icon-button bordered"
            onClick={onOpenMore}
            type="button"
            aria-label="More options"
          >
            <MoreVertical size={20} />
          </button>

        </div>
      </section>

      <section className="stats-grid">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
          />
        ))}
      </section>

      <section className="middle-grid">

        <ApproachesCard
          approaches={approaches}
        />

        <DiscussionsCard
          discussions={discussions}
        />

      </section>

      <section className="bottom-grid">

        <TrendChart
          values={trendValues}
        />

        <AboutData />

      </section>

    </div>
  )
}