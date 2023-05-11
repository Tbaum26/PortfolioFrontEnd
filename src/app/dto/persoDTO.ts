import { ThisReceiver } from "@angular/compiler";

export class PersoDTO {
   
    id : number;
    nombre : string;
    ocupacion : string;
    bannerUrl : string;
    email : string;
    linkedinUrl : string;
    githubUrl : string;
    descripcion : string;
    imgUrl : string;

    constructor (
                id : number,
                nombre : string,
                ocupacion : string,
                bannerUrl : string,
                email : string,
                linkedinUrl : string,
                githubUrl : string,
                descripcion : string,
                imgUrl : string,) {
        
        this.id = id;
        this.nombre = nombre;
        this.ocupacion = ocupacion;
        this.bannerUrl = bannerUrl;
        this.email = email;
        this.linkedinUrl = linkedinUrl;
        this.githubUrl = githubUrl;
        this.descripcion = descripcion;
        this.imgUrl = imgUrl;
    }

}