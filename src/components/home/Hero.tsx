'use client';

import { useRef, useEffect } from 'react';

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

      {/* Dark Filter Overlay */}
      <div className="absolute inset-0 bg-black/50 z-5"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.25em] mb-2 uppercase font-francy">
            Talents, production et digital <br /> tout pour vos projets.
          </h1>
        </div>
      </div>
    </section>
  );
}

function VideoCard({ video }: { video: { id: number; src: string } }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, ignore error
      });
    }
  }, []);

  return (
    <div className="relative w-full h-full bg-black">
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
    </div>
  );
}
