// /app/layout.js
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/globals.css';  // Importar los estilos globales

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="flex">
          {/* Barra lateral */}
          <Sidebar />
          <div className="flex-1">
            {/* Barra de navegación superior */}
            <Navbar />
            {/* Contenido principal */}
            <main className="p-4">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}