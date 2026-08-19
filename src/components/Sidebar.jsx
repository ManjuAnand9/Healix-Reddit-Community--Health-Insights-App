import { Bell, Bookmark, Clock3, Home, MessageCircle, ShieldCheck, Sparkles, Star, TrendingUp } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'

const navItems = [
  { icon: Home, label: 'Overview', to: '/' },
  { icon: Star, label: 'Top Approaches', to: '/approaches' },
  { icon: MessageCircle, label: 'Discussions', to: '/discussions' },
  { icon: TrendingUp, label: 'Trending Topics', to: '/trending' },
  { icon: Bookmark, label: 'Saved Searches', to: '/saved' },
  { icon: Bell, label: 'Alerts', to: '/alerts' },
]

export default function Sidebar({ recentSearches, onRecentSearch }) {
  const navigate = useNavigate()
  const selectRecent = (search) => { onRecentSearch(search); navigate('/') }
  return (
    <aside className="sidebar">
      <Logo />
      <nav className="sidebar-nav" aria-label="Primary navigation">
        {navItems.map(({ icon: Icon, label, to }) => (
          <NavLink end={to === '/'} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} key={label} to={to}>
            <Icon size={20} strokeWidth={1.8} /><span>{label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-divider" />
      <section className="recent-block">
        <p className="sidebar-kicker">Recent searches</p>
        <div className="recent-list">
          {recentSearches.map((search) => (
            <button key={search} className="recent-item" onClick={() => selectRecent(search)} type="button"><Clock3 size={18} strokeWidth={1.7} /><span>{search}</span></button>
          ))}
        </div>
      </section>
      <div className="disclaimer-card">
        <div className="disclaimer-title"><ShieldCheck size={21}/><strong>Community insights, not medical advice.</strong></div>
        <p>Informational only. Always consult a healthcare professional.</p>
        <button type="button" className="text-link" onClick={() => navigate('/methodology')}>Learn more <Sparkles size={15}/></button>
      </div>
    </aside>
  )
}
