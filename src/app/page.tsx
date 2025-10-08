import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          ¡Bienvenido a la App de Usuarios!
        </h1>
        <p className="text-gray-700 mb-6">
          Aquí podrás gestionar tus usuarios: crear, editar, listar y eliminar de manera sencilla.
        </p>
        <Link
          href="/usuarios"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Ir a Usuarios
        </Link>
      </div>
    </main>
  );
}

