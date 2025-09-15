import React from 'react';
import { OptimizedImage, ImagePlaceholder } from './index';
import { useImageOptimization } from '../../hooks/useImageOptimization';

const ImageOptimizationDemo = () => {
  const { webpSupported, loading } = useImageOptimization();

  const demoImages = [
    {
      src: "https://ailenhairstylistweb.s3.amazonaws.com/woman-3288365_1280.jpg",
      alt: "Peinado profesional 1",
      title: "Imagen con lazy loading"
    },
    {
      src: "https://ailenhairstylistweb.s3.amazonaws.com/beauty-2537562_1280.jpg",
      alt: "Peinado profesional 2", 
      title: "Imagen con WebP automático"
    },
    {
      src: "https://ailenhairstylistweb.s3.amazonaws.com/hairdresser-3572052_1280.jpg",
      alt: "Peinado profesional 3",
      title: "Imagen responsive"
    }
  ];

  if (loading) {
    return <div>Detectando capacidades del navegador...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Demo de Optimización de Imágenes</h2>
      
      <div className="mb-4 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm">
          <strong>Estado del navegador:</strong> 
          WebP soportado: {webpSupported ? '✅ Sí' : '❌ No'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoImages.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <OptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                effect="blur"
                placeholder={<ImagePlaceholder height="256px" />}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{image.title}</h3>
              <p className="text-gray-600 text-sm">
                Esta imagen se carga con lazy loading, soporte WebP automático y múltiples tamaños.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Características implementadas:</h3>
        <ul className="list-disc list-inside text-sm space-y-1">
          <li>✅ Lazy loading automático</li>
          <li>✅ Detección y uso de WebP cuando está disponible</li>
          <li>✅ Imágenes responsive con múltiples tamaños</li>
          <li>✅ Placeholders de carga con animación</li>
          <li>✅ Efecto blur durante la carga</li>
          <li>✅ Optimización automática basada en viewport</li>
        </ul>
      </div>
    </div>
  );
};

export default ImageOptimizationDemo;