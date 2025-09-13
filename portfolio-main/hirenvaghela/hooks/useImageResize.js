import { useState, useEffect, useCallback } from 'react';
import { createResizedImage, createPlaceholderImage } from '../utils/imageUtils';

/**
 * Custom hook for handling image resizing
 * @param {string} src - Original image source
 * @param {Object} options - Resizing options
 * @returns {Object} - Image state and handlers
 */
export const useImageResize = (src, options = {}) => {
  const {
    maxWidth = 300,
    maxHeight = 400,
    quality = 0.8,
    fallbackSrc = null,
    enableResize = true
  } = options;

  const [imageState, setImageState] = useState({
    src: src,
    alt: '',
    isResized: false,
    isLoading: true,
    error: null,
    originalSrc: src
  });

  const [isClient, setIsClient] = useState(false);

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  const resizeImage = useCallback(async () => {
    if (!isClient || !src || !enableResize) {
      setImageState(prev => ({
        ...prev,
        src: src,
        isLoading: false,
        isResized: false
      }));
      return;
    }

    setImageState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const resizedImage = await createResizedImage(src, '', {
        maxWidth,
        maxHeight,
        quality,
        fallbackSrc
      });

      setImageState(prev => ({
        ...prev,
        ...resizedImage,
        isLoading: false
      }));
    } catch (error) {
      console.warn('Image resize failed:', error);
      setImageState(prev => ({
        ...prev,
        src: fallbackSrc || src,
        isLoading: false,
        error: error.message,
        isResized: false
      }));
    }
  }, [src, maxWidth, maxHeight, quality, fallbackSrc, enableResize, isClient]);

  useEffect(() => {
    resizeImage();
  }, [resizeImage]);

  const resetImage = useCallback(() => {
    setImageState({
      src: src,
      alt: '',
      isResized: false,
      isLoading: true,
      error: null,
      originalSrc: src
    });
    resizeImage();
  }, [src, resizeImage]);

  return {
    ...imageState,
    resetImage,
    resizeImage
  };
};

/**
 * Hook for handling multiple image resizing
 * @param {Array} imageSources - Array of image sources
 * @param {Object} options - Resizing options
 * @returns {Object} - Images state and handlers
 */
export const useMultipleImageResize = (imageSources, options = {}) => {
  const [imagesState, setImagesState] = useState({
    images: [],
    isLoading: true,
    error: null
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const resizeImages = useCallback(async () => {
    if (!isClient || !imageSources || imageSources.length === 0) {
      setImagesState({
        images: imageSources || [],
        isLoading: false,
        error: null
      });
      return;
    }

    setImagesState(prev => ({ ...prev, isLoading: true, error: null }));

    try {
      const resizePromises = imageSources.map(async (imageData) => {
        const src = typeof imageData === 'string' ? imageData : (imageData.src || imageData.cover);
        const alt = typeof imageData === 'string' ? '' : (imageData.alt || imageData.title || '');
        
        if (!src) return imageData;

        const resizedImage = await createResizedImage(src, alt, options);
        return {
          ...imageData,
          ...resizedImage
        };
      });

      const resizedImages = await Promise.all(resizePromises);
      
      setImagesState({
        images: resizedImages,
        isLoading: false,
        error: null
      });
    } catch (error) {
      console.warn('Multiple image resize failed:', error);
      setImagesState({
        images: imageSources,
        isLoading: false,
        error: error.message
      });
    }
  }, [imageSources, options, isClient]);

  useEffect(() => {
    resizeImages();
  }, [resizeImages]);

  return {
    ...imagesState,
    resizeImages
  };
};

export default useImageResize;
