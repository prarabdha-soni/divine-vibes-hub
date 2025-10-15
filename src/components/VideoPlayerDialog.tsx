import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoPlayerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoPlayerDialog = ({ isOpen, onClose, videoUrl, title }: VideoPlayerDialogProps) => {
  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    const youtubeRegex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/;
    const match = url.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}?autoplay=1`;
    }
    return url;
  };

  const isYouTube = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be');
  const embedUrl = isYouTube ? getYouTubeEmbedUrl(videoUrl) : videoUrl;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <div className="relative w-full aspect-video bg-background">
          {isYouTube ? (
            <iframe
              className="w-full h-full"
              src={embedUrl}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              className="w-full h-full"
              controls
              autoPlay
              src={videoUrl}
            >
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerDialog;
