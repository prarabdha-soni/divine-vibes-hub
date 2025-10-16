import { useState } from "react";
import { Play, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Import kids video images
import videoKids1 from "@/assets/video-kids-1.jpg";
import videoKids2 from "@/assets/video-kids-2.jpg";
import videoKids3 from "@/assets/video-kids-3.jpg";
import videoKids4 from "@/assets/video-kids-4.jpg";
import videoKids5 from "@/assets/video-kids-5.jpg";
import videoKids6 from "@/assets/video-kids-6.jpg";

const Kids = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Bhajans", "Stories", "Learning", "Fun"];

  // Function to extract YouTube video ID and create embedded URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  };

  // Function to get YouTube thumbnail URL
  const getYouTubeThumbnail = (url) => {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };

  // Kids videos with YouTube links
  const kidsVideos = [
    {
      id: "1",
      title: "श्री कृष्ण की कहानी - बाल कृष्ण",
      subtitle: "Kids Krishna Stories",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
      duration: "15:30",
      views: "2.1M",
      category: "Stories",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: "2",
      title: "हनुमान चालीसा - Kids Version",
      subtitle: "Children's Hanuman Chalisa",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
      duration: "8:45",
      views: "1.8M",
      category: "Bhajans",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: "3",
      title: "रामायण कहानी - बच्चों के लिए",
      subtitle: "Ramayana for Kids",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
      duration: "20:15",
      views: "3.2M",
      category: "Stories",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: "4",
      title: "संस्कृत सीखें - बच्चों के लिए",
      subtitle: "Learn Sanskrit for Kids",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
      duration: "12:20",
      views: "950K",
      category: "Learning",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: "5",
      title: "योगा फॉर किड्स - मजेदार व्यायाम",
      subtitle: "Fun Yoga for Children",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
      duration: "10:45",
      views: "1.5M",
      category: "Fun",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: "6",
      title: "गणेश जी की कहानी - बच्चों के लिए",
      subtitle: "Lord Ganesha Stories for Kids",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=dQw4w9WgXcQ"),
      duration: "18:30",
      views: "2.7M",
      category: "Stories",
      youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const filteredVideos = kidsVideos.filter(video =>
    selectedCategory === "All" || video.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Netflix-style Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-amber-900/90 to-transparent backdrop-blur-sm">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">Sanatan Secret</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-amber-100 hover:text-amber-300">
              Browse
            </Button>
            <Button variant="ghost" size="sm" className="text-amber-100 hover:text-amber-300">
              Search
            </Button>
          </div>
        </div>
      </header>

      <div className="px-4 py-6 space-y-6 pt-20">
        {/* Kids Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">Kids Corner</h1>
          <p className="text-lg text-gray-300 mb-4">Spiritual stories and learning for children</p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search kids content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-3 bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl shadow-lg"
          />
        </div>

        {/* Category Filter */}
        <section>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 ${
                  selectedCategory === category
                    ? "bg-orange-600 hover:bg-orange-700 text-white shadow-lg"
                    : "bg-gray-800 border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Kids Videos Grid */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="bg-gray-800 border-gray-700 overflow-hidden hover:bg-gray-700 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 group cursor-pointer">
                <CardContent className="p-0">
                  <div 
                    className="relative"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setSelectedVideo(video);
                    }}
                  >
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-orange-600 rounded-full p-3">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="p-3">
                    <h3 className="font-bold text-sm text-white mb-1 group-hover:text-orange-400 transition-colors duration-300 line-clamp-2">
                      {video.title}
                    </h3>
                    <p className="text-xs text-gray-300 mb-2">{video.subtitle}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{video.views} views</span>
                      <Badge variant="outline" className="text-orange-400 border-orange-400">
                        {video.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-10 h-10 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">No content found</h3>
            <p className="text-gray-300 mb-6 max-w-sm mx-auto">
              Try selecting a different category or search for kids content.
            </p>
            <Button 
              onClick={() => setSelectedCategory("All")}
              className="bg-orange-600 hover:bg-orange-700 text-white"
            >
              View All Content
            </Button>
          </div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4">
            <div className="bg-gray-900 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <h3 className="text-lg font-semibold text-white">{selectedVideo.title}</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedVideo(null)}
                  className="text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={getYouTubeEmbedUrl(selectedVideo.youtubeUrl)}
                  title={selectedVideo.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-gray-800">
                <p className="text-sm text-gray-300 mb-2">{selectedVideo.subtitle}</p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <span>{selectedVideo.duration}</span>
                  <span>{selectedVideo.views} views</span>
                  <span>{selectedVideo.category}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kids;
