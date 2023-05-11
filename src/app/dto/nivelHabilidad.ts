export class NivelHabilidad {

    id? : number;
    nombreNivel : string; 
    style : string

    constructor(nombreNivel: string, style: string) {
        this.nombreNivel = nombreNivel;
        this.style = style;
    }

}