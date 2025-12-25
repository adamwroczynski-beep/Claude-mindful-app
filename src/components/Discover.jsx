import { useState } from 'react'
import { Search, TrendingUp, Hash, Users } from 'lucide-react'
import { trendingTags } from '../data/videos'
import './Discover.css'

function Discover({ videos, categories }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('trending')

  const filteredVideos = videos.filter(
    video =>
      video.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const topCreators = [...new Map(videos.map(v => [v.user.id, v.user])).values()]
    .sort((a, b) => b.followers - a.followers)
    .slice(0, 6)

  return (
    <div className="discover-page">
      <div className="discover-header">
        <h1 className="discover-title">Discover</h1>
        <p className="discover-subtitle">Find your peace</p>
      </div>

      <div className="search-container">
        <Search size={18} className="search-icon" />
        <input
          type="text"
          placeholder="Search videos, creators, sounds..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="section-tabs">
        <button
          className={`section-tab ${activeSection === 'trending' ? 'active' : ''}`}
          onClick={() => setActiveSection('trending')}
        >
          <TrendingUp size={16} />
          Trending
        </button>
        <button
          className={`section-tab ${activeSection === 'tags' ? 'active' : ''}`}
          onClick={() => setActiveSection('tags')}
        >
          <Hash size={16} />
          Tags
        </button>
        <button
          className={`section-tab ${activeSection === 'creators' ? 'active' : ''}`}
          onClick={() => setActiveSection('creators')}
        >
          <Users size={16} />
          Creators
        </button>
      </div>

      {activeSection === 'trending' && (
        <div className="trending-section">
          <h2 className="section-title">Trending Now</h2>
          <div className="video-grid">
            {(searchQuery ? filteredVideos : videos).slice(0, 6).map((video) => (
              <div key={video.id} className="video-thumbnail">
                <img src={video.thumbnail} alt={video.description} />
                <div className="thumbnail-overlay">
                  <span className="view-count">{(video.likes / 1000).toFixed(1)}K</span>
                </div>
                <div className="thumbnail-user">
                  <img src={video.user.avatar} alt={video.user.displayName} />
                  <span>@{video.user.username}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'tags' && (
        <div className="tags-section">
          <h2 className="section-title">Popular Tags</h2>
          <div className="tags-grid">
            {trendingTags.map((tag, index) => (
              <div key={tag} className="tag-card">
                <Hash size={24} className="tag-icon" />
                <span className="tag-name">{tag}</span>
                <span className="tag-count">{Math.floor(Math.random() * 900 + 100)}K posts</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'creators' && (
        <div className="creators-section">
          <h2 className="section-title">Top Creators</h2>
          <div className="creators-list">
            {topCreators.map((creator) => (
              <div key={creator.id} className="creator-card">
                <img src={creator.avatar} alt={creator.displayName} className="creator-avatar" />
                <div className="creator-info">
                  <span className="creator-name">{creator.displayName}</span>
                  <span className="creator-username">@{creator.username}</span>
                </div>
                <div className="creator-stats">
                  <span className="follower-count">{(creator.followers / 1000).toFixed(0)}K</span>
                  <span className="follower-label">followers</span>
                </div>
                <button className="follow-btn">Follow</button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="categories-section">
        <h2 className="section-title">Browse Categories</h2>
        <div className="category-cards">
          {categories.slice(1).map((category) => (
            <div key={category.id} className="category-card">
              <span className="category-name">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Discover
