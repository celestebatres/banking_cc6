import { Usuario } from './Usuario.model';

export interface UsuarioResponse {
    response_status: boolean;
    response_code: number;
    response_message: string;
    usuarios?: Usuario [];
}
