import { Multa } from "./Multa";

export class MultasResponse {
    mensaje : string
    multas : Multa []
    status : number
    tiene_multas : number

    constructor( mensaje : string, multas: Multa [], status : number, tiene_multas : number ){
        this.mensaje = mensaje
        this.multas = multas
        this.status = status
        this.tiene_multas = tiene_multas
    }
}