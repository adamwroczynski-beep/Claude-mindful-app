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
  const [touchDelta, setTouchDelta] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const containerRef = useRef(null)
  const startY = useRef(0)
  const startX = useRef(0)
  const currentY = useRef(0)
  const startTime = useRef(0)
  const isVerticalSwipe = useRef(null)

  const handleTouchStart = useCallback((e) => {
    startY.current = e.touches[0].clientY
    startX.current = e.touches[0].clientX
    currentY.current = e.touches[0].clientY
    startTime.current = Date.now()
    isVerticalSwipe.current = null
    setTouchDelta(0)
  }, [])

  const handleTouchMove = useCallback((e) => {
    const deltaX = Math.abs(e.touches[0].clientX - startX.current)
    const deltaY = e.touches[0].clientY - startY.current

    // Determine swipe direction on first significant movement
    if (isVerticalSwipe.current === null && (Math.abs(deltaY) > 10 || deltaX > 10)) {
      isVerticalSwipe.current = Math.abs(deltaY) > deltaX
    }

    // Only handle vertical swipes
    if (isVerticalSwipe.current) {
      currentY.current = e.touches[0].clientY

      // Add resistance at boundaries
      let delta = deltaY
      if ((currentIndex === 0 && deltaY > 0) ||
          (currentIndex === videos.length - 1 && deltaY < 0)) {
        delta = deltaY * 0.3 // Rubber band effect

        // Pull to refresh at top
        if (currentIndex === 0 && deltaY > 50) {
          setIsRefreshing(true)
        }
      }

      setTouchDelta(delta)
    }
  }, [currentIndex, videos.length])

  const handleTouchEnd = useCallback(() => {
    const diff = startY.current - currentY.current
    const timeDiff = Date.now() - startTime.current
    const velocity = Math.abs(diff) / timeDiff

    // Lower threshold for fast swipes (velocity-based)
    const threshold = velocity > 0.5 ? 30 : 80

    if (isVerticalSwipe.current && Math.abs(diff) > threshold) {
      if (diff > 0 && currentIndex < videos.length - 1) {
        setCurrentIndex(prev => prev + 1)
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex(prev => prev - 1)
      }
    }

    // Handle pull to refresh
    if (isRefreshing) {
      setTimeout(() => setIsRefreshing(false), 1000)
    }

    setTouchDelta(0)
    isVerticalSwipe.current = null
  }, [currentIndex, videos.length, isRefreshing])

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

  // Calculate transform with touch delta for real-time feedback
  const getTransform = () => {
    const baseTransform = currentIndex * 100
    const deltaPercent = (touchDelta / window.innerHeight) * 100
    return `translateY(-${baseTransform - deltaPercent}%)`
  }

  return (
    <div className="video-feed">
      <CategoryBar
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />

      {isRefreshing && (
        <div className="refresh-indicator">
          <div className="refresh-spinner" />
          <span>Refreshing...</span>
        </div>
      )}

      <div
        ref={containerRef}
        className="video-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onWheel={handleWheel}
      >
        <div
          className={`video-slider ${touchDelta === 0 ? 'smooth' : ''}`}
          style={{ transform: getTransform() }}
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
