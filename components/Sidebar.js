// /components/Sidebar.js
import Link from 'next/link';
import { FaHome, FaUsers, FaProjectDiagram, FaFileInvoice, FaTruck, FaCog } from 'react-icons/fa'; // Importa los iconos

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white h-screen shadow-md p-4">
      <div className="text-2xl font-bold mb-8">Master-IMMUNE / Gestion-Albaranes</div>           
      <nav className="flex flex-col space-y-2">
        <Link href="/" legacyBehavior>
          <a className="flex items-center py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
            <FaHome className="mr-2" /> Inicio
          </a>
        </Link>
        <Link href="/clientes" legacyBehavior>
          <a className="flex items-center py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
            <FaUsers className="mr-2" /> Clientes
          </a>
        </Link>
        <Link href="/proyectos" legacyBehavior>
          <a className="flex items-center py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
            <FaProjectDiagram className="mr-2" /> Proyectos
          </a>
        </Link>
        <Link href="/albaranes" legacyBehavior>
          <a className="flex items-center py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
            <FaFileInvoice className="mr-2" /> Albaranes
          </a>
        </Link>
        <Link href="/proveedores" legacyBehavior>
          <a className="flex items-center py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
            <FaTruck className="mr-2" /> Proveedores
          </a>
        </Link>
        <Link href="/ajustes" legacyBehavior>
          <a className="flex items-center py-2 px-4 text-gray-700 hover:bg-blue-500 hover:text-white rounded">
            <FaCog className="mr-2" /> Configuración
          </a>
        </Link>
      </nav>
      
    </aside>
  );
}