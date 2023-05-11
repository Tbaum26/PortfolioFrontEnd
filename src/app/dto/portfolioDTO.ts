import { EduDTO } from "./eduDTO";
import { ExpeDTO } from "./expeDTO";
import { HabBlandaDTO } from "./habBlandaDTO";
import { HabTecnicaDTO } from "./habTecnicaDTO";
import { PersoDTO } from "./persoDTO";
import { ProyeDTO } from "./proyeDTO";

export class PortfolioDTO {

    persona: PersoDTO;
    educaciones: EduDTO[]; 
    experiencias: ExpeDTO[];
    habTecnicas: HabTecnicaDTO[];
    habBlandas: HabBlandaDTO[];
    proyectos: ProyeDTO[];

    constructor(
                persona: PersoDTO,
                educaciones: EduDTO[], 
                experiencias: ExpeDTO[],
                habTecnicas: HabTecnicaDTO[],
                habBlandas: HabBlandaDTO[],
                proyectos: ProyeDTO[]){ 
        
        this.persona = persona;
        this.educaciones = educaciones;
        this.experiencias = experiencias;
        this.habTecnicas = habTecnicas;
        this.habBlandas = habBlandas;
        this.proyectos = proyectos;
    }
}