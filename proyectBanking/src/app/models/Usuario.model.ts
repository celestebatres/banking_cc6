export interface Usuario {
    id_usuario: string,
    rol: number,
    nombre: string;
    identificador: string,
    fecha_nacimiento: Date;    
    sexo: string,
    direccion: string,
    telefono: string,
    estado_civil: number,
    correo: string,
    activo: number
}
