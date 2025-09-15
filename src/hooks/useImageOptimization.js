import { useState, useEffect, useCallback } from 'react';

export const useImageOptimization = () => {
  const [webpSupported, setWebpSupported] = useState(false);
  const [loading, setLoading] = useState(true);

  // Detectar soporte para WebP
  useEffect(() => {
    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      
      const dataURL = canvas.toDataURL('image/webp');
      setWebpSupported(dataURL.indexOf('data:image/webp') === 0);
      setLoading(false);
    };

    checkWebPSupport();
  }, []);

  // Generar URL optimizada basada en el dispositivo
  const getOptimizedImageUrl = useCallback((src, width = 800) => {
    if (!src) return '';

    const extension = src.split('.').pop();
    const baseName = src.replace(`.${extension}`, '');
    
    // Determinar el ancho apropiado basado en el viewport
    const devicePixelRatio = window.devicePixelRatio || 1;
    const targetWidth = Math.ceil(width * devicePixelRatio);
    
    let optimalWidth;
    if (targetWidth <= 400) optimalWidth = 400;
    else if (targetWidth <= 800) optimalWidth = 800;
    else if (targetWidth <= 1200) optimalWidth = 1200;
    else optimalWidth = 1600;

    // Usar WebP si está soportado
    const format = webpSupported ? 'webp' : extension;
    
    return `${baseName}_${optimalWidth}w.${format}`;
  }, [webpSupported]);

  // Precargar imagen crítica
  const preloadImage = useCallback((src, sizes = [400, 800]) => {
    if (!src) return;

    sizes.forEach(size => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = getOptimizedImageUrl(src, size);
      document.head.appendChild(link);
    });
  }, [getOptimizedImageUrl]);

  return {
    webpSupported,
    loading,
    getOptimizedImageUrl,
    preloadImage
  };
};