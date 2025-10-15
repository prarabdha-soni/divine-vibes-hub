import { useState } from "react";
import { Search, Star, Users, Heart, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import guide images
import baba1 from "@/assets/baba-1.png";
import baba2 from "@/assets/baba-2.png";
import baba3 from "@/assets/baba-3.png";
import baba4 from "@/assets/baba-4.png";
import baba5 from "@/assets/baba-5.png";
import baba6 from "@/assets/baba-6.png";
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

  // Array of baba images for random selection
  const babaImages = [baba5, baba6, baba1, baba2, baba3, baba4];

  // Spiritual teachers with random baba images
  const spiritualTeachers = [
    {
      id: "1",
      name: "Pradeep Mishra",
      title: "Shiv Mahapuran Katha",
      image: babaImages[0], // baba5
      category: "Bhakti",
      followers: "2.1M",
      rating: 4.8,
      isFollowing: false
    },
    {
      id: "2", 
      name: "Premand Maharaj",
      title: "Spiritual Teacher",
      image: babaImages[1], // baba6
      category: "Yoga Masters",
      followers: "850K",
      rating: 4.7,
      isFollowing: false
    },
    {
      id: "3",
      name: "Gaur Gopal Das", 
      title: "Monk & Motivator",
      image: babaImages[2], // baba3
      category: "Bhakti",
      followers: "3.2M",
      rating: 4.9,
      isFollowing: true
    },
    {
      id: "4",
      name: "Sri Sri Ravi Shankar",
      title: "Spiritual Leader",
      image: babaImages[3], // baba4
      category: "Bhakti",
      followers: "1.8M",
      rating: 4.6,
      isFollowing: false
    },
    {
      id: "5",
      name: "Amma",
      title: "Divine Mother",
      image: babaImages[0], // baba1
      category: "Bhakti",
      followers: "1.5M",
      rating: 4.8,
      isFollowing: true
    },
    {
      id: "6",
      name: "Sadhguru",
      title: "Mystic & Visionary",
      image: babaImages[1], // baba2
      category: "Meditation",
      followers: "2.3M",
      rating: 4.7,
      isFollowing: false
    },
    {
      id: "7",
      name: "Swami Vivekananda",
      title: "Spiritual Leader",
      image: babaImages[2], // baba3
      category: "Yoga Masters",
      followers: "650K",
      rating: 4.5,
      isFollowing: false
    },
    {
      id: "8",
      name: "Paramahansa Yogananda",
      title: "Yoga Master",
      image: babaImages[3], // baba4
      category: "Wisdom",
      followers: "1.2M",
      rating: 4.8,
      isFollowing: true
    },
    {
      id: "9",
      name: "Ram Dass",
      title: "Spiritual Teacher",
      image: babaImages[0], // baba1
      category: "Meditation",
      followers: "420K",
      rating: 4.6,
      isFollowing: false
    },
    {
      id: "10",
      name: "Anandamayi Ma",
      title: "Divine Mother",
      image: babaImages[1], // baba2
      category: "Bhakti",
      followers: "380K",
      rating: 4.9,
      isFollowing: false
    },
    {
      id: "11",
      name: "Osho",
      title: "Mystic & Philosopher",
      image: babaImages[2], // baba3
      category: "Wisdom",
      followers: "1.1M",
      rating: 4.8,
      isFollowing: false
    },
    {
      id: "12",
      name: "Sri M",
      title: "Spiritual Teacher",
      image: babaImages[3], // baba4
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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100 text-orange-900">
      <div className="px-4 py-6 space-y-6">
        {/* Professional Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-orange-900 mb-2">Browse Spiritual Guides</h1>
          <p className="text-orange-700">Discover authentic spiritual teachers and their wisdom</p>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-600 w-5 h-5" />
          <Input
            placeholder="Search for spiritual guides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-white/80 border-orange-300 text-orange-900 placeholder:text-orange-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 rounded-xl"
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
                    ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                    : "bg-white/80 border-orange-300 text-orange-700 hover:bg-orange-50 hover:text-orange-900"
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
              <Card key={teacher.id} className="bg-white/80 border-orange-200 overflow-hidden hover:bg-white/90 transition-all duration-300 group cursor-pointer">
                <CardContent className="p-4">
                  {/* Three dots menu */}
                  <div className="flex justify-end mb-3">
                    <Button variant="ghost" size="sm" className="p-1 text-orange-700 hover:bg-orange-100">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </div>
                  
                  {/* Circular Profile Picture */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-24 h-24">
                      <img 
                        src={teacher.image} 
                        alt={teacher.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-orange-300"
                      />
                      {/* Follow Button Overlay */}
                      <div className="absolute -bottom-2 -right-2">
                        <Button 
                          size="sm" 
                          className={`text-xs px-3 py-1 rounded-full font-medium ${
                            teacher.isFollowing 
                              ? "bg-green-600 hover:bg-green-700 text-white" 
                              : "bg-orange-600 hover:bg-orange-700 text-white"
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
                    <h3 className="font-bold text-lg text-orange-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">{teacher.name}</h3>
                    <p className="text-sm text-orange-700 mb-2">{teacher.title}</p>
                    <div className="flex items-center justify-center gap-2 text-xs text-orange-600">
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current text-orange-500" />
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
