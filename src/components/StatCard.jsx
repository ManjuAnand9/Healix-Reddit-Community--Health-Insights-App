import { CalendarDays, MessageCircle, MessagesSquare, TrendingUp, UsersRound } from 'lucide-react'

const iconMap = { CalendarDays, MessageCircle, MessagesSquare, TrendingUp, UsersRound }

export default function StatCard({ stat }) {
  const Icon = iconMap[stat.icon]
  return (
    <article className="stat-card">
      <div className={`stat-icon ${stat.tone}`}><Icon size={27} strokeWidth={1.9} /></div>
      <div>
        <div className="stat-value">{stat.value}</div>
        <div className="stat-label">{stat.label}</div>
        <div className="stat-note">{stat.note}</div>
      </div>
    </article>
  )
}
