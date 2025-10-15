import { useState } from "react";
import { Search, Play, Clock, Trash2, Download, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Import assets
import videoHero from "@/assets/video-hero.jpg";
import videoBhajan1 from "@/assets/video-bhajan-1.jpg";
import videoGuru1 from "@/assets/video-guru-1.jpg";
import videoKirtan1 from "@/assets/video-kirtan-1.jpg";
import videoTeaching1 from "@/assets/video-teaching-1.jpg";
import premanand1 from "@/assets/premanand-1.jpg";
import premanand2 from "@/assets/premanand-2.jpg";
import premanand3 from "@/assets/premanand-3.jpg";

const Watchlist = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Continue Watching", "Saved", "Downloaded", "Completed"];

  const watchlistItems = [
    {
      id: "1",
      title: "Gaur Gopal Das on 'Mindful Relationships'",
      guide: "Gaur Gopal Das",
      thumbnail: videoHero,
      duration: "52:20",
      progress: 70,
      status: "Continue Watching",
      addedDate: "2 days ago",
      isDownloaded: false
    },
    {
      id: "2",
      title: "Karma & Destiny Wisdom Stories",
      guide: "Swami Muktananda",
      thumbnail: premanand1,
      duration: "41:05",
      progress: 45,
      status: "Continue Watching", 
      addedDate: "3 days ago",
      isDownloaded: true
    },
    {
      id: "3",
      title: "Daily Inspiration",
      guide: "Gaur Gopal Das",
      thumbnail: videoBhajan1,
      duration: "15:30",
      progress: 100,
      status: "Completed",
      addedDate: "1 week ago",
      isDownloaded: false
    },
    {
      id: "4",
      title: "Kirtan Stories - Krishna Leela",
      guide: "Premand Maharaj",
      thumbnail: videoKirtan1,
      duration: "45:20",
      progress: 0,
      status: "Saved",
      addedDate: "4 days ago",
      isDownloaded: false
    },
    {
      id: "5",
      title: "Vedic Wisdom for Modern Life",
      guide: "Swami Muktananda",
      thumbnail: videoTeaching1,
      duration: "38:15",
      progress: 0,
      status: "Saved",
      addedDate: "5 days ago",
      isDownloaded: true
    },
    {
      id: "6",
      title: "Bhakti Yoga Practices",
      guide: "Sri Sri Ravi Shankar",
      thumbnail: videoGuru1,
      duration: "52:10",
      progress: 25,
      status: "Continue Watching",
      addedDate: "1 day ago",
      isDownloaded: false
    }
  ];

  const filteredItems = watchlistItems.filter(item => {
    if (filter === "All") return true;
    if (filter === "Continue Watching") return item.status === "Continue Watching";
    if (filter === "Saved") return item.status === "Saved";
    if (filter === "Downloaded") return item.isDownloaded;
    if (filter === "Completed") return item.status === "Completed";
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Continue Watching":
        return "bg-amber-600";
      case "Saved":
        return "bg-blue-600";
      case "Completed":
        return "bg-green-600";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="px-4 py-6 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-2">Watchlist</h1>
          <p className="text-gray-400">Your saved spiritual content</p>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search your watchlist"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-gray-400 focus:border-amber-500"
          />
        </div>

        {/* Filters */}
        <section>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {filters.map((filterOption) => (
              <Button
                key={filterOption}
                variant={filter === filterOption ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(filterOption)}
                className={`whitespace-nowrap ${
                  filter === filterOption
                    ? "bg-amber-600 hover:bg-amber-700 text-white"
                    : "bg-slate-800/50 border-slate-700 text-gray-300 hover:bg-slate-700"
                }`}
              >
                {filterOption}
              </Button>
            ))}
          </div>
        </section>

        {/* Watchlist Items */}
        <section>
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex">
                    <div className="relative w-32 h-20 flex-shrink-0">
                      <img 
                        src={item.thumbnail} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      <Button 
                        size="sm" 
                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30"
                      >
                        <Play className="w-3 h-3" />
                      </Button>
                      {item.isDownloaded && (
                        <div className="absolute top-1 right-1">
                          <Download className="w-3 h-3 text-green-400" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 p-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-medium text-sm text-white line-clamp-2 mb-1">{item.title}</h3>
                          <p className="text-xs text-gray-400 mb-1">{item.guide}</p>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${getStatusColor(item.status)} text-white text-xs`}>
                              {item.status}
                            </Badge>
                            <span className="text-xs text-gray-500">{item.addedDate}</span>
                          </div>
                        </div>
                        <div className="flex gap-1 ml-2">
                          <Button variant="ghost" size="sm" className="p-1">
                            <Share className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="p-1">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      {item.progress > 0 && (
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>Progress</span>
                            <span>{item.progress}%</span>
                          </div>
                          <Progress value={item.progress} className="h-1" />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.duration}</span>
                        </div>
                        {item.isDownloaded && (
                          <div className="flex items-center gap-1 text-green-400">
                            <Download className="w-3 h-3" />
                            <span>Downloaded</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No items found</h3>
            <p className="text-gray-400 mb-4">
              {filter === "All" 
                ? "Your watchlist is empty. Start saving content to see it here."
                : `No ${filter.toLowerCase()} items found.`
              }
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Explore Content
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
