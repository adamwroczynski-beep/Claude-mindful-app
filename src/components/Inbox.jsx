import { useState } from 'react'
import { Bell, Heart, MessageCircle, UserPlus, Sparkles, Settings } from 'lucide-react'
import './Inbox.css'

function Inbox() {
  const [activeTab, setActiveTab] = useState('activity')

  const activities = [
    {
      id: 1,
      type: 'like',
      user: {
        name: 'Sarah Williams',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
      },
      content: 'liked your morning meditation video',
      time: '2m ago',
      thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=100&h=150&fit=crop'
    },
    {
      id: 2,
      type: 'follow',
      user: {
        name: 'James Liu',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
      },
      content: 'started following you',
      time: '15m ago'
    },
    {
      id: 3,
      type: 'comment',
      user: {
        name: 'Maya Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
      },
      content: 'commented: "This breathing technique changed my life!"',
      time: '1h ago',
      thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=100&h=150&fit=crop'
    },
    {
      id: 4,
      type: 'milestone',
      content: 'You reached 1,000 followers! Keep sharing mindfulness.',
      time: '3h ago'
    },
    {
      id: 5,
      type: 'like',
      user: {
        name: 'Luna Breathwork',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop'
      },
      content: 'and 24 others liked your yoga flow video',
      time: '5h ago',
      thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=100&h=150&fit=crop'
    },
    {
      id: 6,
      type: 'follow',
      user: {
        name: 'Dr. Emma Sleep',
        avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop'
      },
      content: 'started following you',
      time: '1d ago'
    }
  ]

  const messages = [
    {
      id: 1,
      user: {
        name: 'Mindfulness Community',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        verified: true
      },
      lastMessage: 'Welcome to our weekly meditation challenge!',
      time: '10m ago',
      unread: true
    },
    {
      id: 2,
      user: {
        name: 'Maya Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
        verified: true
      },
      lastMessage: 'Would love to collaborate on a breathing series!',
      time: '2h ago',
      unread: true
    },
    {
      id: 3,
      user: {
        name: 'Grace Yang',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
        verified: true
      },
      lastMessage: 'Thanks for the yoga tips!',
      time: '1d ago',
      unread: false
    }
  ]

  const getActivityIcon = (type) => {
    switch (type) {
      case 'like':
        return <Heart size={16} fill="#ff6b81" color="#ff6b81" />
      case 'comment':
        return <MessageCircle size={16} color="var(--primary)" />
      case 'follow':
        return <UserPlus size={16} color="var(--success)" />
      case 'milestone':
        return <Sparkles size={16} color="var(--warning)" />
      default:
        return <Bell size={16} />
    }
  }

  return (
    <div className="inbox-page">
      <div className="inbox-header">
        <h1 className="inbox-title">Inbox</h1>
        <button className="settings-btn">
          <Settings size={22} />
        </button>
      </div>

      <div className="inbox-tabs">
        <button
          className={`inbox-tab ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
        >
          Activity
        </button>
        <button
          className={`inbox-tab ${activeTab === 'messages' ? 'active' : ''}`}
          onClick={() => setActiveTab('messages')}
        >
          Messages
          <span className="unread-badge">2</span>
        </button>
      </div>

      {activeTab === 'activity' && (
        <div className="activity-list">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon">
                {activity.type === 'milestone' ? (
                  <div className="milestone-icon">
                    {getActivityIcon(activity.type)}
                  </div>
                ) : (
                  <img
                    src={activity.user.avatar}
                    alt={activity.user?.name}
                    className="activity-avatar"
                  />
                )}
                <div className="activity-type-badge">
                  {getActivityIcon(activity.type)}
                </div>
              </div>
              <div className="activity-content">
                <p className="activity-text">
                  {activity.user && <strong>{activity.user.name}</strong>} {activity.content}
                </p>
                <span className="activity-time">{activity.time}</span>
              </div>
              {activity.thumbnail && (
                <img
                  src={activity.thumbnail}
                  alt="Video thumbnail"
                  className="activity-thumbnail"
                />
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'messages' && (
        <div className="messages-list">
          {messages.map((message) => (
            <div key={message.id} className={`message-item ${message.unread ? 'unread' : ''}`}>
              <img
                src={message.user.avatar}
                alt={message.user.name}
                className="message-avatar"
              />
              <div className="message-content">
                <div className="message-header">
                  <span className="message-name">{message.user.name}</span>
                  <span className="message-time">{message.time}</span>
                </div>
                <p className="message-preview">{message.lastMessage}</p>
              </div>
              {message.unread && <div className="unread-dot" />}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Inbox
