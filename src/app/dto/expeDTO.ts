export class ExpeDTO {

    id? : number;
    personaId : number;
    puestoExpe : string;
    periodoExpe : string;
    organismoExpe : string;
    descripcionExpe : string;
    urlLogoExpe : string;  
    

    constructor(personaId : number, puestoExpe : string, periodoExpe : string, organismoExpe : string, descripcionExpe : string, urlLogoExpe : string){
        this.personaId = personaId;
        this.puestoExpe = puestoExpe;
        this.periodoExpe = periodoExpe;
        this.organismoExpe = organismoExpe;
        this.descripcionExpe = descripcionExpe;
        this.urlLogoExpe = urlLogoExpe;
    }

}