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
    { id: "1", title: "#962 Ekantik Vartalaap & Darshan / 06-07-2025", thumbnail: videoGuru1, duration: "45:30", videoUrl: "https://www.youtube.com/watch?v=v_KB_ktJK84" },
    { id: "2", title: "#806 Ekantik Vartalaap & Darshan / 31-01-2025", thumbnail: videoTeaching1, duration: "38:15", videoUrl: "https://www.youtube.com/watch?v=P1VxhkTgWWA" },
    { id: "3", title: "ये 11 सावधानियाँ आपके जीवन को खुशियों से भर देंगी", thumbnail: videoGuru1, duration: "52:20", videoUrl: "https://www.youtube.com/watch?v=9oZeaFLRwPw" },
    { id: "4", title: "भगवान से भी बढ़कर है भगवान का नाम ! नाम जप करने की अद्भुत शक्ति", thumbnail: videoTeaching1, duration: "41:05", videoUrl: "https://www.youtube.com/watch?v=rsN40D2xcdE" },
    { id: "5", title: "निराश मत होओ, तुम्हारी सारी इच्छा पूरी हो जाएगी !", thumbnail: videoGuru1, duration: "48:45", videoUrl: "https://www.youtube.com/watch?v=EWlYIY-ODfc" },
  ];

  const kidsContent = [
    { id: "11", title: "Krishna and the Butter Thief", thumbnail: videoKids1, duration: "8:30", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
    { id: "12", title: "Radha's Garden of Love", thumbnail: videoKids2, duration: "6:45", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
    { id: "13", title: "The Magic Flute Story", thumbnail: videoKids1, duration: "7:15", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" },
    { id: "14", title: "Krishna's Peacock Feather", thumbnail: videoKids2, duration: "5:50", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4" },
    { id: "15", title: "Dancing with Gopis", thumbnail: videoKids1, duration: "9:20", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" },
  ];

  const bhajansKirtans = [
    { id: "21", title: "Hare Krishna Maha Mantra - 108 Times", thumbnail: videoBhajan1, duration: "25:00", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4" },
    { id: "22", title: "Radhe Radhe Kirtan", thumbnail: videoKirtan1, duration: "18:30", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4" },
    { id: "23", title: "Evening Aarti Collection", thumbnail: videoBhajan1, duration: "32:15", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" },
    { id: "24", title: "Krishna Bhajans for Meditation", thumbnail: videoKirtan1, duration: "42:00", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { id: "25", title: "Divine Love Songs", thumbnail: videoBhajan1, duration: "28:45", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" },
  ];

  const teachings = [
    { id: "31", title: "The Philosophy of Divine Love", thumbnail: videoTeaching1, duration: "55:20", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" },
    { id: "32", title: "Bhagavad Gita Chapter 9 Explained", thumbnail: videoGuru1, duration: "48:30", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" },
    { id: "33", title: "Surrender and Grace", thumbnail: videoTeaching1, duration: "35:15", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4" },
    { id: "34", title: "The Eternal Bond of Radha Krishna", thumbnail: videoGuru1, duration: "44:50", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4" },
    { id: "35", title: "Living a Life of Devotion", thumbnail: videoTeaching1, duration: "39:40", videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" },
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
