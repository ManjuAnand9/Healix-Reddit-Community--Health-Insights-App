export default function ProfilePage() {
  return <div className="content simple-page"><div className="section-page-header"><div><p className="eyebrow">Account</p><h1>Profile</h1><p>Frontend-only demo profile.</p></div></div><div className="panel profile-page-card"><div className="large-avatar">M</div><div><h2>Manjusha</h2><p>Healix demo user</p></div><button type="button" className="secondary-button" onClick={() => alert('Profile editing can be added next.')}>Edit profile</button></div></div>
}
