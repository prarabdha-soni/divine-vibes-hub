import { useState } from "react";
import { Search, Play, Clock, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import assets
import videoBhajan1 from "@/assets/video-bhajan-1.jpg";
import videoGuru1 from "@/assets/video-guru-1.jpg";
import videoHero from "@/assets/video-hero.jpg";
import videoKirtan1 from "@/assets/video-kirtan-1.jpg";
import videoTeaching1 from "@/assets/video-teaching-1.jpg";
import premanand1 from "@/assets/premanand-1.jpg";
import premanand2 from "@/assets/premanand-2.jpg";
import premanand3 from "@/assets/premanand-3.jpg";

const Discover = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All", "Bhakti Yoga", "Meditation", "Kirtan", "Vedic Wisdom", 
    "Karma & Dharma", "Self-Realization", "Mantra Chanting"
  ];

  const trendingContent = [
    {
      id: "1",
      title: "Daily Inspiration",
      guide: "Gaur Gopal Das",
      thumbnail: videoHero,
      duration: "15:30",
      views: "2.1M",
      rating: 4.8,
      category: "Meditation"
    },
    {
      id: "2",
      title: "Kirtan Stories - Krishna Leela",
      guide: "Premand Maharaj", 
      thumbnail: videoKirtan1,
      duration: "45:20",
      views: "1.8M",
      rating: 4.9,
      category: "Kirtan"
    },
    {
      id: "3",
      title: "Vedic Wisdom for Modern Life",
      guide: "Swami Muktananda",
      thumbnail: videoTeaching1,
      duration: "38:15",
      views: "1.2M",
      rating: 4.7,
      category: "Vedic Wisdom"
    },
    {
      id: "4",
      title: "Bhakti Yoga Practices",
      guide: "Sri Sri Ravi Shankar",
      thumbnail: videoGuru1,
      duration: "52:10",
      views: "950K",
      rating: 4.8,
      category: "Bhakti Yoga"
    }
  ];

  const recommendedSeries = [
    {
      id: "1",
      title: "Mindful Relationships Series",
      guide: "Gaur Gopal Das",
      thumbnail: videoHero,
      episodes: 12,
      totalDuration: "6h 30m",
      progress: 70
    },
    {
      id: "2",
      title: "Ancient Wisdom Stories",
      guide: "Premand Maharaj",
      thumbnail: premanand1,
      episodes: 8,
      totalDuration: "4h 15m", 
      progress: 25
    },
    {
      id: "3",
      title: "Karma & Destiny",
      guide: "Swami Muktananda",
      thumbnail: premanand2,
      episodes: 6,
      totalDuration: "3h 45m",
      progress: 0
    }
  ];

  const philosophyTopics = [
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="px-4 py-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Discover</h1>
          <p className="text-gray-400">Explore spiritual wisdom and teachings</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search for topics, guides, or content"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-amber-500"
          />
        </div>

        {/* Categories */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-white">Categories</h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-slate-800/50 border-slate-700 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Trending Content */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-white">Trending Now</h2>
          <div className="grid grid-cols-2 gap-4">
            {trendingContent.map((item) => (
              <Card key={item.id} className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-amber-600 text-white text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <Button 
                      size="sm" 
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30"
                    >
                      <Play className="w-4 h-4" />
                    </Button>
                    <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/50 rounded px-2 py-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-white">{item.rating}</span>
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="font-medium text-sm text-white line-clamp-2 mb-1">{item.title}</h3>
                    <p className="text-xs text-gray-400 mb-2">{item.guide}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{item.views}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Philosophy Topics */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-white">Explore by Philosophy</h2>
          <div className="grid grid-cols-2 gap-4">
            {philosophyTopics.map((topic, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 overflow-hidden cursor-pointer hover:bg-slate-700/50 transition-colors">
                <CardContent className="p-4">
                  <div className={`w-full h-20 bg-gradient-to-r ${topic.color} rounded-lg mb-3 flex items-center justify-center`}>
                    <span className="text-white font-bold text-lg">{topic.title.charAt(0)}</span>
                  </div>
                  <h3 className="font-medium text-white mb-1">{topic.title}</h3>
                  <p className="text-xs text-gray-400 mb-2">{topic.description}</p>
                  <p className="text-xs text-amber-400">{topic.contentCount} videos</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recommended Series */}
        <section>
          <h2 className="text-lg font-semibold mb-3 text-white">Recommended Series</h2>
          <div className="space-y-3">
            {recommendedSeries.map((series) => (
              <Card key={series.id} className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative w-24 h-16 flex-shrink-0">
                      <img 
                        src={series.thumbnail} 
                        alt={series.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <Button 
                        size="sm" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30"
                      >
                        <Play className="w-3 h-3" />
                      </Button>
                    </div>
                    <div className="flex-1 p-3">
                      <h3 className="font-medium text-sm text-white line-clamp-1 mb-1">{series.title}</h3>
                      <p className="text-xs text-gray-400 mb-2">{series.guide}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
                        <span>{series.episodes} episodes</span>
                        <span>{series.totalDuration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 bg-slate-700 rounded-full h-1">
                          <div 
                            className="bg-amber-600 h-1 rounded-full" 
                            style={{ width: `${series.progress}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400">{series.progress}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Discover;
