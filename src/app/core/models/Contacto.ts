// Modelo contacto
export class Contacto {
  id: number = 0;
  alias: string | null = null;
  apellidos: string | null = null;
  bloqueado: boolean = false;
  bloqueadomotivo: string | null = null;
  codigo: string | null = null;
  codpais: string | null = null;
  codpostal: string | null = null;
  codprovi: string | null = null;
  direccion: string | null = null;
  email: string | null = null;
  nif: string | null = null;
  nombre: string = '';
}