import { Play } from "lucide-react";
import { useState } from "react";
import VideoPlayerDialog from "./VideoPlayerDialog";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  videoUrl: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(false);

  return (
    <>
      <div className="group cursor-pointer" onClick={() => setIsPlayerOpen(true)}>
      <div className="relative aspect-video rounded-lg overflow-hidden bg-muted shadow-soft">
        <img 
          src={video.thumbnail} 
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-divine">
            <Play className="w-6 h-6 text-secondary-foreground fill-current ml-0.5" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-foreground">
          {video.duration}
        </div>
      </div>

      <h4 className="mt-2 text-sm font-medium text-foreground line-clamp-2 group-hover:text-secondary transition-colors">
        {video.title}
      </h4>
    </div>

    <VideoPlayerDialog
      isOpen={isPlayerOpen}
      onClose={() => setIsPlayerOpen(false)}
      videoUrl={video.videoUrl}
      title={video.title}
    />
    </>
  );
};

export default VideoCard;
