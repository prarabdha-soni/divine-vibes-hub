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
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Function to filter videos based on selected teacher
  const getFilteredVideos = () => {
    if (!selectedTeacher) return featuredVideos;
    return featuredVideos.filter(video => {
      if (selectedTeacher === "Pradeep Mishra") {
        return video.channel === "Pradeep Mishra Official";
      } else if (selectedTeacher === "Premand Maharaj") {
        return video.channel === "Premand Maharaj";
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
      name: "Amma",
      title: "Divine Mother",
      image: babaImages[2], // baba3
      followers: "1.5M"
    },
    {
      id: "4",
      name: "Sri Sri Ravi Shankar",
      title: "Spiritual Leader",
      image: babaImages[3], // baba4
      followers: "2.3M"
    },
    {
      id: "5",
      name: "Swami Muktananda",
      title: "Meditation Master",
      image: babaImages[0], // baba1
      followers: "650K"
    },
    {
      id: "6",
      name: "Premand Maharaj",
      title: "Wisdom Teacher",
      image: babaImages[1], // baba2
      followers: "1.2M"
    }
  ];

  // Prominent video cards with YouTube links
  const featuredVideos = [
    {
      id: "1",
      title: "Pradeep Mishra Shiv Mahapuran Katha in Surat",
      subtitle: "Pandit Pradeep Ji Mishra - Surat Katha",
      thumbnail: videoGuru1,
      duration: "1:45:20",
      views: "1.2M",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=gYt9VGWdqOU"
    },
    {
      id: "2",
      title: "भजन – मेरा हाथ पकड़ लो ओ भोले",
      subtitle: "Pujya Pandit Pradeep Ji Mishra - Devotional Bhajan",
      thumbnail: videoBhajan1,
      duration: "0:15:30",
      views: "950K",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=O1HA55cfMfc"
    },
    {
      id: "3",
      title: "शिव भजन: Dil Tujhko Diya O Bholenath",
      subtitle: "Shri Pradeep Mishra Ji - Shiva Bhajan",
      thumbnail: videoKirtan1,
      duration: "0:08:45",
      views: "1.1M",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=vlSlBQrFiuY"
    },
    {
      id: "4",
      title: "कैसे प्राप्त होगा धन, वैभव एवंं यश",
      subtitle: "Pandit Pradeep Ji Mishra - Wealth & Prosperity",
      thumbnail: videoHero,
      duration: "1:20:15",
      views: "1.3M",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=WI-27jSM6bU"
    },
    {
      id: "5",
      title: "हे भोला शंकरा आवड तुला बेलाची",
      subtitle: "Pujya Pandit Pradeep Ji Mishra - Shiva Bhajan",
      thumbnail: videoKids1,
      duration: "0:12:30",
      views: "850K",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=IRELbKgutkI"
    },
    {
      id: "6",
      title: "Live – 06 May आज की शिव महापुराण कथा",
      subtitle: "Pandit Pradeep Ji Mishra - Live Shiva Purana Katha",
      thumbnail: videoKids2,
      duration: "2:45:20",
      views: "1.6M",
      channel: "Pradeep Mishra Official",
      youtubeUrl: "https://www.youtube.com/watch?v=j1gxvHACKos"
    },
    {
      id: "9",
      title: "आपने तो भगवान के दर्शन किए हैं उनका रूप कैसा है ?",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - God's Form",
      thumbnail: premanand3,
      duration: "45:30",
      views: "1.2M",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=v_KB_ktJK84"
    },
    {
      id: "10",
      title: "हमारी शादी कहां होगी बच्चे कैसे होंगे",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - Life Questions",
      thumbnail: premanand4,
      duration: "38:15",
      views: "950K",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=P1VxhkTgWWA"
    },
    {
      id: "11",
      title: "भगवान से भी बढ़कर है भगवान का नाम !",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - Power of God's Name",
      thumbnail: premanand5,
      duration: "41:05",
      views: "1.1M",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=rsN40D2xcdE"
    },
    {
      id: "12",
      title: "निराश मत हो ! तुम्हारी सारी इच्छा पूरी हो जाएगी !",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - Hope & Fulfillment",
      thumbnail: premanand6,
      duration: "48:45",
      views: "1.3M",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=EWlYIY-ODfc"
    },
    {
      id: "13",
      title: "लोग काम करवाने के लिए बच्चों या भगवान की कसम देते हैं",
      subtitle: "Shri Hit Premanand Govind Sharan Ji Maharaj - Oaths & Promises",
      thumbnail: premanand1,
      duration: "35:20",
      views: "850K",
      channel: "Premand Maharaj",
      youtubeUrl: "https://www.youtube.com/watch?v=XPmNxF938oY"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 via-amber-50 to-orange-100 text-orange-900">
      <div className="px-4 py-6 space-y-8">
        {/* Professional Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-orange-900 mb-3">Sanathan Secrets</h1>
          <p className="text-lg text-orange-700 mb-4">Discover Your Spiritual Journey</p>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-600 to-amber-600 mx-auto rounded-full"></div>
        </div>

        {/* Enhanced Search Bar */}
        <div className="relative max-w-md mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-600 w-5 h-5" />
          <Input
            placeholder="Search spiritual content, teachers, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 pr-4 py-3 bg-white/80 border-orange-300 text-orange-900 placeholder:text-orange-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 rounded-xl shadow-lg"
          />
        </div>

        {/* Enhanced Discover Guides Section */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-orange-900">Discover Spiritual Guides</h2>
            <Button variant="outline" size="sm" className="text-orange-600 border-orange-500/50 hover:bg-orange-500/10">
              View All
            </Button>
          </div>
           <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
             {spiritualTeachers.map((teacher) => (
               <div 
                 key={teacher.id} 
                 className={`flex-shrink-0 text-center group cursor-pointer transition-all duration-300 ${
                   selectedTeacher === teacher.name 
                     ? 'scale-110 shadow-lg shadow-orange-500/25' 
                     : 'hover:scale-110'
                 }`}
                 onClick={() => setSelectedTeacher(selectedTeacher === teacher.name ? null : teacher.name)}
               >
                <div className="relative w-24 h-24 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Avatar className={`w-24 h-24 border-3 transition-all duration-300 shadow-lg ${
                    selectedTeacher === teacher.name 
                      ? 'border-orange-600 shadow-orange-500/50' 
                      : 'border-orange-500/40 group-hover:border-orange-500/80 group-hover:shadow-orange-500/25'
                  }`}>
                    <AvatarImage src={teacher.image} alt={teacher.name} className="object-cover" />
                    <AvatarFallback className="bg-gradient-to-br from-orange-600 to-amber-600 text-white font-bold">
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {/* Online indicator */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  {/* Selected indicator */}
                  {selectedTeacher === teacher.name && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-orange-600 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-sm text-orange-900 mb-1 group-hover:text-orange-600 transition-colors duration-300">{teacher.name}</h3>
                <p className="text-xs text-orange-700 mb-2">{teacher.title}</p>
                <div className="flex items-center justify-center gap-1 text-xs text-orange-600">
                  <div className="w-1 h-1 bg-orange-600 rounded-full"></div>
                  <span>{teacher.followers} followers</span>
                </div>
              </div>
            ))}
          </div>
        </section>

                {/* Featured Video Cards - Grid Layout */}
                <section>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-semibold text-orange-900">
                      {selectedTeacher 
                        ? `${selectedTeacher} Videos` 
                        : "Featured Content"
                      }
                    </h2>
                    <div className="flex gap-2">
                      {selectedTeacher && (
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => setSelectedTeacher(null)}
                          className="text-orange-600 hover:text-orange-700"
                        >
                          Clear Filter
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
                        See All &gt;
                      </Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {getFilteredVideos().slice(0, 8).map((video) => (
                      <Card key={video.id} className="bg-white/80 border-orange-200 overflow-hidden hover:bg-white/90 transition-all duration-300 hover:shadow-lg group cursor-pointer" onClick={() => setSelectedVideo(video)}>
                        <CardContent className="p-0">
                          <div className="relative">
                            <img 
                              src={video.thumbnail} 
                              alt={video.title}
                              className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            
                            {/* Video Info Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                            
                            {/* Top Left - Category */}
                            <div className="absolute top-2 left-2">
                              <span className="text-xs text-white/90 bg-black/50 px-2 py-1 rounded">
                                {video.channel === "Pradeep Mishra Official" ? "Shiv Katha" : "Ekantik Vartalaap"}
                              </span>
                            </div>
                            
                            {/* Bottom Right - Duration */}
                            <div className="absolute bottom-2 right-2">
                              <span className="text-xs text-white bg-black/70 px-2 py-1 rounded">
                                {video.duration}
                              </span>
                            </div>
                            
                            {/* Bottom Left - Date/Episode */}
                            <div className="absolute bottom-2 left-2">
                              <span className="text-xs text-white/80 bg-black/50 px-2 py-1 rounded">
                                {video.channel === "Pradeep Mishra Official" ? "Live Katha" : "#962"}
                              </span>
                            </div>
                          </div>
                          
                          {/* Video Title Below Thumbnail */}
                          <div className="p-3">
                            <h3 className="font-semibold text-sm text-orange-900 mb-1 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
                              {video.title}
                            </h3>
                            <p className="text-xs text-orange-700">
                              {video.channel === "Pradeep Mishra Official" ? "Pandit Pradeep Ji Mishra" : "Shri Hit Premanand Govind Sharan Ji Maharaj"}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>

        {/* Video Player Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-semibold text-orange-900">{selectedVideo.title}</h3>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => setSelectedVideo(null)}
                  className="text-orange-600 hover:text-orange-700"
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
              <div className="p-4">
                <p className="text-sm text-orange-700 mb-2">{selectedVideo.subtitle}</p>
                <div className="flex items-center gap-4 text-xs text-orange-600">
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
