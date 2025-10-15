// Spiritual Content Data for Divine Vibes Hub
// Centralized data for Sanatani spiritual guides and content

export interface SpiritualGuide {
  id: string;
  name: string;
  title: string;
  image: string;
  followers: string;
  isFollowing?: boolean;
  description?: string;
  specialties?: string[];
}

export interface SpiritualContent {
  id: string;
  title: string;
  guide: string;
  thumbnail: string;
  duration: string;
  views?: string;
  rating?: number;
  category: string;
  progress?: number;
  status?: string;
  addedDate?: string;
  isDownloaded?: boolean;
  description?: string;
  type?: string;
}

export interface PhilosophyTopic {
  title: string;
  description: string;
  contentCount: number;
  color: string;
}

// Featured Spiritual Guides
export const featuredGuides: SpiritualGuide[] = [
  {
    id: "1",
    name: "Sadhguru",
    title: "Mystic & Visionary",
    image: "/src/assets/premanand-1.jpg",
    followers: "2.1M",
    description: "Mystic, visionary, and spiritual master",
    specialties: ["Meditation", "Inner Engineering", "Yoga"]
  },
  {
    id: "2", 
    name: "Sri Sri Ravi Shankar",
    title: "Spiritual Leader",
    image: "/src/assets/premanand-2.jpg",
    followers: "1.8M",
    description: "Spiritual leader and founder of Art of Living",
    specialties: ["Breathing Techniques", "Meditation", "Peace"]
  },
  {
    id: "3",
    name: "Gaur Gopal Das", 
    title: "Monk & Motivator",
    image: "/src/assets/premanand-3.jpg",
    followers: "3.2M",
    description: "Monk, lifestyle coach, and motivational speaker",
    specialties: ["Life Coaching", "Relationships", "Mindfulness"]
  },
  {
    id: "4",
    name: "Amma",
    title: "Divine Mother",
    image: "/src/assets/premanand-4.jpg",
    followers: "1.5M",
    description: "Spiritual leader known as the hugging saint",
    specialties: ["Compassion", "Service", "Love"]
  }
];

// All Spiritual Guides
export const allGuides: SpiritualGuide[] = [
  {
    id: "1",
    name: "Swami Muktananda",
    title: "Meditation & Yoga",
    image: "/src/assets/premanand-1.jpg",
    followers: "850K",
    isFollowing: false,
    description: "Master of meditation and yoga practices",
    specialties: ["Meditation", "Yoga", "Spiritual Practices"]
  },
  {
    id: "2",
    name: "Gaur Gopal Das", 
    title: "Meditation & Kriya Yoga",
    image: "/src/assets/premanand-2.jpg",
    followers: "3.2M",
    isFollowing: true,
    description: "Monk, lifestyle coach, and motivational speaker",
    specialties: ["Kriya Yoga", "Life Coaching", "Mindfulness"]
  },
  {
    id: "3",
    name: "Premand Maharaj",
    title: "from Sripad Tilak",
    image: "/src/assets/premanand-3.jpg",
    followers: "1.2M",
    isFollowing: false,
    description: "Spiritual teacher and guide",
    specialties: ["Spiritual Teachings", "Wisdom", "Guidance"]
  },
  {
    id: "4",
    name: "Swami Muktananda",
    title: "Meditation & Kriya Yoga", 
    image: "/src/assets/premanand-4.jpg",
    followers: "850K",
    isFollowing: false,
    description: "Master of meditation and yoga practices",
    specialties: ["Meditation", "Kriya Yoga", "Spiritual Practices"]
  },
  {
    id: "5",
    name: "Ram Dass",
    title: "Love, Service & Devotion",
    image: "/src/assets/premanand-5.jpg",
    followers: "650K",
    isFollowing: true,
    description: "Spiritual teacher and author",
    specialties: ["Love", "Service", "Devotion"]
  },
  {
    id: "6",
    name: "Anandamayi Ma",
    title: "Meditation",
    image: "/src/assets/premanand-6.jpg",
    followers: "420K",
    isFollowing: false,
    description: "Spiritual teacher and saint",
    specialties: ["Meditation", "Spiritual Practices", "Wisdom"]
  }
];

