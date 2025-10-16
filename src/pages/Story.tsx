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
    <div className="min-h-screen bg-black text-white">
      <div className="px-4 py-6 space-y-6">
        {/* Story Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-3 drop-shadow-lg">Mysterious Stories</h1>
          <p className="text-lg text-white/80 mb-4">Epic tales and spiritual series</p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Story Series Grid */}
        <section>
          <div className="grid grid-cols-2 gap-4">
            {storySeries.map((series) => (
              <div key={series.id} className="bg-black border border-white/20 rounded-lg overflow-hidden hover:bg-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10">
                <div className="relative w-full h-64">
                  <img 
                    src={series.thumbnail} 
                    alt={series.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                       onClick={() => setSelectedVideo(series)}>
                    <div className="bg-white rounded-full p-4 hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:scale-110">
                      <Play className="w-8 h-8 text-black" />
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-black/90 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                    {series.duration}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white text-black text-xs px-3 py-1 rounded-full font-semibold shadow-lg">
                    {series.category}
                  </div>
                </div>
                <div className="p-3">
                  <h3 className="text-base font-bold text-white mb-1 drop-shadow-md leading-tight">{series.title}</h3>
                  <p className="text-white/80 text-xs mb-2 line-clamp-2">{series.subtitle}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white font-semibold">{series.category}</span>
                    <div className="flex items-center text-white/60">
                      <span>{series.views} views</span>
                    </div>
                  </div>
                </div>
              </div>
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
      </div>
    </div>
  );
};

export default Story;
