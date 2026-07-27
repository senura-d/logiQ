"use client";

import { useEffect, useRef } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch((err) => {
        console.warn("Hero video autoplay deferred:", err);
      });
    };

    playVideo();

    // Fallback manual loop safeguard to guarantee full video continuous looping
    const handleEnded = () => {
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      poster="/images/home-hero-warehouse.png"
      className="w-full h-full object-cover object-center pointer-events-none"
    >
      <source src="/videos/hero-bg-v2.webm" type="video/webm" />
      <source src="/videos/hero-bg-v2.mp4" type="video/mp4" />
      <img
        className="w-full h-full object-cover object-center"
        alt="Futuristic automated warehouse with robots, AMRs, and smart conveyor belts"
        src="/images/home-hero-warehouse.png"
      />
    </video>
  );
}
