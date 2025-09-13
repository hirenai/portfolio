import React from 'react';
import { useImageResize } from '../hooks/useImageResize';
import { FaBookOpen, FaImage } from 'react-icons/fa';

/**
 * ResizedImage component that automatically resizes images to fit containers
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Resized image component
 */
const ResizedImage = ({
  src,
  alt = '',
  className = '',
  style = {},
  maxWidth = 300,
  maxHeight = 400,
  quality = 0.8,
  fallbackIcon = FaBookOpen,
  showLoadingState = true,
  enableResize = true,
  onError = null,
  onLoad = null,
  ...props
}) => {
  const {
    src: resizedSrc,
    isLoading,
    error,
    isResized,
    originalSrc
  } = useImageResize(src, {
    maxWidth,
    maxHeight,
    quality,
    enableResize
  });

  const FallbackIcon = fallbackIcon;

  const handleError = (e) => {
    if (onError) {
      onError(e);
    }
  };

  const handleLoad = (e) => {
    if (onLoad) {
      onLoad(e);
    }
  };

  // Show loading state
  if (isLoading && showLoadingState) {
    return (
      <div 
        className={`${className} bg-gray-100 dark:bg-gray-700 flex items-center justify-center`}
        style={style}
        {...props}
      >
        <div className="animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded"></div>
        </div>
      </div>
    );
  }

  // Show error state
  if (error || !resizedSrc) {
    return (
      <div 
        className={`${className} bg-gradient-to-br from-primary-100 to-accent-100 dark:from-primary-900 dark:to-accent-900 flex items-center justify-center`}
        style={style}
        {...props}
      >
        <FallbackIcon className="w-16 h-16 text-primary-500 dark:text-primary-400" />
      </div>
    );
  }

  return (
    <img
      src={resizedSrc}
      alt={alt}
      className={`${className} ${isResized ? 'resized-image' : ''}`}
      style={{
        ...style,
        width: '100%',
        height: '100%',
        objectFit: 'contain', // Changed from 'cover' to 'contain' to prevent cropping
        objectPosition: 'center'
      }}
      onError={handleError}
      onLoad={handleLoad}
      {...props}
    />
  );
};

/**
 * BookCoverImage component specifically for book covers
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Book cover image component
 */
export const BookCoverImage = ({
  src,
  alt = '',
  className = '',
  style = {},
  ...props
}) => {
  return (
    <ResizedImage
      src={src}
      alt={alt}
      className={className}
      style={style}
      maxWidth={300}
      maxHeight={400}
      quality={0.9}
      fallbackIcon={FaBookOpen}
      {...props}
    />
  );
};

/**
 * ProfileImage component for profile pictures
 * @param {Object} props - Component props
 * @returns {JSX.Element} - Profile image component
 */
export const ProfileImage = ({
  src,
  alt = '',
  className = '',
  style = {},
  ...props
}) => {
  return (
    <ResizedImage
      src={src}
      alt={alt}
      className={className}
      style={style}
      maxWidth={200}
      maxHeight={200}
      quality={0.9}
      fallbackIcon={FaImage}
      {...props}
    />
  );
};

export default ResizedImage;
