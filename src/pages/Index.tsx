import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContentRow from "@/components/ContentRow";
import BottomNav from "@/components/BottomNav";
import AudioPlayer from "@/components/AudioPlayer";

import premanand1 from "@/assets/premanand-1.jpg";
import premanand2 from "@/assets/premanand-2.jpg";
import premanand3 from "@/assets/premanand-3.jpg";
import premanand4 from "@/assets/premanand-4.jpg";
import premanand5 from "@/assets/premanand-5.jpg";
import premanand6 from "@/assets/premanand-6.jpg";

const Index = () => {
  const premandMaharajVideos = [
    { id: "1", title: "#962 Ekantik Vartalaap & Darshan / 06-07-2025", thumbnail: premanand1, duration: "45:30", videoUrl: "https://www.youtube.com/watch?v=v_KB_ktJK84" },
    { id: "2", title: "#806 Ekantik Vartalaap & Darshan / 31-01-2025", thumbnail: premanand2, duration: "38:15", videoUrl: "https://www.youtube.com/watch?v=P1VxhkTgWWA" },
    { id: "3", title: "ये 11 सावधानियाँ आपके जीवन को खुशियों से भर देंगी", thumbnail: premanand3, duration: "52:20", videoUrl: "https://www.youtube.com/watch?v=9oZeaFLRwPw" },
    { id: "4", title: "भगवान से भी बढ़कर है भगवान का नाम ! नाम जप करने की अद्भुत शक्ति", thumbnail: premanand4, duration: "41:05", videoUrl: "https://www.youtube.com/watch?v=rsN40D2xcdE" },
    { id: "5", title: "निराश मत होओ, तुम्हारी सारी इच्छा पूरी हो जाएगी !", thumbnail: premanand5, duration: "48:45", videoUrl: "https://www.youtube.com/watch?v=EWlYIY-ODfc" },
    { id: "6", title: "#1001 Ekantik Vartalaap & Darshan / 14-08-2025", thumbnail: premanand6, duration: "35:20", videoUrl: "https://www.youtube.com/watch?v=XPmNxF938oY" },
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
