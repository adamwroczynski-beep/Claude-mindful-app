import {
  Sparkles,
  Brain,
  Wind,
  Flower2,
  Heart,
  TreePine,
  Moon,
  Flame
} from 'lucide-react'
import './CategoryBar.css'

const iconMap = {
  Sparkles,
  Brain,
  Wind,
  Flower2,
  Heart,
  TreePine,
  Moon,
  Flame
}

function CategoryBar({ categories, activeCategory, onCategoryChange }) {
  return (
    <div className="category-bar">
      <div className="category-scroll">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon]
          return (
            <button
              key={category.id}
              className={`category-item ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => onCategoryChange(category.id)}
            >
              {IconComponent && <IconComponent size={16} />}
              <span>{category.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryBar
