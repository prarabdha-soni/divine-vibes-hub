import { Dialog, DialogContent } from "@/components/ui/dialog";

interface VideoPlayerDialogProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title: string;
}

const VideoPlayerDialog = ({ isOpen, onClose, videoUrl, title }: VideoPlayerDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <div className="relative w-full aspect-video bg-background">
          <video
            className="w-full h-full"
            controls
            autoPlay
            src={videoUrl}
          >
            <track kind="captions" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoPlayerDialog;
