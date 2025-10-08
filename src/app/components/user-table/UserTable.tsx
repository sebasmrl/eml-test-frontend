"use client";

import { User } from "@/app/interfaces/user.interface";
import Link from "next/link";


interface UserTableProps {
  users: User[];
  onDelete: (id: number) => void;
}

export default function UserTable({ users, onDelete }: UserTableProps) {
  return (
    <table className="min-w-full bg-white border rounded shadow overflow-x-scroll ">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 border">ID</th>
          <th className="p-2 border">Nombre</th>
          <th className="p-2 border">Teléfono</th>
          <th className="p-2 border">Email</th>
          <th className="p-2 border">Registro</th>
          <th className="p-2 border">Última modificación</th>
          <th className="p-2 border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u) => (
          <tr key={u.id} className={`${!u.estado ? "bg-gray-200" : ""}`}>
            <td className="p-2 border">{u.id}</td>
            <td className="p-2 border">{u.nombre}</td>
            <td className="p-2 border">{u.telefono}</td>
            <td className="p-2 border">{u.email}</td>
            <td className="p-2 border">{u.fecha_registro}</td>
            <td className="p-2 border">{u.fecha_modificacion}</td>
            <td className="p-2 border flex gap-2">
              <Link href={`/usuarios/${u.id}`}>
                <button className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500">
                  Editar
                </button>
              </Link>
              {u.estado && (
                <button
                  onClick={() => onDelete(u.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
