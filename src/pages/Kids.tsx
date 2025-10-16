import React, { useState } from "react";
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
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoRefs, setVideoRefs] = useState({});

  // Auto-play first video when Kids tab is opened
  React.useEffect(() => {
    if (kidsVideos.length > 0 && !selectedVideo) {
      setSelectedVideo(kidsVideos[0]);
    }
  }, []);

  // Handle scroll to pause/play videos
  const handleScroll = (event) => {
    const container = event.target;
    const scrollTop = container.scrollTop;
    const videoHeight = window.innerHeight;
    const newIndex = Math.round(scrollTop / videoHeight);
    
    if (newIndex !== currentVideoIndex) {
      setCurrentVideoIndex(newIndex);
    }
  };

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
    // Removed 3rd and 5th videos as requested
  ];

  const filteredVideos = kidsVideos.filter(video =>
    selectedCategory === "All" || video.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Instagram Reels Style - Full Screen Videos */}
      <div 
        className="h-screen overflow-y-auto snap-y snap-mandatory"
        onScroll={handleScroll}
      >
        {kidsVideos.map((video, index) => {
          // Only autoplay the current video, pause others
          const isCurrentVideo = index === currentVideoIndex;
          const embedUrl = isCurrentVideo 
            ? getYouTubeEmbedUrl(video.youtubeUrl)
            : getYouTubeEmbedUrl(video.youtubeUrl).replace('autoplay=1', 'autoplay=0');
          
          return (
            <div 
              key={video.id} 
              className="h-screen w-full snap-start relative flex items-center justify-center"
            >
              {/* Full Screen Video */}
              <div className="absolute inset-0 w-full h-full">
                <iframe
                  src={embedUrl}
                  title={video.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video Info Overlay - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">{video.title}</h3>
                <p className="text-gray-300 text-sm">{video.subtitle}</p>
              </div>
              
              {/* Video Number Indicator - Top Right */}
              <div className="absolute top-6 right-6 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                {index + 1} / {kidsVideos.length}
              </div>
              
              {/* Play/Pause Indicator */}
              {!isCurrentVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="bg-orange-600 rounded-full p-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Kids;
