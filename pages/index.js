import Layout from '../components/Layout';

export default function Home() {
  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <Layout title="Marco Francisco - Sr. Motion Graphics Designer">
      <div style={{ position: 'relative', overflow: 'hidden', margin: '0 auto', maxWidth: '1200px' }}>
        
        {/* Contenedor del video de Vimeo */}
        <div style={{ position: 'relative', paddingTop: '56.25%', marginBottom: '20px' }}>
          <iframe 
            src="https://player.vimeo.com/video/1027785578?h=b7472bc37d"
            width="640"
            height="564"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
            style={iframeStyle}
          />
        </div>

        {/* Contenedor del Texto de Bienvenida */}
        <div style={{ position: 'relative', padding: '20px', zIndex: 1 }}>
          <p>
            Sitio Desarrollado con Next.JS
          </p>
        </div>
        
      </div>
    </Layout>
  );
}
