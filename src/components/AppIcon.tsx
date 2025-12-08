"use client";
import Image from "next/image";
import { useState } from "react";

interface AppIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function AppIcon({ src, alt, width, height, className }: AppIconProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  // Use unoptimized for podcastindex.org images to avoid 403 errors
  const isPodcastIndexImage = src.includes("podcastindex.org");

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-muted ${className || ""}`}
        style={{ width, height }}
      >
        <span className="text-xs text-muted-foreground">No image</span>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      unoptimized={isPodcastIndexImage}
      onError={() => {
        setHasError(true);
      }}
    />
  );
}

