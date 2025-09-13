/**
 * Utility functions for image handling and resizing
 */

/**
 * Resizes an image to fit within specified dimensions while maintaining aspect ratio
 * @param {string} src - Image source URL
 * @param {number} maxWidth - Maximum width
 * @param {number} maxHeight - Maximum height
 * @param {number} quality - Image quality (0-1)
 * @returns {Promise<string>} - Resized image as data URL
 */
export const resizeImage = (src, maxWidth = 300, maxHeight = 400, quality = 0.8) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        // Calculate new dimensions while maintaining aspect ratio
        let { width, height } = calculateAspectRatio(
          img.naturalWidth,
          img.naturalHeight,
          maxWidth,
          maxHeight
        );
        
        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;
        
        // Draw and resize the image
        ctx.drawImage(img, 0, 0, width, height);
        
        // Convert to data URL
        const dataURL = canvas.toDataURL('image/jpeg', quality);
        resolve(dataURL);
      } catch (error) {
        reject(error);
      }
    };
    
    img.onerror = () => {
      reject(new Error('Failed to load image'));
    };
    
    img.src = src;
  });
};

/**
 * Calculates aspect ratio preserving dimensions
 * @param {number} originalWidth - Original image width
 * @param {number} originalHeight - Original image height
 * @param {number} maxWidth - Maximum allowed width
 * @param {number} maxHeight - Maximum allowed height
 * @returns {Object} - New width and height
 */
const calculateAspectRatio = (originalWidth, originalHeight, maxWidth, maxHeight) => {
  const aspectRatio = originalWidth / originalHeight;
  
  let width = maxWidth;
  let height = maxWidth / aspectRatio;
  
  // If height exceeds maxHeight, scale down based on height
  if (height > maxHeight) {
    height = maxHeight;
    width = maxHeight * aspectRatio;
  }
  
  return {
    width: Math.round(width),
    height: Math.round(height)
  };
};

/**
 * Creates a resized image component with proper dimensions
 * @param {string} src - Image source
 * @param {string} alt - Alt text
 * @param {Object} options - Resizing options
 * @returns {Promise<Object>} - Image data with resized source
 */
export const createResizedImage = async (src, alt, options = {}) => {
  const {
    maxWidth = 300,
    maxHeight = 400,
    quality = 0.8,
    fallbackSrc = null
  } = options;
  
  try {
    const resizedSrc = await resizeImage(src, maxWidth, maxHeight, quality);
    return {
      src: resizedSrc,
      alt,
      originalSrc: src,
      isResized: true
    };
  } catch (error) {
    console.warn('Failed to resize image:', error);
    return {
      src: fallbackSrc || src,
      alt,
      originalSrc: src,
      isResized: false,
      error: error.message
    };
  }
};

/**
 * Preloads and resizes multiple images
 * @param {Array} imageSources - Array of image source objects
 * @param {Object} options - Resizing options
 * @returns {Promise<Array>} - Array of resized image data
 */
export const preloadAndResizeImages = async (imageSources, options = {}) => {
  const resizePromises = imageSources.map(async (imageData) => {
    if (typeof imageData === 'string') {
      return await createResizedImage(imageData, '', options);
    }
    
    return await createResizedImage(
      imageData.src || imageData.cover,
      imageData.alt || imageData.title || '',
      options
    );
  });
  
  return Promise.all(resizePromises);
};

/**
 * Creates a placeholder image with specified dimensions
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} text - Placeholder text
 * @param {string} backgroundColor - Background color
 * @param {string} textColor - Text color
 * @returns {string} - Data URL of placeholder image
 */
export const createPlaceholderImage = (
  width = 300,
  height = 400,
  text = 'No Image',
  backgroundColor = '#f3f4f6',
  textColor = '#6b7280'
) => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = width;
  canvas.height = height;
  
  // Fill background
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, width, height);
  
  // Add text
  ctx.fillStyle = textColor;
  ctx.font = '16px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);
  
  return canvas.toDataURL();
};

export default {
  resizeImage,
  createResizedImage,
  preloadAndResizeImages,
  createPlaceholderImage,
  calculateAspectRatio
};
