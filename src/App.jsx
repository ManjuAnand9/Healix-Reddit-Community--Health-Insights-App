import { useEffect, useMemo, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Sidebar from './components/Sidebar.jsx'
import Topbar from './components/Topbar.jsx'
import OverviewPage from './pages/OverviewPage.jsx'
import ApproachesPage from './pages/ApproachesPage.jsx'
import ApproachDetailPage from './pages/ApproachDetailPage.jsx'
import DiscussionsPage from './pages/DiscussionsPage.jsx'
import DiscussionDetailPage from './pages/DiscussionDetailPage.jsx'
import TrendingPage from './pages/TrendingPage.jsx'
import SavedSearchesPage from './pages/SavedSearchesPage.jsx'
import AlertsPage from './pages/AlertsPage.jsx'
import MethodologyPage from './pages/MethodologyPage.jsx'
import NotificationsPage from './pages/NotificationsPage.jsx'
import ProfilePage from './pages/ProfilePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import { getConditionData } from './data/mockData.js'

const initialRecent = ['disc bulge', 'sciatica', 'lower back pain', 'knee pain relief', 'neck pain']

export default function App() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('disc bulge')
  const [activeSearch, setActiveSearch] = useState('disc bulge')
  const [recentSearches, setRecentSearches] = useState(() => JSON.parse(localStorage.getItem('healix-recent') || 'null') || initialRecent)
  const [savedSearches, setSavedSearches] = useState(() => JSON.parse(localStorage.getItem('healix-saved') || '[]'))
  const [theme, setTheme] = useState(() => localStorage.getItem('healix-theme') || 'light')

  const condition = useMemo(() => activeSearch.trim() || 'disc bulge', [activeSearch])
  const currentData = useMemo(
    () => getConditionData(condition),
    [condition]
  )
  const saved = savedSearches.some((item) => item.toLowerCase() === condition.toLowerCase())

  useEffect(() => { localStorage.setItem('healix-recent', JSON.stringify(recentSearches)) }, [recentSearches])
  useEffect(() => { localStorage.setItem('healix-saved', JSON.stringify(savedSearches)) }, [savedSearches])
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('healix-theme', theme) }, [theme])

  const runSearch = (forcedValue) => {
    const next = (forcedValue ?? query).trim()
    if (!next) return
    setQuery(next)
    setActiveSearch(next)
    setRecentSearches((current) => [next, ...current.filter((item) => item.toLowerCase() !== next.toLowerCase())].slice(0, 5))
  }

  const toggleSaved = () => {
    setSavedSearches((current) => saved ? current.filter((item) => item.toLowerCase() !== condition.toLowerCase()) : [condition, ...current])
  }

  const share = async () => {
    const text = `Healix community insights for ${condition}`
    const url = window.location.href
    try {
      if (navigator.share) await navigator.share({ title: 'Healix', text, url })
      else { await navigator.clipboard.writeText(`${text} — ${url}`); alert('Link copied to clipboard.') }
    } catch { /* user cancelled */ }
  }

  const openMore = () => {
    const choice = window.prompt('More options:\n1 = Methodology\n2 = Saved Searches\n3 = Copy page link')
    if (choice === '1') navigate('/methodology')
    if (choice === '2') navigate('/saved')
    if (choice === '3') navigator.clipboard?.writeText(window.location.href).then(() => alert('Page link copied.'))
  }

  const searchFromSaved = (value) => { runSearch(value); navigate('/') }
  const removeSaved = (value) => setSavedSearches((current) => current.filter((item) => item !== value))

  return (
    <div className="app-shell">
      <Sidebar recentSearches={recentSearches} onRecentSearch={runSearch} />
      <main className="main-area">
        <Topbar query={query} setQuery={setQuery} onSearch={runSearch} theme={theme} onToggleTheme={() => setTheme((t) => t === 'light' ? 'dark' : 'light')} />
        <Routes>
          <Route
            path="/"
            element={
              <OverviewPage
                condition={condition}
                data={currentData}
                saved={saved}
                onToggleSaved={toggleSaved}
                onShare={share}
                onOpenMore={openMore}
              />
            }
          /> <Route
            path="/approaches"
            element={
              <ApproachesPage
                condition={condition}
                data={currentData}
              />
            }
          />
          <Route
            path="/approaches/:name"
            element={
              <ApproachDetailPage
                condition={condition}
                data={currentData}
              />
            }
          />

          <Route
            path="/discussions"
            element={
              <DiscussionsPage
                condition={condition}
                data={currentData}
              />
            }
          />

          <Route
            path="/discussions/:id"
            element={
              <DiscussionDetailPage
                condition={condition}
                data={currentData}
              />
            }
          />

          <Route
            path="/trending"
            element={
              <TrendingPage
                condition={condition}
                data={currentData}
              />
            }
          />
          <Route path="/saved" element={<SavedSearchesPage savedSearches={savedSearches} onSearch={searchFromSaved} onRemove={removeSaved} />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}
