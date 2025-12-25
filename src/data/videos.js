export const categories = [
  { id: 'all', name: 'For You', icon: 'Sparkles' },
  { id: 'meditation', name: 'Meditation', icon: 'Brain' },
  { id: 'breathing', name: 'Breathing', icon: 'Wind' },
  { id: 'yoga', name: 'Yoga', icon: 'Flower2' },
  { id: 'affirmations', name: 'Affirmations', icon: 'Heart' },
  { id: 'nature', name: 'Nature', icon: 'TreePine' },
  { id: 'sleep', name: 'Sleep', icon: 'Moon' },
  { id: 'motivation', name: 'Motivation', icon: 'Flame' }
]

export const videos = [
  {
    id: 1,
    user: {
      id: 101,
      username: 'zenmaster_maya',
      displayName: 'Maya Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      verified: true,
      followers: 125000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=700&fit=crop',
    description: 'Start your morning with this 60-second breathing exercise. Inhale peace, exhale stress.',
    tags: ['#morningroutine', '#breathwork', '#mindfulness', '#calm'],
    category: 'breathing',
    likes: 45200,
    comments: 892,
    shares: 1250,
    saves: 3400,
    duration: 62,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    user: {
      id: 102,
      username: 'peaceful_warrior',
      displayName: 'James Liu',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      verified: true,
      followers: 89000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=700&fit=crop',
    description: 'Quick yoga flow for stress relief. Perfect for your lunch break!',
    tags: ['#yoga', '#stressrelief', '#wellness', '#selfcare'],
    category: 'yoga',
    likes: 32100,
    comments: 567,
    shares: 890,
    saves: 2100,
    duration: 58,
    createdAt: '2024-01-14'
  },
  {
    id: 3,
    user: {
      id: 103,
      username: 'mindful_moments',
      displayName: 'Sarah Williams',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      verified: false,
      followers: 45000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=400&h=700&fit=crop',
    description: 'Daily affirmation: You are worthy of love and happiness. Repeat after me...',
    tags: ['#affirmations', '#selflove', '#positivity', '#mentalhealth'],
    category: 'affirmations',
    likes: 67800,
    comments: 1234,
    shares: 2340,
    saves: 5600,
    duration: 45,
    createdAt: '2024-01-13'
  },
  {
    id: 4,
    user: {
      id: 104,
      username: 'nature_sounds',
      displayName: 'Forest Therapy',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      verified: true,
      followers: 234000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=700&fit=crop',
    description: 'Immerse yourself in the peaceful sounds of a forest stream. Let nature heal you.',
    tags: ['#nature', '#relaxation', '#asmr', '#healing'],
    category: 'nature',
    likes: 89500,
    comments: 456,
    shares: 1890,
    saves: 8900,
    duration: 120,
    createdAt: '2024-01-12'
  },
  {
    id: 5,
    user: {
      id: 105,
      username: 'sleepwell_guide',
      displayName: 'Dr. Emma Sleep',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
      verified: true,
      followers: 178000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1511295742362-92c96b1cf484?w=400&h=700&fit=crop',
    description: 'Bedtime wind-down routine. These 5 steps will help you sleep like a baby tonight.',
    tags: ['#sleep', '#insomnia', '#nightroutine', '#rest'],
    category: 'sleep',
    likes: 112000,
    comments: 2100,
    shares: 4500,
    saves: 12000,
    duration: 90,
    createdAt: '2024-01-11'
  },
  {
    id: 6,
    user: {
      id: 106,
      username: 'meditation_master',
      displayName: 'Guru Ravi',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      verified: true,
      followers: 456000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=700&fit=crop',
    description: 'Guided meditation for beginners. Find your inner peace in just 2 minutes.',
    tags: ['#meditation', '#beginners', '#innerpeace', '#mindful'],
    category: 'meditation',
    likes: 234500,
    comments: 5600,
    shares: 8900,
    saves: 23000,
    duration: 125,
    createdAt: '2024-01-10'
  },
  {
    id: 7,
    user: {
      id: 107,
      username: 'motivation_daily',
      displayName: 'Alex Motivation',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
      verified: false,
      followers: 67000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=400&h=700&fit=crop',
    description: 'Your potential is unlimited. Watch this when you need a boost of confidence.',
    tags: ['#motivation', '#success', '#confidence', '#goals'],
    category: 'motivation',
    likes: 78900,
    comments: 1890,
    shares: 3400,
    saves: 6700,
    duration: 55,
    createdAt: '2024-01-09'
  },
  {
    id: 8,
    user: {
      id: 108,
      username: 'breath_of_life',
      displayName: 'Luna Breathwork',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
      verified: true,
      followers: 145000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=700&fit=crop',
    description: 'Box breathing technique to calm anxiety instantly. Try it now!',
    tags: ['#breathing', '#anxiety', '#calm', '#technique'],
    category: 'breathing',
    likes: 156000,
    comments: 3400,
    shares: 5600,
    saves: 15000,
    duration: 75,
    createdAt: '2024-01-08'
  },
  {
    id: 9,
    user: {
      id: 109,
      username: 'yoga_with_grace',
      displayName: 'Grace Yang',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
      verified: true,
      followers: 289000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=700&fit=crop',
    description: 'Morning sun salutation to energize your day. Flow with me!',
    tags: ['#yoga', '#sunsalutation', '#morning', '#energy'],
    category: 'yoga',
    likes: 198000,
    comments: 4200,
    shares: 7800,
    saves: 19000,
    duration: 95,
    createdAt: '2024-01-07'
  },
  {
    id: 10,
    user: {
      id: 110,
      username: 'calm_ocean',
      displayName: 'Ocean Sounds',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop',
      verified: false,
      followers: 98000
    },
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=700&fit=crop',
    description: 'Ocean waves for deep relaxation. Close your eyes and drift away...',
    tags: ['#ocean', '#waves', '#relaxation', '#nature'],
    category: 'nature',
    likes: 87600,
    comments: 890,
    shares: 2300,
    saves: 9800,
    duration: 180,
    createdAt: '2024-01-06'
  }
]

export const trendingTags = [
  '#mindfulness',
  '#selfcare',
  '#meditation',
  '#breathwork',
  '#wellness',
  '#mentalhealth',
  '#yoga',
  '#positivity',
  '#healing',
  '#calm'
]
