import { FC } from "react";
import { cn } from "@/lib/utils";

interface VideoProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const Video: FC<VideoProps> = ({
  src,
  className,
  autoPlay = true,
  loop = true,
  muted = true,
  controls = false,
}) => {
  return (
    <div
      className={cn(
        "w-full h-full max-w-[800px] max-h-[500px] mx-auto rounded-2xl overflow-hidden",
        className
      )}
    >
      <video
        className="w-full h-full object-contain"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
      >
        <source src={src} type="video/mp4" />
        브라우저가 비디오 태그를 지원하지 않습니다.
      </video>
    </div>
  );
};

export default Video;
