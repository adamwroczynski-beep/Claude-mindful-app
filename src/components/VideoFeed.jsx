import { useState, useRef, useEffect, useCallback } from 'react'
import VideoCard from './VideoCard'
import CategoryBar from './CategoryBar'
import './VideoFeed.css'

function VideoFeed({
  videos,
  categories,
  activeCategory,
  onCategoryChange,
  likedVideos,
  savedVideos,
  followedUsers,
  onLike,
  onSave,
  onFollow
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef(null)
  const startY = useRef(0)
  const currentY = useRef(0)

  const handleTouchStart = useCallback((e) => {
    startY.current = e.touches[0].clientY
    currentY.current = e.touches[0].clientY
  }, [])

  const handleTouchMove = useCallback((e) => {
    currentY.current = e.touches[0].clientY
  }, [])

  const handleTouchEnd = useCallback(() => {
    const diff = startY.current - currentY.current
    const threshold = 50

    if (Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < videos.length - 1) {
        setCurrentIndex(prev => prev + 1)
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1)
      }
    }
  }, [currentIndex, videos.length])

  const handleWheel = useCallback((e) => {
    if (isScrolling) return

    setIsScrolling(true)
    const direction = e.deltaY > 0 ? 1 : -1

    if (direction > 0 && currentIndex < videos.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else if (direction < 0 && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }

    setTimeout(() => setIsScrolling(false), 500)
  }, [currentIndex, videos.length, isScrolling])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'ArrowDown' && currentIndex < videos.length - 1) {
      setCurrentIndex(prev => prev + 1)
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
      setCurrentIndex(prev => prev - 1)
    }
  }, [currentIndex, videos.length])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    setCurrentIndex(0)
  }, [activeCategory])

  return (
    <div className="video-feed">
      <CategoryBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      <div
        ref={containerRef}
        className="video-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <div
          className="video-slider"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              isActive={index === currentIndex}
              isLiked={likedVideos.has(video.id)}
              isSaved={savedVideos.has(video.id)}
              isFollowing={followedUsers.has(video.user.id)}
              onLike={() => onLike(video.id)}
              onSave={() => onSave(video.id)}
              onFollow={() => onFollow(video.user.id)}
            />
          ))}
        </div>
      </div>

      <div className="video-progress">
        {videos.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default VideoFeed
