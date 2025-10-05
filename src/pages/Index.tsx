import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentRow from "@/components/ContentRow";
import BottomNav from "@/components/BottomNav";
import AudioPlayer from "@/components/AudioPlayer";

import videoGuru1 from "@/assets/video-guru-1.jpg";
import videoKids1 from "@/assets/video-kids-1.jpg";
import videoKids2 from "@/assets/video-kids-2.jpg";
import videoBhajan1 from "@/assets/video-bhajan-1.jpg";
import videoTeaching1 from "@/assets/video-teaching-1.jpg";
import videoKirtan1 from "@/assets/video-kirtan-1.jpg";

const Index = () => {
  const premandMaharajVideos = [
    { id: "1", title: "Divine Love - Discourse by Premand Maharaj", thumbnail: videoGuru1, duration: "0:08", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "2", title: "Path to Devotion - Sacred Teachings", thumbnail: videoTeaching1, duration: "0:10", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
    { id: "3", title: "Understanding Bhakti Yoga", thumbnail: videoGuru1, duration: "0:07", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { id: "4", title: "Radha Krishna Leela Explained", thumbnail: videoTeaching1, duration: "0:09", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    { id: "5", title: "Journey to Self-Realization", thumbnail: videoGuru1, duration: "0:10", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <AudioPlayer />
      <Header />
      <HeroSection />
      
      <div className="space-y-8 pt-8">
        <ContentRow title="Premand Maharaj Teachings" videos={premandMaharajVideos} />
      </div>

      <BottomNav />
    </div>
  );
};

export default Index;
