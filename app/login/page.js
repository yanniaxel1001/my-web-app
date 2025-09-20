// app/login/page.js
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      router.push('/dashboard');
    } else {
      // Manejar error
      console.error('Error en el inicio de sesión');
    }
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-6 shadow rounded-lg sm:px-10">
        <h1 className='text-black text-lg text-center'>Iniciar Sesión</h1>
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
          <button className='text-white w-full border border-gray-300 px-3 py-2 rounded-lg shadow-sm
              focus:outline-none focus:border-indigo-500 focus:ring
              focus:ring-indigo-500 bg-indigo-500' type="submit">Iniciar Sesión</button>
        </form>
        <div className="text-center">
          <a className="text-indigo-800" href="/">Volver al inicio</a>
        </div>
      </div>
    </div>
  );
}