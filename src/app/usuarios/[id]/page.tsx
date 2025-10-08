import { User } from "@/app/interfaces/user.interface";
import UserForm from "@/app/components/user-form/UserForm";
import { BACKEND_URL } from "@/app/constants/constants";
import Link from "next/link";


interface Props {
    params: Promise<{ id: string }>
}

async function fetchUser(id: string): Promise<User> {
    const res = await fetch(`${BACKEND_URL}/users/${id}`);
    if (!res.ok) throw new Error("Usuario no encontrado");
    return res.json();
}

export default async function ActualizarUsuarioPage({ params }: Props) {
    
    const { id } = await params;
    const user = await fetchUser(id);

    return (
        <div className="p-4">
            <Link href={`/usuarios`} className="bg-yellow-400 text-white p-2 rounded hover:bg-yellow-500">
                Volver
            </Link>
            <UserForm user={user} />
        </div>
    );
}
