import { ChevronRight } from "lucide-react";
import VideoCard from "./VideoCard";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
}

interface ContentRowProps {
  title: string;
  videos: Video[];
}

const ContentRow = ({ title, videos }: ContentRowProps) => {
  return (
    <section className="py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-foreground">
            {title}
          </h3>
          <button className="flex items-center gap-1 text-secondary hover:text-secondary/80 transition-colors text-sm font-medium">
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentRow;