// Philosophy Topics
export const philosophyTopics: PhilosophyTopic[] = [
  {
    title: "Bhakti Yoga",
    description: "Path of devotion and love",
    contentCount: 156,
    color: "from-pink-500 to-rose-600"
  },
  {
    title: "Karma & Dharma", 
    description: "Righteous action and duty",
    contentCount: 89,
    color: "from-orange-500 to-red-600"
  },
  {
    title: "Kirtan Stories",
    description: "Sacred stories and songs",
    contentCount: 234,
    color: "from-purple-500 to-indigo-600"
  },
  {
    title: "Self-Realization",
    description: "Journey to inner truth",
    contentCount: 78,
    color: "from-blue-500 to-cyan-600"
  },
  {
    title: "Meditation",
    description: "Inner peace and mindfulness",
    contentCount: 145,
    color: "from-green-500 to-emerald-600"
  },
  {
    title: "Vedic Wisdom",
    description: "Ancient knowledge for modern life",
    contentCount: 112,
    color: "from-yellow-500 to-amber-600"
  }
];

// Content Categories
export const contentCategories = [
  "All", "Bhakti Yoga", "Meditation", "Kirtan", "Vedic Wisdom", 
  "Karma & Dharma", "Self-Realization", "Mantra Chanting"
];

// Sample Content
export const sampleContent: SpiritualContent[] = [
  {
    id: "1",
    title: "The Power of Mantra Chanting - Part 3",
    guide: "Premand Maharaj",
    thumbnail: "/src/assets/premanand-1.jpg",
    duration: "45:30",
    views: "2.1M",
    rating: 4.8,
    category: "Mantra Chanting",
    type: "Latest from Premand Maharaj"
  },
  {
    id: "2", 
    title: "Inner Engineering: Path to Joy",
    guide: "Sadhguru",
    thumbnail: "/src/assets/video-guru-1.jpg",
    duration: "38:15",
    views: "1.8M",
    rating: 4.9,
    category: "Meditation",
    type: "New Satsang from Sadhguru"
  },
  {
    id: "3",
    title: "Gaur Gopal Das on 'Mindful Relationships'",
    guide: "Gaur Gopal Das",
    thumbnail: "/src/assets/video-hero.jpg",
    duration: "52:20",
    views: "3.2M",
    rating: 4.7,
    category: "Meditation",
    progress: 70,
    status: "Continue Watching",
    description: "Learn the art of mindful relationships and inner peace"
  },
  {
    id: "4",
    title: "Karma & Destiny Wisdom Stories",
    guide: "Swami Muktananda",
    thumbnail: "/src/assets/premanand-2.jpg",
    duration: "41:05",
    views: "850K",
    rating: 4.6,
    category: "Vedic Wisdom",
    progress: 45,
    status: "Continue Watching",
    description: "Ancient wisdom on karma and destiny"
  },
  {
    id: "5",
    title: "Daily 20H Meditation",
    guide: "Premand Maharaj",
    thumbnail: "/src/assets/premanand-3.jpg",
    duration: "20:00",
    views: "1.2M",
    rating: 4.8,
    category: "Meditation",
    progress: 0,
    status: "Saved",
    description: "Daily meditation practice"
  }
];

// Hindi Spiritual Terms
export const hindiTerms = {
  "राधे तेरे नाम": "Radhe Tere Naam",
  "Eternal Sanatan Love": "Experience the timeless wisdom of divine connection",
  "Sanatani": "Traditional Hindu spiritual path",
  "Baba": "Spiritual teacher or guide",
  "Satsang": "Spiritual gathering or discourse",
  "Kirtan": "Devotional singing",
  "Bhajan": "Devotional song",
  "Mantra": "Sacred sound or phrase",
  "Darshan": "Blessed sight of a spiritual teacher",
  "Prasad": "Blessed food offering"
};
