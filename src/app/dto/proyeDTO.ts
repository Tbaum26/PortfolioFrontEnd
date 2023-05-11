export class ProyeDTO {

    id? : number;
    personaId : number;
    nombreProye : string;
    descripcionProye : string;
    imgUrl : string;
    repoUrl : string;
    liveUrl : string;
    
    constructor( personaId : number, nombreProye : string, descripcionProye : string, imgUrl : string, repoUrl : string, liveUrl : string) {
        this.personaId = personaId;
        this.nombreProye = nombreProye;
        this.descripcionProye = descripcionProye;
        this.imgUrl = imgUrl;
        this.repoUrl = repoUrl;
        this.liveUrl = liveUrl;
    }

}