import { Link } from 'react-router-dom'
export default function NotFoundPage() { return <div className="content simple-page"><div className="empty-state"><h1>404</h1><p>That Healix page does not exist.</p><Link className="primary-link-button" to="/">Go to Overview</Link></div></div> }
