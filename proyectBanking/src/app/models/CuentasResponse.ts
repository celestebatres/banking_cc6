import { Cuenta } from "./Cuenta";

export class MultasResponse {
    error: boolean
    status : number
    cuentas : Cuenta []

    constructor( error: boolean, status : number, cuentas : Cuenta [] ){
        this.error = error
        this.status = status
        this.cuentas = cuentas
    }
}