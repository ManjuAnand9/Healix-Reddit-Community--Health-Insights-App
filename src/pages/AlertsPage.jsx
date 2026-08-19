import { BellRing } from 'lucide-react'
export default function AlertsPage() {
  return <div className="content simple-page"><div className="section-page-header"><div><p className="eyebrow">Notifications</p><h1>Alerts</h1><p>Configure future topic alerts here.</p></div></div><div className="panel alert-card"><BellRing size={28}/><div><h2>No active alerts</h2><p>Live alerting needs a backend or scheduled service. This page is ready for that later.</p></div><button type="button" className="secondary-button" onClick={() => alert('Alert creation will be enabled when a backend is connected.')}>Create alert</button></div></div>
}
