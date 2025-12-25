import { useState } from 'react'
import {
  Settings,
  Edit3,
  Grid3X3,
  Bookmark,
  Heart,
  Share2,
  Award,
  Flame,
  Calendar,
  MapPin
} from 'lucide-react'
import './Profile.css'

function Profile({ savedVideos, likedVideos, videos }) {
  const [activeTab, setActiveTab] = useState('posts')

  const currentUser = {
    id: 999,
    username: 'mindful_you',
    displayName: 'Your Journey',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
    bio: 'On a journey to inner peace. Sharing daily mindfulness moments.',
    location: 'San Francisco, CA',
    joinedDate: 'January 2024',
    followers: 2456,
    following: 189,
    likes: 12500,
    streak: 21,
    badges: ['Early Adopter', 'Meditation Master', '30 Day Streak']
  }

  const userPosts = videos.slice(0, 4)
  const savedPosts = videos.filter(v => savedVideos.has(v.id))
  const likedPosts = videos.filter(v => likedVideos.has(v.id))

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  const renderPosts = (posts) => {
    if (posts.length === 0) {
      return (
        <div className="empty-state">
          <p>No videos yet</p>
        </div>
      )
    }

    return (
      <div className="posts-grid">
        {posts.map((video) => (
          <div key={video.id} className="post-thumbnail">
            <img src={video.thumbnail} alt={video.description} />
            <div className="post-stats">
              <Heart size={12} fill="white" />
              <span>{formatNumber(video.likes)}</span>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="profile-page">
      <div className="profile-header">
        <button className="header-btn">
          <Share2 size={22} />
        </button>
        <h1 className="header-title">Profile</h1>
        <button className="header-btn">
          <Settings size={22} />
        </button>
      </div>

      <div className="profile-info">
        <div className="avatar-container">
          <img
            src={currentUser.avatar}
            alt={currentUser.displayName}
            className="profile-avatar"
          />
          <button className="edit-avatar">
            <Edit3 size={14} />
          </button>
        </div>

        <h2 className="profile-name">{currentUser.displayName}</h2>
        <p className="profile-username">@{currentUser.username}</p>

        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-value">{formatNumber(currentUser.following)}</span>
            <span className="stat-label">Following</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">{formatNumber(currentUser.followers)}</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">{formatNumber(currentUser.likes)}</span>
            <span className="stat-label">Likes</span>
          </div>
        </div>

        <p className="profile-bio">{currentUser.bio}</p>

        <div className="profile-meta">
          <span className="meta-item">
            <MapPin size={14} />
            {currentUser.location}
          </span>
          <span className="meta-item">
            <Calendar size={14} />
            Joined {currentUser.joinedDate}
          </span>
        </div>

        <button className="edit-profile-btn">Edit Profile</button>
      </div>

      <div className="streak-card">
        <div className="streak-icon">
          <Flame size={24} />
        </div>
        <div className="streak-info">
          <span className="streak-count">{currentUser.streak} Day Streak</span>
          <span className="streak-text">Keep the mindfulness going!</span>
        </div>
      </div>

      <div className="badges-section">
        <h3 className="section-title">Achievements</h3>
        <div className="badges-list">
          {currentUser.badges.map((badge, index) => (
            <div key={index} className="badge-item">
              <Award size={18} />
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="content-tabs">
        <button
          className={`content-tab ${activeTab === 'posts' ? 'active' : ''}`}
          onClick={() => setActiveTab('posts')}
        >
          <Grid3X3 size={20} />
        </button>
        <button
          className={`content-tab ${activeTab === 'saved' ? 'active' : ''}`}
          onClick={() => setActiveTab('saved')}
        >
          <Bookmark size={20} />
        </button>
        <button
          className={`content-tab ${activeTab === 'liked' ? 'active' : ''}`}
          onClick={() => setActiveTab('liked')}
        >
          <Heart size={20} />
        </button>
      </div>

      <div className="content-section">
        {activeTab === 'posts' && renderPosts(userPosts)}
        {activeTab === 'saved' && renderPosts(savedPosts)}
        {activeTab === 'liked' && renderPosts(likedPosts)}
      </div>
    </div>
  )
}

export default Profile
