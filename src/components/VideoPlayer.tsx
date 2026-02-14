import React, { useEffect, useRef } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

interface VideoPlayerProps {
  src: string;
  isDash?: boolean;
  id?: string;
}

function VideoPlayerInner({ src, isDash = false, id }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<any>(null);

  useEffect(() => {
    let disposed = false;

    const initPlayer = async () => {
      const videojs = (await import("video.js")).default;
      await import("video.js/dist/video-js.css");

      if (isDash) {
        await import("videojs-contrib-dash");
      }

      if (videoRef.current && !playerRef.current && !disposed) {
        const player = videojs(videoRef.current, {
          controls: true,
          responsive: true,
          fluid: true,
          aspectRatio: "16:9",
        });

        if (isDash) {
          player.src({ src, type: "application/dash+xml" });
        }

        playerRef.current = player;
      }
    };

    initPlayer();

    return () => {
      disposed = true;
      if (playerRef.current) {
        playerRef.current.dispose();
        playerRef.current = null;
      }
    };
  }, [src, isDash]);

  if (isDash) {
    return (
      <div data-vjs-player>
        <video
          ref={videoRef}
          id={id}
          className="video-js vjs-fluid vjs-16-9"
          preload="auto"
        />
      </div>
    );
  }

  return (
    <video width="100%" controls id={id}>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <BrowserOnly fallback={<div>Loading video...</div>}>
      {() => <VideoPlayerInner {...props} />}
    </BrowserOnly>
  );
}
