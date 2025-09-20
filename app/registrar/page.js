// app/register/page.js
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, role }),
    });
    if (res.ok) {
      router.push('/login');
    } else {
      // Manejar error
      console.error('Error en el registro');
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <h1 className='text-black text-lg text-center'>Registrarse</h1>
        <form className="mb-0 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="text-black">Email:</label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm
              focus:outline-none focus:border-indigo-500 focus:ring
              focus:ring-indigo-500 text-black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='text-black'>Contraseña:</label>
            <input
              className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm
              focus:outline-none focus:border-indigo-500 focus:ring
              focus:ring-indigo-500 text-black"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mt-1">
            <label className='text-black block font-medium'>Rol:</label>
            <select className="w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm
              focus:outline-none focus:border-indigo-500 focus:ring
              focus:ring-indigo-500 text-black" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">Usuario</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button className='text-white w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm
              focus:outline-none focus:border-indigo-500 focus:ring
              focus:ring-indigo-500 bg-indigo-500' type="submit">Registrarse</button>
        </form>
        <div className="text-center">
          <Link
            className="text-indigo-800" href="/"
          />Volver a inicio
        </div>
      </div>
    </div>
  );
}