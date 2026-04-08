'use client';

import { useRef, useState, useEffect } from 'react';

export default function Hero() {
  const videos = [
    { id: 1, src: '/videohero1.mp4' },
    { id: 2, src: '/videohero2.mp4' },
    { id: 3, src: '/videohero3.mp4' },
  ];

  return (
    <section className="relative h-screen bg-black text-white">
      {/* Mobile: Show only first video */}
      <div className="absolute inset-0 md:hidden">
        <VideoCard video={videos[0]} />
      </div>
      
      {/* Desktop: Show all 3 videos */}
      <div className="absolute inset-0 hidden md:grid md:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: { id: number; src: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, ignore error
      });
      setIsPlaying(true);
    }
  }, []);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full bg-black group cursor-pointer" onClick={togglePlay}>
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        playsInline
        muted
        autoPlay
      >
        <source src={video.src} type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
            <svg
              className="w-8 h-8 text-white ml-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
