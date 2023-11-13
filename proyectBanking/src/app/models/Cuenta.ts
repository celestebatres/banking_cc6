export class Cuenta{
    cuenta_bancaria: number
    id_usuario: number
    tipo: number
    balance : number

    constructor( cuenta_bancaria: number, id_usuario: number, tipo: number, balance : number){
        this.cuenta_bancaria = cuenta_bancaria
        this.id_usuario = id_usuario
        this.tipo = tipo
        this.balance  = balance 
    }
}
