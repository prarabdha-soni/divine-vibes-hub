import { Play, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/radha-krishna-hero.png";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Radha Krishna Sanatan Love"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-end pb-12 md:pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground drop-shadow-lg">
              Sanatan Love
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 drop-shadow-md">
              Experience the eternal love story of Radha and Krishna through sacred teachings, devotional music, and timeless wisdom.
            </p>
            
            <div className="flex gap-3 pt-4">
              <Button size="lg" className="bg-primary-foreground text-background hover:bg-primary-foreground/90 font-semibold">
                <Play className="w-5 h-5 mr-2 fill-current" />
                Watch Now
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10">
                <Plus className="w-5 h-5 mr-2" />
                My List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
