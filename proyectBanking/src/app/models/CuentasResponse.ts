import { Cuenta } from "./Cuenta";

export class CuentasResponse {
    error: boolean
    status : number
    body : Cuenta []

    constructor( error: boolean, status : number, body : Cuenta [] ){
        this.error = error
        this.status = status
        this.body = body
    }
}