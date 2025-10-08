"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { User } from "@/app/interfaces/user.interface";
import { BACKEND_URL } from "@/app/constants/constants";


interface UserFormProps {
  user?: User;
}

export default function UserForm({ user }: UserFormProps) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        nombre: user.nombre,
        telefono: user.telefono,
        email: user.email,
        password: ""
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const method = user ? "PUT" : "POST";
      const url = user ? `${BACKEND_URL}/users/${user.id}` : `https://eml-test-php-production.up.railway.app/users`;

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Error al guardar usuario");

      router.push("/usuarios");
    } catch (err) {
      console.error(err);
      alert("Error al guardar usuario");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 bg-white rounded shadow"
    >
      <h2 className="text-xl font-bold mb-4">
        {user ? "Editar Usuario" : "Crear Usuario"}
      </h2>

      <label className="block mb-2">Nombre:</label>
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <label className="block mb-2">Teléfono:</label>
      <input
        type="text"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <label className="block mb-2">Email:</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-4 p-2 border rounded"
        required
      />

      {!user && (
        <>
          <label className="block mb-2">Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
        </>
      )}

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {user ? "Actualizar" : "Crear"}
      </button>
    </form>
  );
}
