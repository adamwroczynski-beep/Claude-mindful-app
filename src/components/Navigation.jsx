import { Home, Search, PlusSquare, MessageCircle, User } from 'lucide-react'
import './Navigation.css'

function Navigation({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'discover', icon: Search, label: 'Discover' },
    { id: 'create', icon: PlusSquare, label: 'Create' },
    { id: 'inbox', icon: MessageCircle, label: 'Inbox' },
    { id: 'profile', icon: User, label: 'Profile' }
  ]

  return (
    <nav className="navigation">
      {tabs.map((tab) => {
        const IconComponent = tab.icon
        const isActive = activeTab === tab.id
        const isCreate = tab.id === 'create'

        return (
          <button
            key={tab.id}
            className={`nav-item ${isActive ? 'active' : ''} ${isCreate ? 'create-btn' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <div className={`nav-icon ${isCreate ? 'create-icon' : ''}`}>
              <IconComponent size={isCreate ? 24 : 22} />
            </div>
            <span className="nav-label">{tab.label}</span>
          </button>
        )
      })}
    </nav>
  )
}

export default Navigation
