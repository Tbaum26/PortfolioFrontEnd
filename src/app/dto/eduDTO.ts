export class EduDTO {

    id? : number;
    personaId : number;
    tituloEdu : string;
    periodoEdu : string;
    institucionEdu : string;
    descripcionEdu : string;
    urlLogoEdu : string;  
    
    constructor(personaId : number, tituloEdu : string, periodoEdu : string, institucionEdu : string, descripcionEdu : string, urlLogoEdu : string) {
        this.personaId = personaId;
        this.tituloEdu = tituloEdu;
        this.periodoEdu = periodoEdu;
        this.institucionEdu = institucionEdu;
        this.descripcionEdu = descripcionEdu;
        this.urlLogoEdu = urlLogoEdu;
    }
}
