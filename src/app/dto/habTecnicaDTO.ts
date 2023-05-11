export class HabTecnicaDTO {

    id? : number;
    personaId: number;
    nivelId : number;
    nombreHabilidad : string;
    urlIcono : string;

    constructor(personaId: number, nivelId: number, nombreHabilidad: string, urlIcono: string) {
        this.personaId = personaId;
        this.nivelId = nivelId;
        this.nombreHabilidad = nombreHabilidad;
        this.urlIcono = urlIcono;
    }

}