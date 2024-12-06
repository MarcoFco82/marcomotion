import Layout from '../components/Layout';

export default function Privacy() {
  return (
    <Layout title="POLÍTICA DE PRIVACIDAD">
      <div className="container">
        <p>Fecha de vigencia: Noviembre 2024</p>

        <section className="text-container">
          <h2 className="company-name">Información que no recopilamos</h2>
          <p>
            No recopilamos ninguna información personal de identificación, como nombres, direcciones de correo electrónico, números de teléfono o direcciones IP. Tampoco recopilamos información sobre su comportamiento en el sitio web ni utilizamos herramientas de análisis de terceros para realizar un seguimiento de sus interacciones.
          </p>
        </section>

        <section className="text-container">
          <h2 className="company-name">Cookies y tecnologías de seguimiento</h2>
          <p>
            No utilizamos cookies ni ninguna tecnología de seguimiento. Este sitio web no almacena datos en su dispositivo, ni rastrea su actividad dentro o fuera de nuestro sitio.
          </p>
        </section>

        <section className="text-container">
          <h2 className="company-name">Enlaces a sitios externos</h2>
          <p>
            Este sitio web puede contener enlaces a sitios de terceros. No nos responsabilizamos de las prácticas de privacidad ni del contenido de esos sitios. Le recomendamos revisar las políticas de privacidad de los sitios de terceros antes de proporcionarles cualquier información.
          </p>
        </section>

        <section className="text-container">
          <h2 className="company-name">Cambios en nuestra política de privacidad</h2>
          <p>
            Si realizamos cambios en nuestra política de privacidad, los publicaremos en esta página para que siempre esté informado de qué datos no se recopilan y cómo se protege su privacidad. La fecha de la última actualización estará disponible en la parte superior de esta página.
          </p>
        </section>

        <section className="text-container">
          <h2 className="company-name">Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre esta política de privacidad, puede ponerse en contacto con nosotros a través de contacto@marcomotion.com
          </p>
        </section>
      </div>
    </Layout>
  );
}
