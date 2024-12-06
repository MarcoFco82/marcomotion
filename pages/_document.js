import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        {/* Meta Tags Generales */}
        <meta charSet="UTF-8" />
        <meta name="description" content="Sitio profesional de Marco Ramos, especializado en Motion Graphics, 3D, e Interactive Design." />
        <meta name="keywords" content="Motion Graphics, 3D, Interactive Design, Motion Graphics Designer, Diseño Gráfico, Web Interactiva, Animación, Portafolio, Animador" />
        <meta name="author" content="Marco Ramos" />
        <meta name="robots" content="index, follow" />

        {/* Favicons */}
        <link rel="icon" href="/path/to/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Carme&family=DIN+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
