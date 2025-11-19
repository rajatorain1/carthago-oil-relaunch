import { ImgHTMLAttributes, useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageOptimizedProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  aspectRatio?: string;
  priority?: boolean;
}

/**
 * Optimized image component for Core Web Vitals
 * - Lazy loading by default
 * - Proper aspect ratio to prevent layout shift
 * - Loading states
 */
export const ImageOptimized = ({
  src,
  alt,
  aspectRatio,
  priority = false,
  className,
  ...props
}: ImageOptimizedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", aspectRatio && `aspect-${aspectRatio}`)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "transition-opacity duration-300",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        {...props}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-sand/20 animate-pulse" />
      )}
    </div>
  );
};
