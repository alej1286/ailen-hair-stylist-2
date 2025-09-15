import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = '',
  effect = 'blur',
  placeholder,
  sizes,
  loading = 'lazy',
  ...props
}) => {
  // Generar srcSet para diferentes tamaños
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    const extension = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${extension}`, '');
    
    return [
      `${baseName}_400w.${extension} 400w`,
      `${baseName}_800w.${extension} 800w`,
      `${baseName}_1200w.${extension} 1200w`,
      `${baseName}.${extension} 1600w`
    ].join(', ');
  };

  // Generar WebP srcSet
  const generateWebPSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    const extension = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${extension}`, '');
    
    return [
      `${baseName}_400w.webp 400w`,
      `${baseName}_800w.webp 800w`,
      `${baseName}_1200w.webp 1200w`,
      `${baseName}.webp 1600w`
    ].join(', ');
  };

  const defaultSizes = sizes || '(max-width: 400px) 400px, (max-width: 800px) 800px, (max-width: 1200px) 1200px, 1600px';

  return (
    <picture>
      {/* WebP sources */}
      <source
        srcSet={generateWebPSrcSet(src)}
        sizes={defaultSizes}
        type="image/webp"
      />
      
      {/* Fallback sources */}
      <source
        srcSet={generateSrcSet(src)}
        sizes={defaultSizes}
      />
      
      {/* LazyLoadImage como fallback */}
      <LazyLoadImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        effect={effect}
        placeholder={placeholder}
        loading={loading}
        {...props}
      />
    </picture>
  );
};

export default OptimizedImage;