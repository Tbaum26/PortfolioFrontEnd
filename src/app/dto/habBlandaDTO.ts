export class HabBlandaDTO {

    id? : number;
    personaId : number;
    nombreHabilidad : string;
    urlIcono : string;

    constructor(personaId : number, nombreHabilidad: string, urlIcono: string) {
        this.personaId = personaId;
        this.nombreHabilidad = nombreHabilidad;
        this.urlIcono = urlIcono;
    }
}