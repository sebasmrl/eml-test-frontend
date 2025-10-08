import UserForm from "@/app/components/user-form/UserForm";
import Link from "next/link";

export default function ResgistrarUsuarioPage() {
  return (
    <div className="p-4 py-10">
      <Link href={`/usuarios`} className="bg-yellow-400 text-white p-2 rounded hover:bg-yellow-500">
          Volver
      </Link>
      <UserForm />
    </div>
  );
}
