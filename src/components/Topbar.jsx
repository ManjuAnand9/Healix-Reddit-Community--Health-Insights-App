import { Bell, Moon, Search, Sun } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Topbar({ query, setQuery, onSearch, theme, onToggleTheme }) {
  const navigate = useNavigate()
  const submit = (event) => { event.preventDefault(); onSearch(); navigate('/') }
  return (
    <header className="topbar">
      <form className="search-form" onSubmit={submit}>
        <Search className="search-icon" size={20}/>
        <input aria-label="Search a health condition" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search a health condition"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="topbar-actions">
        <button className="icon-button" type="button" aria-label="Toggle theme" title="Toggle theme" onClick={onToggleTheme}>{theme === 'dark' ? <Sun size={20}/> : <Moon size={20}/>}</button>
        <button className="icon-button notification-button" type="button" aria-label="Notifications" onClick={() => navigate('/notifications')}><Bell size={20}/><span className="notification-badge">3</span></button>
        <button className="profile profile-button" type="button" onClick={() => navigate('/profile')}><div className="avatar" aria-hidden="true">M</div><span>Manjusha</span><span className="chevron">›</span></button>
      </div>
    </header>
  )
}
