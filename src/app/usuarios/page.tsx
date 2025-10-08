"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { User } from "../interfaces/user.interface";
import UserTable from "../components/user-table/UserTable";
import { BACKEND_URL } from "../constants/constants";

export default function UsuariosPage() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const res = await fetch(`${BACKEND_URL}/api/users`);
    const data = await res.json();
    setUsers(data);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar usuario?")) return;
    const res = await fetch(`${BACKEND_URL}/users/${id}`, { method: "DELETE" });
    if (res.ok) fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="px-2 md:px-32 py-10">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <Link href="/usuarios/registrar">
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-4 hover:bg-green-600">
          Crear Usuario
        </button>
      </Link>
      <UserTable users={users} onDelete={handleDelete} />
    </div>
  );
}
