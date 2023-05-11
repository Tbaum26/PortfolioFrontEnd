export class RespuestaDTO {

    salioBien: boolean;
    msj : string;

    constructor(salioBien: boolean, msj : string){
        this.salioBien = salioBien;
        this.msj = msj;
    }
}