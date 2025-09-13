"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
type Role = "usuario" | "admin";

interface RegisterForm {
  username: string;
  password: string;
  role: Role;
}

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({
    username: "",
    password: "",
    role: "usuario",
  });
  const [msg, setMsg] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
  },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg(data.message || data.error);
    if (data.message) {
    router.push("/login"); // Redirige al login después de registrarse
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Registro</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
            placeholder="Usuario"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
            placeholder="Contraseña"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <select
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
            onChange={(e) =>
              setForm({ ...form, role: e.target.value as Role })
            }
          >
            <option value="usuario">Usuario</option>
            <option value="admin">Admin</option>
          </select>
          <button
          className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
           type="submit">Registrar</button>
        </form>
      <p>{msg}</p>
      </div>
    </main>
  );
}
