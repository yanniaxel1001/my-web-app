"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface LoginForm {
  username: string;
  password: string;
}

export default function Login() {
    const [form, setForm] = useState<LoginForm>({
    username: "",
    password: "",
  });
  const [msg, setMsg] = useState<string>("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
    const data = await res.json();
    setMsg(data.message || data.error);
    if (data.message) {
    router.push("/"); // Redirige a la página principal
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Iniciar sesión
        </h1>
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
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition"
          >
            Ingresar
          </button>
        </form>
        {msg && (
          <p className="mt-4 text-center text-sm text-red-500 font-medium">
            {msg}
          </p>
        )}
      </div>
    </main>
  );
}
