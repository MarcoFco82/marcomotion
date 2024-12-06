// components/Layout.js
import Link from 'next/link';

export default function Layout({ children, title }) {
  return (
    <div className="container">
    {/* Banner Superior */}
    <header className="banner-superior">
      <h1>{title}</h1>
    </header>

    {/* Menú Horizontal en Banner Inferior */}
    <nav className="banner-menu">
      <ul className="menu-horizontal">
        <li><Link href="/">Inicio</Link></li>
        <li><Link href="/experiencia">Experiencia Profesional</Link></li>
        <li><Link href="/demos">Proyectos</Link></li>
        <li><Link href="/contacto">Contacto</Link></li>
      </ul>
    </nav>

      {/* Contenido Principal */}
      <main className="contenido-principal">
        {children}
      </main>

      {/* Banner Inferior */}
      <footer className="banner-inferior">
        <a href="/privacy">Política de Privacidad</a>
      </footer>
    </div>
  );
}
