import { useState } from 'react';
import { generateSitemap } from '../utils/sitemapGenerator';

const SitemapGenerator = () => {
  const [status, setStatus] = useState('');

  const handleGenerate = async () => {
    setStatus('Generando...');
    
    try {
      const xmlContent = generateSitemap();
      
      // Crear blob para descarga
      const blob = new Blob([xmlContent], { type: 'application/xml' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'sitemap.xml';
      link.click();
      URL.revokeObjectURL(url);
      
      setStatus('✅ Sitemap generado y descargado');
    } catch (error) {
      setStatus('❌ Error al generar sitemap');
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Generador de Sitemap</h2>
      <button 
        onClick={handleGenerate}
        style={{
          padding: '10px 20px',
          backgroundColor: '#4F46E5',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Generar y Descargar Sitemap
      </button>
      {status && <p style={{ marginTop: '10px' }}>{status}</p>}
      
      <div style={{ marginTop: '20px', textAlign: 'left' }}>
        <h3>Instrucciones:</h3>
        <ol>
          <li>Haz clic en "Generar y Descargar Sitemap"</li>
          <li>Se descargará el archivo sitemap.xml</li>
          <li>Sube este archivo a la raíz de tu hosting</li>
          <li>Reemplaza el sitemap.xml existente</li>
        </ol>
      </div>
    </div>
  );
};

export default SitemapGenerator;