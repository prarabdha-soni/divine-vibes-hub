import { useState } from "react";
import { Play, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Import assets
import radhaKrishnaHero from "@/assets/radha-krishna-hero.png";
import baba1 from "@/assets/baba-1.png";
import baba2 from "@/assets/baba-2.png";
import baba3 from "@/assets/baba-3.png";
import baba4 from "@/assets/baba-4.png";
import baba5 from "@/assets/baba-5.png";
import baba6 from "@/assets/baba-6.png";
import osho from "@/assets/osho.png";
import premanand1 from "@/assets/premanand-1.jpg";
import premanand2 from "@/assets/premanand-2.jpg";
import premanand3 from "@/assets/premanand-3.jpg";
import premanand4 from "@/assets/premanand-4.jpg";
import premanand5 from "@/assets/premanand-5.jpg";
import premanand6 from "@/assets/premanand-6.jpg";
import videoTeaching1 from "@/assets/video-teaching-1.jpg";
import videoBhajan1 from "@/assets/video-bhajan-1.jpg";
import videoGuru1 from "@/assets/video-guru-1.jpg";
import videoHero from "@/assets/video-hero.jpg";
import videoKirtan1 from "@/assets/video-kirtan-1.jpg";
import videoKids1 from "@/assets/video-kids-1.jpg";
import videoKids2 from "@/assets/video-kids-2.jpg";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

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

  // Function to filter videos based on selected teacher
  const getFilteredVideos = () => {
    if (!selectedTeacher) return featuredVideos;
    return featuredVideos.filter(video => {
      if (selectedTeacher === "Pradeep Mishra") {
        return video.channel === "Pradeep Mishra Official";
      } else if (selectedTeacher === "Premand Maharaj") {
        return video.channel === "Premand Maharaj";
      } else if (selectedTeacher === "Osho") {
        return video.channel === "OSHO Hindi";
      }
      return true;
    });
  };

  // Array of baba images for random selection
  const babaImages = [baba5, baba6, baba1, baba2, baba3, baba4];

  // Spiritual teachers for horizontal scroll with random baba images
  const spiritualTeachers = [
    {
      id: "1",
      name: "Pradeep Mishra",
      title: "Shiv Mahapuran Katha",
      image: babaImages[0], // baba5
      followers: "3.2M"
    },
    {
      id: "2", 
      name: "Premand Maharaj",
      title: "Spiritual Teacher", 
      image: babaImages[1], // baba6
      followers: "1.8M"
    },
    {
      id: "3",
      name: "Osho",
      title: "Mystic & Philosopher",
      image: osho,
      followers: "2.5M"
    }
  ];

  // Prominent video cards with YouTube links
  const featuredVideos = [
    {
      id: "1",
      title: "Pradeep Mishra Shiv Mahapuran Katha in Surat",
      subtitle: "Pandit Pradeep Ji Mishra - Surat Katha",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=gYt9VGWdqOU"),
      duration: "1:45:20",
      views: "1.2M",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=gYt9VGWdqOU"
    },
    {
      id: "2",
      title: "भजन – मेरा हाथ पकड़ लो ओ भोले, दुनिया में हमारा कोई नहीं",
      subtitle: "Pujya Pandit Pradeep Ji Mishra - Devotional Bhajan",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=O1HA55cfMfc"),
      duration: "0:15:30",
      views: "950K",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=O1HA55cfMfc"
    },
    {
      id: "3",
      title: "शिव भजन: Dil Tujhko Diya O Bholenath",
      subtitle: "Shri Pradeep Mishra Ji - Shiva Bhajan",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=vlSlBQrFiuY"),
      duration: "0:08:45",
      views: "1.1M",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=vlSlBQrFiuY"
    },
    {
      id: "4",
      title: "कैसे प्राप्त होगा धन, वैभव एवंं यश",
      subtitle: "Pandit Pradeep Ji Mishra - Wealth & Prosperity",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=WI-27jSM6bU"),
      duration: "1:20:15",
      views: "1.3M",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=WI-27jSM6bU"
    },
    {
      id: "9",
      title: "आपने तो भगवान के दर्शन किए हैं उनका रूप कैसा है ?",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - God's Form",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=v_KB_ktJK84"),
      duration: "45:30",
      views: "1.2M",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=v_KB_ktJK84"
    },
    {
      id: "10",
      title: "हमारी शादी कहां होगी बच्चे कैसे होंगे",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - Life Questions",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=P1VxhkTgWWA"),
      duration: "38:15",
      views: "950K",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=P1VxhkTgWWA"
    },
    {
      id: "11",
      title: "भगवान से भी बढ़कर है भगवान का नाम !",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - Power of God's Name",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=rsN40D2xcdE"),
      duration: "41:05",
      views: "1.1M",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=rsN40D2xcdE"
    },
    {
      id: "12",
      title: "निराश मत हो ! तुम्हारी सारी इच्छा पूरी हो जाएगी !",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - Hope & Fulfillment",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=EWlYIY-ODfc"),
      duration: "48:45",
      views: "1.3M",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=EWlYIY-ODfc"
    },
    {
      id: "13",
      title: "लोग काम करवाने के लिए बच्चों या भगवान की कसम देते हैं",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - Oaths & Promises",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=XPmNxF938oY"),
      duration: "35:20",
      views: "850K",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=XPmNxF938oY"
    },
    {
      id: "15",
      title: "OSHO Secret Meditation Technique | 4 Stages of Meditation",
      subtitle: "OSHO Hindi Channel - Meditation Techniques",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=D3gEsHKna3Q"),
      duration: "38:15",
      views: "2.1M",
      channel: "OSHO Hindi",
      youtubeUrl: "https://www.youtube.com/watch?v=D3gEsHKna3Q"
    },
    {
      id: "16",
      title: "OSHO: मैं रोज-रोज तुम्हें समझाऊंगा (Daily Understanding)",
      subtitle: "OSHO Hindi Channel - Daily Wisdom",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=X1E6UJeQS3U"),
      duration: "42:45",
      views: "1.5M",
      channel: "OSHO Hindi",
      youtubeUrl: "https://www.youtube.com/watch?v=X1E6UJeQS3U"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="px-4 py-6 space-y-8">
        {/* Featured Hero Videos Carousel */}
        <section>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {[
              {
                id: "hero1",
                title: "Spiritual Journey - Divine Connection",
                subtitle: "Connect with the divine through spiritual practices",
                thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=vYMTVbRsRXo"),
                duration: "0:00",
                views: "0",
                channel: "Sanatan Love",
                youtubeUrl: "https://www.youtube.com/watch?v=vYMTVbRsRXo"
              },
              {
                id: "hero2",
                title: "Meditation & Mindfulness - Inner Peace",
                subtitle: "Find inner peace through meditation and mindfulness",
                thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=3YLog5mrAYM"),
                duration: "0:00",
                views: "0",
                channel: "Sanatan Love",
                youtubeUrl: "https://www.youtube.com/watch?v=3YLog5mrAYM"
              },
              {
                id: "hero3",
                title: "राधे तेरे चरणों की - Sanatan Love",
                subtitle: "Experience the eternal love story of Radha and Krishna",
                thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=CILtUr2shKM"),
                duration: "0:00",
                views: "0",
                channel: "Sanatan Love",
                youtubeUrl: "https://www.youtube.com/watch?v=CILtUr2shKM"
              }
            ].map((video) => (
              <div 
                key={video.id} 
                className="flex-shrink-0 w-full max-w-md group cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedVideo(video);
                }}
              >
                <div className="relative min-h-[50vh] rounded-lg overflow-hidden">
                  {/* Background with YouTube thumbnail */}
                  <div className="absolute inset-0">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg" />
                  
                  {/* Play Button at Bottom */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
                    <Button 
                      size="lg" 
                      className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg"
                    >
                      <Play className="w-5 h-5 mr-2" />
                      Play
                    </Button>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-20 left-4 right-4">
                    <h3 className="text-white font-bold text-lg leading-tight mb-2">
                      {video.title}
                    </h3>
                    <p className="text-white/90 text-sm">
                      {video.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Discover Guides Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Discover Spiritual Guides</h2>
            <Button variant="outline" size="sm" className="text-orange-400 border-orange-500/50 hover:bg-orange-500/10">
              View All
            </Button>
          </div>
           <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
             {spiritualTeachers.map((teacher) => (
               <div 
                 key={teacher.id} 
                 className={`flex-shrink-0 text-center group cursor-pointer transition-all duration-300 ${
                   selectedTeacher === teacher.name 
                     ? 'scale-105 shadow-2xl shadow-orange-500/30' 
                     : 'hover:scale-105'
                 }`}
                 onClick={() => setSelectedTeacher(selectedTeacher === teacher.name ? null : teacher.name)}
               >
                <div className="relative w-28 h-28 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Avatar className={`w-28 h-28 border-4 transition-all duration-300 shadow-xl ${
                    selectedTeacher === teacher.name 
                      ? 'border-orange-500 shadow-orange-500/60 ring-4 ring-orange-500/30' 
                      : 'border-orange-400/60 group-hover:border-orange-400 group-hover:shadow-orange-500/40'
                  }`}>
                    <AvatarImage src={teacher.image} alt={teacher.name} className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-gray-700 to-gray-800 text-orange-400 font-bold text-lg">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-3 border-gray-800 flex items-center justify-center shadow-lg">
                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Selected indicator */}
                  {selectedTeacher === teacher.name && (
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-orange-500 rounded-full border-3 border-gray-800 flex items-center justify-center shadow-lg">
                      <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                    </div>
                  )}
                  
                  {/* Glow effect for selected */}
                  {selectedTeacher === teacher.name && (
                    <div className="absolute inset-0 rounded-full bg-orange-500/20 animate-pulse"></div>
                  )}
                </div>
                
                {/* Teacher Info */}
                <div className="px-2">
                  <h3 className="font-bold text-base text-white mb-1 group-hover:text-orange-300 transition-colors duration-300 leading-tight">
                    {teacher.name}
                  </h3>
                  <p className="text-sm text-gray-300 mb-2 leading-tight">{teacher.title}</p>
                  <div className="flex items-center justify-center gap-1 text-sm text-orange-400 font-medium">
                    <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                    <span>{teacher.followers} followers</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Maharaj Teachings Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Maharaj Teachings</h2>
            <Button variant="ghost" size="sm" className="text-orange-400 hover:text-orange-300">
              See All &gt;
            </Button>
          </div>
                  
          
          {/* Horizontal Scroll Video Cards */}
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {getFilteredVideos().slice(0, 6).map((video) => (
              <div key={video.id} className="flex-shrink-0 w-80 group cursor-pointer" onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setSelectedVideo(video);
              }}>
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-80 h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-lg" />
                  
                  {/* Top Left - Category */}
                  <div className="absolute top-3 left-3">
                    <span className="text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
                      {video.channel === "Pradeep Mishra Official" ? "Shiv Katha" : 
                       video.channel === "Premand Maharaj" ? "एकांतिक वार्तालाप & दर्शन" :
                       video.channel === "OSHO Hindi" ? "Meditation & Philosophy" : "Spiritual Content"}
                    </span>
                  </div>
                  
                  {/* Top Right - Duration */}
                  <div className="absolute top-3 right-3">
                    <span className="text-xs text-white bg-black/70 px-2 py-1 rounded font-medium">
                      {video.duration}
                    </span>
                  </div>
                  
                  {/* Bottom Left - Date/Episode */}
                  <div className="absolute bottom-3 left-3">
                    <span className="text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
                      {video.channel === "Pradeep Mishra Official" ? "Live Katha" : 
                       video.channel === "Premand Maharaj" ? "06 जुलाई 2025 #962" :
                       video.channel === "OSHO Hindi" ? "OSHO Wisdom" : "Spiritual Content"}
                    </span>
                  </div>
                  
                  {/* Main Title Overlay */}
                  <div className="absolute bottom-12 left-3 right-3">
                    <h3 className="text-white font-bold text-sm leading-tight">
                      {video.title}
                    </h3>
                  </div>
                </div>
                
                {/* Title Below Thumbnail */}
                <div className="mt-3">
                  <h4 className="text-white text-sm font-medium">
                    {video.channel === "Pradeep Mishra Official" ? video.title : 
                     video.channel === "Premand Maharaj" ? `#962 Ekantik Vartalaap & Darshan / 06-07-2025` :
                     video.channel === "OSHO Hindi" ? video.title : video.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
                  
                  {/* Enhanced Empty State */}
                  {getFilteredVideos().length === 0 && (
                    <div className="text-center py-16">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-600/20 to-amber-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Play className="w-10 h-10 text-orange-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-orange-900 mb-3">No videos found</h3>
                      <p className="text-orange-700 mb-6 max-w-sm mx-auto">
                        Try selecting a different spiritual teacher or explore all featured content.
                      </p>
                      <Button
                        onClick={() => setSelectedTeacher(null)}
                        className="bg-orange-600 hover:bg-orange-700 text-white"
                      >
                        View All Content
                      </Button>
                    </div>
                  )}
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
                  <span>{selectedVideo.channel}</span>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Home;
