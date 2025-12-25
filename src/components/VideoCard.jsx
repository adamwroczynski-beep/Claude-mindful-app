import { useState, useRef, useEffect } from 'react'
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  Music,
  Play,
  Pause,
  Volume2,
  VolumeX,
  BadgeCheck,
  Plus
} from 'lucide-react'
import './VideoCard.css'

function VideoCard({
  video,
  isActive,
  isLiked,
  isSaved,
  isFollowing,
  onLike,
  onSave,
  onFollow
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [progress, setProgress] = useState(0)
  const [showHeart, setShowHeart] = useState(false)
  const videoRef = useRef(null)
  const lastTap = useRef(0)

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().catch(() => {})
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
        setIsPlaying(false)
      }
    }
  }, [isActive])

  const handleVideoClick = (e) => {
    const now = Date.now()
    if (now - lastTap.current < 300) {
      onLike()
      setShowHeart(true)
      setTimeout(() => setShowHeart(false), 1000)
    } else {
      if (isPlaying) {
        videoRef.current.pause()
        setIsPlaying(false)
      } else {
        videoRef.current.play()
        setIsPlaying(true)
      }
    }
    lastTap.current = now
  }

  const toggleMute = (e) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M'
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K'
    return num.toString()
  }

  return (
    <div className="video-card">
      <video
        ref={videoRef}
        className="video-player"
        src={video.videoUrl}
        poster={video.thumbnail}
        loop
        muted={isMuted}
        playsInline
        onClick={handleVideoClick}
        onTimeUpdate={handleTimeUpdate}
      />

      <div className="video-overlay" onClick={handleVideoClick}>
        {!isPlaying && (
          <div className="play-button">
            <Play size={60} fill="white" />
          </div>
        )}

        {showHeart && (
          <div className="double-tap-heart">
            <Heart size={100} fill="#ff6b81" color="#ff6b81" />
          </div>
        )}
      </div>

      <div className="video-progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="video-info">
        <div className="user-info">
          <img
            src={video.user.avatar}
            alt={video.user.displayName}
            className="user-avatar"
          />
          <div className="user-details">
            <div className="username-row">
              <span className="display-name">{video.user.displayName}</span>
              {video.user.verified && <BadgeCheck size={14} className="verified-badge" />}
            </div>
            <span className="username">@{video.user.username}</span>
          </div>
          {!isFollowing && (
            <button className="follow-button" onClick={onFollow}>
              <Plus size={14} />
              Follow
            </button>
          )}
        </div>

        <p className="video-description">{video.description}</p>

        <div className="video-tags">
          {video.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>

        <div className="audio-info">
          <Music size={12} />
          <span className="audio-text">Original sound - {video.user.displayName}</span>
        </div>
      </div>

      <div className="video-actions">
        <button className="action-button" onClick={onLike}>
          <Heart
            size={28}
            className={`action-icon ${isLiked ? 'liked' : ''}`}
            fill={isLiked ? '#ff6b81' : 'none'}
            color={isLiked ? '#ff6b81' : 'white'}
          />
          <span className="action-count">{formatNumber(video.likes + (isLiked ? 1 : 0))}</span>
        </button>

        <button className="action-button">
          <MessageCircle size={28} className="action-icon" />
          <span className="action-count">{formatNumber(video.comments)}</span>
        </button>

        <button className="action-button" onClick={onSave}>
          <Bookmark
            size={28}
            className={`action-icon ${isSaved ? 'saved' : ''}`}
            fill={isSaved ? 'var(--primary)' : 'none'}
            color={isSaved ? 'var(--primary)' : 'white'}
          />
          <span className="action-count">{formatNumber(video.saves + (isSaved ? 1 : 0))}</span>
        </button>

        <button className="action-button">
          <Share2 size={28} className="action-icon" />
          <span className="action-count">{formatNumber(video.shares)}</span>
        </button>

        <button className="mute-button" onClick={toggleMute}>
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      </div>
    </div>
  )
}

export default VideoCard
