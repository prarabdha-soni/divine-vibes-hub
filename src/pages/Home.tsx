import { useState } from "react";
import { Play, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import assets
import radhaKrishnaHero from "@/assets/radha-krishna-hero.png";
import premanand1 from "@/assets/premanand-1.jpg";
import premanand2 from "@/assets/premanand-2.jpg";
import premanand3 from "@/assets/premanand-3.jpg";
import premanand4 from "@/assets/premanand-4.jpg";
import premanand5 from "@/assets/premanand-5.jpg";
import premanand6 from "@/assets/premanand-6.jpg";
import videoTeaching1 from "@/assets/video-teaching-1.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Spiritual teachers for horizontal scroll with proper images
  const spiritualTeachers = [
    {
      id: "1",
      name: "Sadhguru",
      title: "Mystic & Visionary",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      followers: "3.2M"
    },
    {
      id: "2", 
      name: "Gaur Gopal Das",
      title: "Monk & Motivator", 
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      followers: "1.8M"
    },
    {
      id: "3",
      name: "Amma",
      title: "Divine Mother",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      followers: "1.5M"
    },
    {
      id: "4",
      name: "Sri Sri Ravi Shankar",
      title: "Spiritual Leader",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      followers: "2.3M"
    },
    {
      id: "5",
      name: "Swami Muktananda",
      title: "Meditation Master",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      followers: "650K"
    },
    {
      id: "6",
      name: "Premand Maharaj",
      title: "Wisdom Teacher",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      followers: "1.2M"
    }
  ];

  // Prominent video cards
  const featuredVideos = [
    {
      id: "1",
      title: "Premand Maharaj",
      subtitle: "Spiritual Teachings & Wisdom",
      thumbnail: premanand1,
      duration: "45:30",
      views: "2.1M"
    },
    {
      id: "2",
      title: "Karma: Yogi Guide Explained",
      subtitle: "Ancient Wisdom for Modern Life",
      thumbnail: videoTeaching1,
      duration: "38:15",
      views: "1.8M"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="px-4 py-6 space-y-8">
        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search spiritual content"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-amber-500"
          />
        </div>

        {/* Discover Guides Section */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Discover Guides</h2>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {spiritualTeachers.map((teacher) => (
              <div key={teacher.id} className="flex-shrink-0 text-center group cursor-pointer">
                <div className="relative w-20 h-20 mx-auto mb-2 group-hover:scale-105 transition-transform duration-300">
                  <Avatar className="w-20 h-20 border-2 border-amber-500/30 group-hover:border-amber-500/60 transition-colors duration-300">
                    <AvatarImage src={teacher.image} alt={teacher.name} />
                    <AvatarFallback className="bg-slate-700 text-white">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="font-medium text-sm text-white mb-1 group-hover:text-amber-400 transition-colors duration-300">{teacher.name}</h3>
                <p className="text-xs text-gray-400 mb-1">{teacher.title}</p>
                <p className="text-xs text-amber-400">{teacher.followers} followers</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Video Cards */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Featured Content</h2>
          <div className="space-y-4">
            {featuredVideos.map((video) => (
              <Card key={video.id} className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/10 group">
                <CardContent className="p-0">
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-600/90 text-white text-xs font-medium">
                        Featured
                      </Badge>
                    </div>
                    
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-black/50 text-white text-xs">
                        {video.views} views
                      </Badge>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-bold text-xl text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">{video.title}</h3>
                      <p className="text-sm text-white/90 mb-3">{video.subtitle}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs text-white/80 bg-black/30 px-2 py-1 rounded">{video.duration}</span>
                      </div>
                      <Button 
                        size="lg" 
                        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-200"
                      >
                        <Play className="w-4 h-4 mr-2" />
                        Watch Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Quick Access Categories */}
        <section>
          <h2 className="text-xl font-semibold mb-4 text-white">Explore by Category</h2>
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 border-amber-500/30 overflow-hidden hover:from-amber-600/30 hover:to-orange-600/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">🕉️</span>
                </div>
                <h3 className="font-semibold text-white mb-1">Bhakti Yoga</h3>
                <p className="text-xs text-gray-300">Path of devotion</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30 overflow-hidden hover:from-blue-600/30 hover:to-cyan-600/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">🧘</span>
                </div>
                <h3 className="font-semibold text-white mb-1">Meditation</h3>
                <p className="text-xs text-gray-300">Inner peace</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border-purple-500/30 overflow-hidden hover:from-purple-600/30 hover:to-pink-600/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">🎵</span>
                </div>
                <h3 className="font-semibold text-white mb-1">Kirtan</h3>
                <p className="text-xs text-gray-300">Devotional songs</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border-green-500/30 overflow-hidden hover:from-green-600/30 hover:to-emerald-600/30 transition-all duration-300">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-lg">📚</span>
                </div>
                <h3 className="font-semibold text-white mb-1">Wisdom</h3>
                <p className="text-xs text-gray-300">Ancient knowledge</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
