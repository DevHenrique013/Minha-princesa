import { useState } from "react";

type ImageLazyProps = {
  src: string; // webp
  fallback?: string; // webp/png
  alt?: string;
  className?: string;
};

export function ImageLazy({
  src,
  fallback,
  alt = "",
  className = "",
}: ImageLazyProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <div className="absolute inset-0 bg-zinc-800 animate-pulse" />
      )}

      <picture>
        {fallback && <source srcSet={src} type="image/webp" />}
        <img
          src={fallback || src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`
            w-full h-full object-cover transition-opacity duration-700
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />
      </picture>
    </div>
  );
}
