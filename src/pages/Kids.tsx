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

  // Kids videos with YouTube links - Direct play for small children
  const kidsVideos = [
    {
      id: "1",
      title: "KrishnaBalram #shorts #Krishnathegreat",
      subtitle: "Kids Krishna Stories",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=H46vC6Qp67U"),
      duration: "0:30",
      views: "2.1M",
      category: "Stories",
      youtubeUrl: "https://www.youtube.com/watch?v=H46vC6Qp67U"
    },
    {
      id: "2",
      title: "#LittleKrishna | Kids Stories Cartoon for Kids | #shorts",
      subtitle: "Kids Krishna Cartoon",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/shorts/x156q3j_Gfs"),
      duration: "0:45",
      views: "1.8M",
      category: "Stories",
      youtubeUrl: "https://www.youtube.com/shorts/x156q3j_Gfs"
    },
    {
      id: "4",
      title: "Little Krishna - Manmohana Full Film (Hindi)",
      subtitle: "Little Krishna Full Movie",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=Q-qcB_OqKTU"),
      duration: "1:30:45",
      views: "1.5M",
      category: "Stories",
      youtubeUrl: "https://www.youtube.com/watch?v=Q-qcB_OqKTU"
    },
    {
      id: "5",
      title: "Krishna Kids Bhajan - Hare Krishna Hare Rama",
      subtitle: "Devotional Songs for Children",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=example1"),
      duration: "0:25",
      views: "950K",
      category: "Bhajans",
      youtubeUrl: "https://www.youtube.com/watch?v=example1"
    },
    {
      id: "6",
      title: "Little Krishna Adventures - Cartoon Series",
      subtitle: "Fun Krishna Stories for Kids",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=example2"),
      duration: "0:20",
      views: "1.2M",
      category: "Stories",
      youtubeUrl: "https://www.youtube.com/watch?v=example2"
    }
  ];

  const filteredVideos = kidsVideos.filter(video =>
    selectedCategory === "All" || video.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-4 py-6 space-y-6">
        {/* Kids Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">Kids Spiritual Content</h1>
          <p className="text-xl text-white/80 mb-4">Fun and educational content for children</p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
          <Input
            placeholder="Search for kids content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-3 bg-black border-white/30 text-white placeholder:text-white/60 focus:border-white focus:ring-2 focus:ring-white/20 rounded-xl shadow-2xl"
          />
        </div>

        {/* Category Filter Chips */}
        <section>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap px-4 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-white text-black font-semibold shadow-2xl hover:bg-gray-200"
                    : "bg-black border-white/30 text-white/80 hover:bg-white/10 hover:text-white hover:border-white/50"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Kids Videos Grid - 2 Column Format */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            {filteredVideos.map((video) => (
              <Card key={video.id} className="bg-black border-white/20 overflow-hidden hover:bg-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative w-full h-64">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedVideo(video);
                         }}>
                      <div className="bg-white rounded-full p-4 hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:scale-110">
                        <Play className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-black/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                      {video.duration}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                      {video.views}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                      {video.category}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-bold text-white mb-1 drop-shadow-md leading-tight">{video.title}</h3>
                    <p className="text-white/80 text-xs mb-2 line-clamp-2">{video.subtitle}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-semibold">{video.category}</span>
                      <div className="flex items-center text-white/60">
                        <span>{video.views} views</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4">
            <div className="bg-black border border-white/20 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <h3 className="text-lg font-semibold text-white">{selectedVideo.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedVideo(null)}
                  className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
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
              <div className="p-4 bg-black border-t border-white/20">
                <p className="text-sm text-white/80 mb-2">{selectedVideo.subtitle}</p>
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <span>{selectedVideo.duration}</span>
                  <span>{selectedVideo.views} views</span>
                  <span>{selectedVideo.category}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <Play className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">No videos found</h3>
            <p className="text-white/70 mb-6 max-w-sm mx-auto">
              Try adjusting your search terms or explore different categories to discover kids content.
            </p>
            <Button 
              onClick={() => setSelectedCategory("All")}
              className="bg-white text-black hover:bg-gray-200 font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
            >
              View All Content
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Kids;