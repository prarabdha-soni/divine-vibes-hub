import { Play, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import VideoPlayerDialog from "./VideoPlayerDialog";
import heroImage from "@/assets/video-hero.jpg";

const HeroSection = () => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const videoUrl = "https://www.youtube.com/watch?v=CpizQwXevwQ";

  return (
    <>
      <section className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sanatan Love Featured Video"
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-end pb-16 md:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground drop-shadow-2xl">
                Sanatan Love
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-foreground/90 drop-shadow-lg max-w-xl">
                Experience the eternal love story of Radha and Krishna through sacred teachings, devotional music, and timeless wisdom.
              </p>
              
              <div className="flex gap-3 pt-4">
                <Button 
                  size="lg" 
                  className="bg-primary-foreground text-background hover:bg-primary-foreground/90 font-semibold shadow-lg"
                  onClick={() => setIsPlayerOpen(true)}
                >
                  <Play className="w-5 h-5 mr-2 fill-current" />
                  Play
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-muted/50 backdrop-blur-sm border-foreground/20 text-foreground hover:bg-muted/80"
                >
                  <Info className="w-5 h-5 mr-2" />
                  More Info
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoPlayerDialog
        isOpen={isPlayerOpen}
        onClose={() => setIsPlayerOpen(false)}
        videoUrl={videoUrl}
        title="Sanatan Love"
      />
    </>
  );
};

export default HeroSection;
