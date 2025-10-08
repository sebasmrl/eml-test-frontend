export interface User {
  id: number;
  nombre: string;
  telefono: string;
  email: string;
  password?: string;
  email_verified_at?: string;
  fecha_registro: string;
  fecha_modificacion: string;
  estado: boolean;
}
