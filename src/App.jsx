import { useState, useCallback } from 'react'
import { Routes, Route } from 'react-router-dom'
import VideoFeed from './components/VideoFeed'
import Navigation from './components/Navigation'
import Discover from './components/Discover'
import CreatePost from './components/CreatePost'
import Inbox from './components/Inbox'
import Profile from './components/Profile'
import { videos, categories } from './data/videos'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('home')
  const [activeCategory, setActiveCategory] = useState('all')
  const [likedVideos, setLikedVideos] = useState(new Set())
  const [savedVideos, setSavedVideos] = useState(new Set())
  const [followedUsers, setFollowedUsers] = useState(new Set())

  const filteredVideos = activeCategory === 'all'
    ? videos
    : videos.filter(v => v.category === activeCategory)

  const handleLike = useCallback((videoId) => {
    setLikedVideos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(videoId)) {
        newSet.delete(videoId)
      } else {
        newSet.add(videoId)
      }
      return newSet
    })
  }, [])

  const handleSave = useCallback((videoId) => {
    setSavedVideos(prev => {
      const newSet = new Set(prev)
      if (newSet.has(videoId)) {
        newSet.delete(videoId)
      } else {
        newSet.add(videoId)
      }
      return newSet
    })
  }, [])

  const handleFollow = useCallback((userId) => {
    setFollowedUsers(prev => {
      const newSet = new Set(prev)
      if (newSet.has(userId)) {
        newSet.delete(userId)
      } else {
        newSet.add(userId)
      }
      return newSet
    })
  }, [])

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return (
          <VideoFeed
            videos={filteredVideos}
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            likedVideos={likedVideos}
            savedVideos={savedVideos}
            followedUsers={followedUsers}
            onLike={handleLike}
            onSave={handleSave}
            onFollow={handleFollow}
          />
        )
      case 'discover':
        return <Discover videos={videos} categories={categories} />
      case 'create':
        return <CreatePost categories={categories} />
      case 'inbox':
        return <Inbox />
      case 'profile':
        return (
          <Profile
            savedVideos={savedVideos}
            likedVideos={likedVideos}
            videos={videos}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="app">
      <main className="app-content">
        {renderContent()}
      </main>
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
