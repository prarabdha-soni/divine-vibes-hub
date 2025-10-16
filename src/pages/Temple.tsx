import React, { useState, useEffect } from "react";
import { Bell, Clock, Play, Calendar, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Temple = () => {
  const [notifications, setNotifications] = useState([]);
  const [selectedTemple, setSelectedTemple] = useState(null);

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

  // Aarti timings (in 24-hour format)
  const aartiTimings = {
    "Shirdi Sai Baba": [
      { name: "Kakad Aarti", time: "05:00", duration: "30 min" },
      { name: "Madhyan Aarti", time: "12:00", duration: "30 min" },
      { name: "Dhoop Aarti", time: "18:30", duration: "30 min" },
      { name: "Shej Aarti", time: "22:00", duration: "30 min" }
    ],
    "Mahakaleshwar Temple": [
      { name: "Bhasma Aarti", time: "04:00", duration: "45 min" },
      { name: "Morning Aarti", time: "07:00", duration: "30 min" },
      { name: "Evening Aarti", time: "19:00", duration: "30 min" },
      { name: "Shayan Aarti", time: "22:30", duration: "30 min" }
    ],
    "ISKCON Vrindavan": [
      { name: "Mangal Aarti", time: "04:30", duration: "45 min" },
      { name: "Tulsi Aarti", time: "07:30", duration: "30 min" },
      { name: "Raj Bhog Aarti", time: "12:00", duration: "30 min" },
      { name: "Sandhya Aarti", time: "19:30", duration: "30 min" },
      { name: "Shayan Aarti", time: "21:00", duration: "30 min" }
    ]
  };

  // Live streams data
  const liveStreams = [
    {
      id: "1",
      temple: "Shirdi Sai Baba",
      title: "Sai Baba Live Darshan - Shirdi",
      subtitle: "24/7 Live Darshan from Shirdi Sai Baba Temple",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=jkzbpnH7jcU"),
      duration: "Live",
      viewers: "15.2K",
      channel: "Shirdi Sai Baba Sansthan",
      youtubeUrl: "https://www.youtube.com/watch?v=jkzbpnH7jcU",
      location: "Shirdi, Maharashtra",
      status: "Live Now"
    },
    {
      id: "2",
      temple: "Mahakaleshwar Temple",
      title: "Mahakal Live Darshan - Ujjain",
      subtitle: "24/7 Live Darshan from Mahakaleshwar Jyotirlinga",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=M0H3NH_IuqU"),
      duration: "Live",
      viewers: "8.7K",
      channel: "Mahakaleshwar Temple Official",
      youtubeUrl: "https://www.youtube.com/watch?v=M0H3NH_IuqU",
      location: "Ujjain, Madhya Pradesh",
      status: "Live Now"
    },
    {
      id: "3",
      temple: "ISKCON Vrindavan",
      title: "Mangal Aarti Live - Vrindavan",
      subtitle: "Live Mangal Aarti from Shri Govardhan Dham",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=7YPR3ix5mWY"),
      duration: "Live",
      viewers: "12.4K",
      channel: "ISKCON Vrindavan",
      youtubeUrl: "https://www.youtube.com/watch?v=7YPR3ix5mWY",
      location: "Vrindavan, Uttar Pradesh",
      status: "Live Now"
    },
    {
      id: "4",
      temple: "Shirdi Sai Baba",
      title: "Sai Baba Live Darshan - Today",
      subtitle: "Today's Live Darshan from Shirdi",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=cMrHfHhFcJ4"),
      duration: "Live",
      viewers: "9.3K",
      channel: "Sai Baba Bhakthi Channel",
      youtubeUrl: "https://www.youtube.com/watch?v=cMrHfHhFcJ4",
      location: "Shirdi, Maharashtra",
      status: "Live Now"
    },
    {
      id: "5",
      temple: "Mahakaleshwar Temple",
      title: "24/7 Mahakaleshwar Jyotirlinga Live",
      subtitle: "Continuous Live Darshan from Mahakaleshwar",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=_RoV-sueMWs"),
      duration: "Live",
      viewers: "6.8K",
      channel: "Mahakaleshwar Live",
      youtubeUrl: "https://www.youtube.com/watch?v=_RoV-sueMWs",
      location: "Ujjain, Madhya Pradesh",
      status: "Live Now"
    },
    {
      id: "6",
      temple: "ISKCON Vrindavan",
      title: "Kartik Month Special Aarti",
      subtitle: "Special Kartik Month Aarti from Govardhan Dham",
      thumbnail: getYouTubeThumbnail("https://www.youtube.com/watch?v=V_3pzZU7he4"),
      duration: "Live",
      viewers: "11.5K",
      channel: "ISKCON Vrindavan",
      youtubeUrl: "https://www.youtube.com/watch?v=V_3pzZU7he4",
      location: "Vrindavan, Uttar Pradesh",
      status: "Live Now"
    }
  ];

  // Get current time and next aarti
  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getNextAarti = (temple) => {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    const timings = aartiTimings[temple];
    if (!timings) return null;

    for (let aarti of timings) {
      const [hours, minutes] = aarti.time.split(':').map(Number);
      const aartiTime = hours * 60 + minutes;
      
      if (aartiTime > currentTime) {
        return {
          ...aarti,
          timeUntil: aartiTime - currentTime
        };
      }
    }
    
    // If no aarti today, return first aarti of tomorrow
    return {
      ...timings[0],
      timeUntil: (24 * 60) - currentTime + (timings[0].time.split(':')[0] * 60 + parseInt(timings[0].time.split(':')[1]))
    };
  };

  // Set up notifications (6 hours before aarti)
  useEffect(() => {
    const setupNotifications = () => {
      Object.keys(aartiTimings).forEach(temple => {
        const timings = aartiTimings[temple];
        timings.forEach(aarti => {
          const [hours, minutes] = aarti.time.split(':').map(Number);
          const aartiTime = new Date();
          aartiTime.setHours(hours, minutes, 0, 0);
          
          // 6 hours before aarti
          const notificationTime = new Date(aartiTime.getTime() - (6 * 60 * 60 * 1000));
          
          if (notificationTime > new Date()) {
            const timeUntil = notificationTime.getTime() - new Date().getTime();
            
            setTimeout(() => {
              if ('Notification' in window && Notification.permission === 'granted') {
                new Notification(`Aarti Reminder - ${temple}`, {
                  body: `${aarti.name} will start in 6 hours at ${aarti.time}`,
                  icon: '/icon-192x192.png'
                });
              }
            }, timeUntil);
          }
        });
      });
    };

    // Request notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          setupNotifications();
        }
      });
    } else if (Notification.permission === 'granted') {
      setupNotifications();
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="px-4 py-6 space-y-6">
        {/* Temple Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">Live Temple Darshan</h1>
          <p className="text-xl text-white/80 mb-4">Experience divine aarti and darshan from sacred temples</p>
          <div className="w-24 h-1 bg-white mx-auto rounded-full shadow-lg"></div>
        </div>

        {/* Current Time & Next Aarti */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="bg-black border-white/20">
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-white mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Current Time</h3>
              <p className="text-2xl font-bold text-white">{getCurrentTime()}</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black border-white/20">
            <CardContent className="p-4 text-center">
              <Bell className="w-8 h-8 text-white mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Notifications</h3>
              <p className="text-sm text-white/80">6 hours before aarti</p>
            </CardContent>
          </Card>
          
          <Card className="bg-black border-white/20">
            <CardContent className="p-4 text-center">
              <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-white mb-1">Aarti Schedule</h3>
              <p className="text-sm text-white/80">Daily timings</p>
            </CardContent>
          </Card>
        </div>

        {/* Aarti Timings */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md">Today's Aarti Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.keys(aartiTimings).map((temple) => (
              <Card key={temple} className="bg-black border-white/20">
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-white mr-2" />
                    {temple}
                  </h3>
                  <div className="space-y-3">
                    {aartiTimings[temple].map((aarti, index) => {
                      const nextAarti = getNextAarti(temple);
                      const isNext = nextAarti && nextAarti.name === aarti.name;
                      
                      return (
                        <div key={index} className={`p-3 rounded-lg ${
                          isNext ? 'bg-white/10 border border-white/30' : 'bg-white/5'
                        }`}>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-semibold text-white">{aarti.name}</p>
                              <p className="text-sm text-white/80">{aarti.duration}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-white font-bold">{aarti.time}</p>
                              {isNext && (
                                <Badge className="bg-white text-black text-xs font-semibold">
                                  Next
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Streams */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-6 drop-shadow-md">Live Darshan Streams</h2>
          <div className="grid grid-cols-2 gap-4">
            {liveStreams.map((stream) => (
              <Card key={stream.id} className="bg-black border-white/20 overflow-hidden hover:bg-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-white/10 group cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative w-full h-64">
                    <img
                      src={stream.thumbnail}
                      alt={stream.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                         onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setSelectedTemple(stream);
                         }}>
                      <div className="bg-white rounded-full p-4 hover:bg-gray-200 transition-all duration-300 shadow-2xl hover:scale-110">
                        <Play className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <div className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      {stream.status}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {stream.viewers} watching
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full flex items-center font-medium">
                      <MapPin className="w-3 h-3 mr-1" />
                      {stream.location}
                    </div>
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-bold text-white mb-1 drop-shadow-md leading-tight">{stream.title}</h3>
                    <p className="text-white/80 text-xs mb-2 line-clamp-2">{stream.subtitle}</p>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-white font-semibold">{stream.temple}</span>
                      <div className="flex items-center text-white/60">
                        <Users className="w-3 h-3 mr-1" />
                        {stream.viewers}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Live Stream Modal */}
        {selectedTemple && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-[100] p-4">
            <div className="bg-black border border-white/20 rounded-lg w-full max-w-5xl max-h-[95vh] overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between p-4 border-b border-white/20">
                <h3 className="text-lg font-semibold text-white">{selectedTemple.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedTemple(null)}
                  className="text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  ✕
                </Button>
              </div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={getYouTubeEmbedUrl(selectedTemple.youtubeUrl)}
                  title={selectedTemple.title}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-black border-t border-white/20">
                <p className="text-sm text-white/80 mb-2">{selectedTemple.subtitle}</p>
                <div className="flex items-center gap-4 text-xs text-white/60">
                  <span>{selectedTemple.duration}</span>
                  <span>{selectedTemple.viewers} watching</span>
                  <span>{selectedTemple.channel}</span>
                  <span className="flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {selectedTemple.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Temple;
