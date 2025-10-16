import { useState } from "react";
import { Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Story = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

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

  // Mysterious and Spiritual Series - Real YouTube Content
  const storySeries = [
    {
      id: "1",
      title: "The Mysterious Hindu Goddess - The Ranveer Show 241",
      subtitle: "Exploring the divine mysteries of Hindu goddesses",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=4sTGPlaZBXE"),
      duration: "1:25:30",
      views: "2.8M",
      category: "Mystery",
      youtubeUrl: "https://www.youtube.com/watch?v=4sTGPlaZBXE",
      episodes: [
        { title: "The Divine Feminine Power", duration: "25:30" },
        { title: "Ancient Goddess Mysteries", duration: "30:15" },
        { title: "Sacred Rituals and Traditions", duration: "29:45" }
      ]
    },
    {
      id: "2",
      title: "Ganesha Vs Gajamukhasura | The Demon Who...",
      subtitle: "Epic battle between Lord Ganesha and the demon",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=cw9RXj4czKs"),
      duration: "0:45:20",
      views: "1.5M",
      category: "Battle",
      youtubeUrl: "https://www.youtube.com/watch?v=cw9RXj4czKs",
      episodes: [
        { title: "The Demon's Challenge", duration: "15:20" },
        { title: "Ganesha's Divine Powers", duration: "18:30" },
        { title: "The Epic Battle", duration: "11:30" }
      ]
    },
    {
      id: "3",
      title: "Hindu Mythological Stories | AI Generated Series",
      subtitle: "Modern AI-generated Hindu mythological content",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/playlist?list=PLNIuI8ww83XXCt6nywG4WsQJQNvsNt3wd"),
      duration: "2:15:00",
      views: "3.2M",
      category: "AI Series",
      youtubeUrl: "https://www.youtube.com/playlist?list=PLNIuI8ww83XXCt6nywG4WsQJQNvsNt3wd",
      episodes: [
        { title: "AI Generated Ramayan", duration: "35:20" },
        { title: "Digital Mahabharat", duration: "42:15" },
        { title: "Virtual Krishna Leela", duration: "38:45" },
        { title: "AI Shiva Stories", duration: "39:40" }
      ]
    },
    {
      id: "4",
      title: "The Forgotten Warrior God Who Terrified Demons",
      subtitle: "The mysterious and powerful warrior deity",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=BmjZMccivY4"),
      duration: "0:38:45",
      views: "1.8M",
      category: "Mystery",
      youtubeUrl: "https://www.youtube.com/watch?v=BmjZMccivY4",
      episodes: [
        { title: "The Forgotten God", duration: "12:30" },
        { title: "Demon Battles", duration: "15:45" },
        { title: "Divine Powers Revealed", duration: "10:30" }
      ]
    },
    {
      id: "5",
      title: "Indra Dev Ka Toofan! | Full Episode | Cartoon | Krishna",
      subtitle: "Lord Indra's storm and Krishna's divine intervention",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=G20mqKtT8EQ"),
      duration: "0:25:15",
      views: "4.1M",
      category: "Cartoon",
      youtubeUrl: "https://www.youtube.com/watch?v=G20mqKtT8EQ",
      episodes: [
        { title: "The Great Storm", duration: "8:30" },
        { title: "Krishna's Protection", duration: "10:45" },
        { title: "Divine Victory", duration: "6:00" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="px-4 py-6 space-y-6">
        {/* Story Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">Mysterious Stories</h1>
          <p className="text-lg text-gray-300 mb-4">Epic tales and spiritual series</p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Story Series Grid */}
        <section>
          <div className="space-y-6">
            {storySeries.map((series) => (
              <div key={series.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-700 transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  {/* Series Thumbnail */}
                  <div className="md:w-1/3 relative">
                    <img 
                      src={series.thumbnail} 
                      alt={series.title}
                      className="w-full h-48 md:h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        size="lg"
                        className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
                        onClick={() => setSelectedVideo(series)}
                      >
                        <Play className="w-6 h-6 mr-2" />
                        Play Series
                      </Button>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-3 py-1 rounded-full font-bold">
                      {series.duration}
                    </div>
                  </div>
                  
                  {/* Series Info */}
                  <div className="md:w-2/3 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{series.title}</h3>
                        <p className="text-gray-300 mb-3">{series.subtitle}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{series.views} views</span>
                          <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                            {series.category}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Episodes List */}
                    <div className="space-y-2">
                      <h4 className="text-lg font-semibold text-white mb-3">Episodes:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {series.episodes.map((episode, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-3 hover:bg-gray-600 transition-colors duration-200">
                            <span className="text-white text-sm font-medium">{episode.title}</span>
                            <span className="text-orange-400 text-xs font-bold">{episode.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

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

export default Story;
