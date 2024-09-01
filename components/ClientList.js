"use client";

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Importa un icono de búsqueda

export default function ClientList({ clients, setShowForm }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Lista de Clientes</h2>
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Buscar cliente..."
          className="border border-gray-300 p-2 rounded w-full pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
      </div>
      <button
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        onClick={() => setShowForm(true)}
      >
        Crear Nuevo Cliente
      </button>
      {filteredClients.length === 0 ? (
        <p>No hay clientes creados aún.</p>
      ) : (
        <ul className="space-y-2">
          {filteredClients.map((client) => (
            <li key={client._id} className="p-4 bg-white shadow rounded">
              <div className="flex items-center">
                {client.logo && (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-12 h-12 mr-4 rounded"
                  />
                )}
                <div>
                  <h3 className="font-bold">{client.name}</h3>
                  <p>CIF: {client.cif}</p>
                  <p>Proyectos Activos: {client.activeProjects}</p>
                  <p>Albaranes Pendientes: {client.pendingDeliveryNotes}</p>
                  <p>Dirección:</p>
                  <ul className="ml-4">
                    <li>Calle: {client.address.street}</li>
                    <li>Número: {client.address.number}</li>
                    <li>Código Postal: {client.address.postal}</li>
                    <li>Ciudad: {client.address.city}</li>
                    <li>Provincia: {client.address.province}</li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}