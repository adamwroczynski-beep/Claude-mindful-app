import { useState } from 'react'
import {
  Video,
  Image,
  Music,
  Sparkles,
  Hash,
  MapPin,
  Users,
  Clock,
  Upload,
  Camera,
  Mic,
  Wand2
} from 'lucide-react'
import './CreatePost.css'

function CreatePost({ categories }) {
  const [step, setStep] = useState('select')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState([])
  const [tagInput, setTagInput] = useState('')

  const contentTypes = [
    { id: 'video', icon: Video, label: 'Record Video', description: 'Share your wellness journey' },
    { id: 'upload', icon: Upload, label: 'Upload', description: 'Upload from gallery' },
    { id: 'guided', icon: Wand2, label: 'Guided Content', description: 'AI-assisted creation' }
  ]

  const handleAddTag = (e) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      const newTag = tagInput.startsWith('#') ? tagInput : `#${tagInput}`
      if (!tags.includes(newTag)) {
        setTags([...tags, newTag])
      }
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="create-page">
      <div className="create-header">
        <h1 className="create-title">Create</h1>
        <p className="create-subtitle">Share mindfulness with the world</p>
      </div>

      {step === 'select' && (
        <div className="content-type-section">
          <h2 className="section-title">What would you like to share?</h2>
          <div className="content-type-grid">
            {contentTypes.map((type) => {
              const IconComponent = type.icon
              return (
                <button
                  key={type.id}
                  className="content-type-card"
                  onClick={() => setStep('details')}
                >
                  <div className="content-type-icon">
                    <IconComponent size={32} />
                  </div>
                  <span className="content-type-label">{type.label}</span>
                  <span className="content-type-desc">{type.description}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}

      {step === 'details' && (
        <div className="details-section">
          <div className="preview-area">
            <div className="preview-placeholder">
              <Camera size={48} />
              <span>Tap to record or upload</span>
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label>Description</label>
              <textarea
                placeholder="Share your thoughts on this mindful moment..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                maxLength={300}
              />
              <span className="char-count">{description.length}/300</span>
            </div>

            <div className="form-group">
              <label>Category</label>
              <div className="category-select">
                {categories.slice(1).map((cat) => (
                  <button
                    key={cat.id}
                    className={`category-option ${selectedCategory === cat.id ? 'selected' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Tags</label>
              <div className="tags-input-container">
                {tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                    <button onClick={() => removeTag(tag)}>&times;</button>
                  </span>
                ))}
                <input
                  type="text"
                  placeholder="Add tags..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                  className="tag-input"
                />
              </div>
            </div>

            <div className="quick-options">
              <button className="quick-option">
                <Music size={18} />
                <span>Add Sound</span>
              </button>
              <button className="quick-option">
                <Sparkles size={18} />
                <span>Effects</span>
              </button>
              <button className="quick-option">
                <Clock size={18} />
                <span>Timer</span>
              </button>
            </div>

            <div className="action-buttons">
              <button className="back-btn" onClick={() => setStep('select')}>
                Back
              </button>
              <button className="post-btn">
                Share Mindfully
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="inspiration-section">
        <h2 className="section-title">Content Ideas</h2>
        <div className="ideas-list">
          <div className="idea-card">
            <div className="idea-icon breathing-icon">
              <Mic size={20} />
            </div>
            <div className="idea-content">
              <span className="idea-title">Guided Breathing</span>
              <span className="idea-desc">Lead viewers through a calming breath exercise</span>
            </div>
          </div>
          <div className="idea-card">
            <div className="idea-icon nature-icon">
              <Video size={20} />
            </div>
            <div className="idea-content">
              <span className="idea-title">Nature Walk</span>
              <span className="idea-desc">Share peaceful moments from your outdoor time</span>
            </div>
          </div>
          <div className="idea-card">
            <div className="idea-icon affirmation-icon">
              <Sparkles size={20} />
            </div>
            <div className="idea-content">
              <span className="idea-title">Daily Affirmation</span>
              <span className="idea-desc">Inspire others with positive affirmations</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreatePost
