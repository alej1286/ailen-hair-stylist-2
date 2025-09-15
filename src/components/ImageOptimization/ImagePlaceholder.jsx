import React from 'react';

const ImagePlaceholder = ({ 
  width = '100%', 
  height = '200px', 
  className = '',
  showSpinner = true 
}) => {
  return (
    <div 
      className={`bg-gray-200 animate-pulse flex items-center justify-center ${className}`}
      style={{ width, height }}
    >
      {showSpinner && (
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
          <span className="text-gray-500 text-sm mt-2">Cargando...</span>
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;