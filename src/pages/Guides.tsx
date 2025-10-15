import { useState } from "react";
import { Search, Star, Users, Heart, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import guide images
import premanand1 from "@/assets/premanand-1.jpg";
import premanand2 from "@/assets/premanand-2.jpg";
import premanand3 from "@/assets/premanand-3.jpg";
import premanand4 from "@/assets/premanand-4.jpg";
import premanand5 from "@/assets/premanand-5.jpg";
import premanand6 from "@/assets/premanand-6.jpg";

const Guides = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Trending");

  const filters = ["Trending", "Bhakti", "Yoga Masters", "Meditation", "Wisdom"];

  // Authentic Indian spiritual teachers with proper images
  const spiritualTeachers = [
    {
      id: "1",
      name: "Swami Muktananda",
      title: "Meditation Master",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Yoga Masters",
      followers: "2.1M",
      rating: 4.8,
      isFollowing: false
    },
    {
      id: "2", 
      name: "Premand Maharaj",
      title: "Spiritual Teacher",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Yoga Masters",
      followers: "850K",
      rating: 4.7,
      isFollowing: false
    },
    {
      id: "3",
      name: "Gaur Gopal Das", 
      title: "Monk & Motivator",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Bhakti",
      followers: "3.2M",
      rating: 4.9,
      isFollowing: true
    },
    {
      id: "4",
      name: "Sri Sri Ravi Shankar",
      title: "Spiritual Leader",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Bhakti",
      followers: "1.8M",
      rating: 4.6,
      isFollowing: false
    },
    {
      id: "5",
      name: "Amma",
      title: "Divine Mother",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Bhakti",
      followers: "1.5M",
      rating: 4.8,
      isFollowing: true
    },
    {
      id: "6",
      name: "Sadhguru",
      title: "Mystic & Visionary",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Meditation",
      followers: "2.3M",
      rating: 4.7,
      isFollowing: false
    },
    {
      id: "7",
      name: "Swami Vivekananda",
      title: "Spiritual Leader",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Yoga Masters",
      followers: "650K",
      rating: 4.5,
      isFollowing: false
    },
    {
      id: "8",
      name: "Paramahansa Yogananda",
      title: "Yoga Master",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Wisdom",
      followers: "1.2M",
      rating: 4.8,
      isFollowing: true
    },
    {
      id: "9",
      name: "Ram Dass",
      title: "Spiritual Teacher",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Meditation",
      followers: "420K",
      rating: 4.6,
      isFollowing: false
    },
    {
      id: "10",
      name: "Anandamayi Ma",
      title: "Divine Mother",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Bhakti",
      followers: "380K",
      rating: 4.9,
      isFollowing: false
    },
    {
      id: "11",
      name: "Osho",
      title: "Mystic & Philosopher",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Wisdom",
      followers: "1.1M",
      rating: 4.8,
      isFollowing: false
    },
    {
      id: "12",
      name: "Sri M",
      title: "Spiritual Teacher",
      image: "https://images.unsplash.com/photo-1692010123456-teILEdB9WFA?w=400&h=400&fit=crop&crop=face",
      category: "Meditation",
      followers: "950K",
      rating: 4.7,
      isFollowing: false
    }
  ];

  const filteredTeachers = spiritualTeachers.filter(teacher => 
    selectedFilter === "Trending" || teacher.category === selectedFilter
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="px-4 py-6 space-y-6">
        {/* Professional Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Browse Spiritual Guides</h1>
          <p className="text-gray-400">Discover authentic spiritual teachers and their wisdom</p>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search for spiritual guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-amber-500 h-12"
          />
        </div>

        {/* Professional Filter Chips */}
        <section>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedFilter(filter)}
                className={`whitespace-nowrap px-4 py-2 ${
                  selectedFilter === filter
                    ? "bg-amber-600 hover:bg-amber-700 text-white shadow-lg"
                    : "bg-slate-800/50 border-slate-700 text-gray-300 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>
        </section>

        {/* Professional Teachers Grid */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            {filteredTeachers.map((teacher) => (
              <Card key={teacher.id} className="bg-slate-800/50 border-slate-700 overflow-hidden hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4">
                  {/* Three dots menu */}
                  <div className="flex justify-end mb-3">
                    <Button variant="ghost" size="sm" className="p-1 text-white hover:bg-slate-700">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Circular Profile Picture */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-24 h-24">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-slate-600"
                      />
                      {/* Follow Button Overlay */}
                      <div className="absolute -bottom-2 -right-2">
                        <Button 
                          size="sm" 
                          className={`text-xs px-3 py-1 rounded-full font-medium ${
                            teacher.isFollowing 
                              ? "bg-green-600 hover:bg-green-700 text-white" 
                              : "bg-amber-600 hover:bg-amber-700 text-white"
                          }`}
                        >
                          {teacher.isFollowing ? (
                            <>
                              <Heart className="w-3 h-3 mr-1 fill-current" />
                              Following
                            </>
                          ) : (
                            "Follow"
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Teacher Info */}
                  <div className="text-center">
                    <h3 className="font-bold text-lg text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">{teacher.name}</h3>
                    <p className="text-sm text-gray-400 mb-2">{teacher.title}</p>
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-amber-400" />
                        <span>{teacher.rating}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        <span>{teacher.followers}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Enhanced Empty State */}
        {filteredTeachers.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-600/20 to-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">No guides found</h3>
            <p className="text-gray-400 mb-6 max-w-sm mx-auto">
              Try adjusting your search terms or explore different categories to discover spiritual teachers.
            </p>
            <Button 
              onClick={() => setSelectedFilter("Trending")}
              className="bg-amber-600 hover:bg-amber-700 text-white"
            >
              View Trending Guides
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guides;
