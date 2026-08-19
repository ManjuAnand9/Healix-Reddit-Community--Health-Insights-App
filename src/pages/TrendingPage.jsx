import TrendChart from '../components/TrendChart.jsx'

const topics = [
  'Lower back pain',
  'Sciatica',
  'Disc bulge',
  'Neck pain',
  'Knee pain',
  'Sleep posture'
]

export default function TrendingPage({ condition, data }) {

  if (!data) {
    return (
      <div className="content simple-page">
        <div className="section-page-header">
          <div>
            <p className="eyebrow">Activity</p>

            <h1>Trending Topics</h1>

            <p>
              Reddit API access is currently pending approval.
              Live trend data will appear here once access is granted.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const trendValues = data.trendValues || []

  return (
    <div className="content simple-page">

      <div className="section-page-header">
        <div>
          <p className="eyebrow">Activity</p>

          <h1>Trending Topics</h1>

          <p>
            Discussion activity for “{condition}”
          </p>
        </div>
      </div>

      <div className="panel topic-grid">

        {topics.map((topic, i) => (
          <div
            className="topic-card"
            key={topic}
          >
            <strong>{topic}</strong>

            <span>
              +{12 + i * 7}% this month
            </span>
          </div>
        ))}

      </div>

      <TrendChart values={trendValues} />

    </div>
  )
}