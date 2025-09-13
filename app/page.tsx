"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
interface User {
  username: string;
  role: "usuario" | "admin";
}

export default function Home() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    fetch("/api/me")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);

    const handleLogout = async () => {
    await fetch("/api/logout"); // Creamos API para cerrar sesión
    setUser(null);
  };

  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Mi pagina web</h1>
          <nav className="space-x-4">
            {!user ? (
              <>
                <Link href="/login" className="text-blue-500 hover:underline">
                  Login
                </Link>
                <Link href="/registrar" className="text-blue-500 hover:underline">
                  Registro
                </Link>
              </>
            ) : (
              <>
                <span>Hola, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:underline"
                >
                  Cerrar sesión
                </button>
              </>
            )}
          </nav>
        </header>
        <main></main>
      </body>
    </html>
  );
}