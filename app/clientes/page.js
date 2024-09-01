"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import ClientForm from '../../components/ClientForm';
import ClientList from '../../components/ClientList';

export default function ClientesPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const token = localStorage.getItem('jwt');
    try {
      const response = await axios.get('https://bildy-rpmaya.koyeb.app/api/client', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      setClients(response.data);
      setLoading(false);
    } catch (error) {
      setError('Error al cargar los clientes.');
      setLoading(false);
    }
  };

  const handleClientCreated = () => {
    setShowForm(false);
    fetchClients(); // Refresca la lista después de crear un cliente
  };

  if (loading) return <p>Cargando clientes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {!showForm ? (
        <ClientList clients={clients} setShowForm={setShowForm} />
      ) : (
        <ClientForm onClientCreated={handleClientCreated} />
      )}
    </div>
  );
}