import Layout from '../components/Layout';

export default function Experiencia() {
  const iframeStyle = {
    width: '100%',
    height: '315px',
    marginBottom: '20px',
  };

  return (
    <Layout title="Experiencia Profesional">
      {/* ENVATO México */}
      <div>
        <h2 className="company-name">ENVATO México</h2>
        <p className="company-period">Feb 2018 - Jun 2024</p>
        <p>Guadalajara, Col. Americana</p>
        <p>Motion Graphics Designer</p>
        <p>Desarrollo de animaciones comerciales para mercado global.</p>
        <p>Postproducción de VideoMockups.</p>
      </div>

      <hr />

      {/* ZU Media */}
      <div>
        <h2 className="company-name">ZU Media</h2>
        <p className="company-period">Feb 2015 - Ene 2018</p>
        <p>CDMX, Col. San Angel Inn</p>
        <p>Coordinador de Animación y Postproducción</p>
        <p>Principales cuentas: HBO, Jim Beam Suntory, Natura México, Tequila Hornitos, entre otros.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/5veKZq1OXsk?si=BscwTYdbGg35VwC0"
          title="ZU Media YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <hr />

      {/* Escuela Digital */}
      <div>
        <h2 className="company-name">Escuela Digital</h2>
        <p className="company-period">Oct 2012 - Ago 2014</p>
        <p>CDMX, Paseo de la Reforma</p>
        <p>Instructor de Cursos: “Postproducción de Video” y “Animación Digital”</p>
      </div>

      <hr />

      {/* Donceles 66 */}
      <div>
        <h2 className="company-name">Donceles 66, Foro Cultural</h2>
        <p className="company-period">Jul 2012 - Ene 2013</p>
        <p>CDMX, Centro</p>
        <p>Webmaster - Realizador Audiovisual</p>
        <iframe
          src="https://player.vimeo.com/video/57662024"
          style={iframeStyle}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Donceles 66 Vimeo Video"
        ></iframe>
      </div>

      <hr />

      {/* ClickOnero México */}
      <div>
        <h2 className="company-name">ClickOnero México</h2>
        <p className="company-period">Feb - Nov 2011</p>
        <p>CDMX, Polanco</p>
        <p>Diseñador Gráfico, Motion Graphics</p>
        <iframe
          src="https://player.vimeo.com/video/29595327"
          style={iframeStyle}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="ClickOnero Vimeo Video"
        ></iframe>
      </div>

      <hr />

      {/* El Salón de la Franquicia */}
      <div>
        <h2 className="company-name">El Salón de la Franquicia</h2>
        <p className="company-period">Jun 2008 - Ene 2011</p>
        <p>CDMX, Col. Del Valle</p>
        <p>Webmaster, Diseñador Gráfico, Producción de cápsulas.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/N4PNVg96VxE?si=d7bftOpXiIw4HMcC"
          title="El Salón de la Franquicia YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <hr />

      {/* Secretaría de Seguridad Pública y Tránsito Municipal */}
      <div>
        <h2 className="company-name">Secretaría de Seguridad Pública y Tránsito Municipal</h2>
        <p className="company-period">Jun 2006 - Feb 2008</p>
        <p>Puebla, Rancho Colorado</p>
        <p>Reportero Gráfico en el Departamento de Comunicación Social</p>
      </div>

      <hr />

      {/* Sicom TV */}
      <div>
        <h2 className="company-name">Sicom TV, Televisión del Estado de Puebla</h2>
        <p className="company-period">Oct 2003 - Feb 2005</p>
        <p>Puebla, Angelópolis</p>
        <p>Editor de video y Post-productor</p>
      </div>
    </Layout>
  );
}
