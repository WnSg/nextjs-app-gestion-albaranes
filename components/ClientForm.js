"use client";

import { useState } from 'react';
import axios from 'axios';

export default function ClientForm({ onClientCreated }) {
  const [name, setName] = useState('');
  const [cif, setCif] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [postal, setPostal] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState('');

  const handleCreateClient = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwt');

    try {
      const response = await axios.post(
        'https://bildy-rpmaya.koyeb.app/api/client',
        {
          name,
          cif,
          address: {
            street,
            number: parseInt(number),
            postal: parseInt(postal),
            city,
            province,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.status === 201 || response.status === 200) {
        setMessage('Cliente creado y guardado con éxito!');
        setShowModal(true); // Asegúrate de que esto se ejecute
      }
    } catch (error) {
      if (error.response) {
        setMessage(
          `Error: ${
            error.response.data.errors
              ? error.response.data.errors[0].msg
              : 'Inténtalo de nuevo.'
          }`
        );
      } else {
        setMessage('Error al conectar con el servidor. Inténtalo de nuevo.');
      }
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Crear Cliente</h2>
      <form onSubmit={handleCreateClient} className="space-y-4">
        <input
          type="text"
          placeholder="Nombre del Cliente o Empresa"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="CIF"
          value={cif}
          onChange={(e) => setCif(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Calle"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Número"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Código Postal"
          value={postal}
          onChange={(e) => setPostal(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Ciudad"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Provincia"
          value={province}
          onChange={(e) => setProvince(e.target.value)}
          className="w-full border border-gray-300 p-2 rounded"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Guardar</button>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <p className="text-lg font-bold">{message}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => {
                setShowModal(false);
                onClientCreated(); // Llama a actualizar solo después de cerrar el modal
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      {message && !showModal && (
        <p className="mt-4 text-center text-red-500">{message}</p>
      )}
    </div>
  );
}