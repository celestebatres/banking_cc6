export class Multa{
    descripcion: string
    monto:  number
    multa: number
    pagado: number
    persona: number
    tipo_multa: string

    constructor(  descripcion: string, monto:  number, multa: number,  pagado: number, persona: number, tipo_multa: string, ){
        this.descripcion = descripcion
        this.monto = monto
        this.multa = multa
        this.pagado = pagado
        this.persona = persona
        this.tipo_multa = tipo_multa
    }
}