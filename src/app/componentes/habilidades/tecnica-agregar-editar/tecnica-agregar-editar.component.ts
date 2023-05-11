import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HabTecnicaDTO } from 'src/app/dto/habTecnicaDTO';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-tecnica-agregar-editar',
  templateUrl: './tecnica-agregar-editar.component.html',
  styleUrls: ['./tecnica-agregar-editar.component.css']
})

export class TecnicaAgregarEditarComponent implements OnInit {

  @Input() habilidadTecnica: HabTecnicaDTO;
  @Output() cerrandoModal = new EventEmitter<any>();

  habTecnica: HabTecnicaDTO;
  //respuesta que viene del Backend
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.habTecnica = this.habilidadTecnica;
  }

  agregarHabTecnica(nuevaTecnica: HabTecnicaDTO){
    if (nuevaTecnica.urlIcono != ""){
      this.mostrarMsj = true;
      this.portfolioServ.agregarHabTecnica(nuevaTecnica).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede agregar un elemento sin icono o nivel";
    }
  }

  editarHabTecnica(tecnicaEditada: HabTecnicaDTO){
    if (tecnicaEditada.urlIcono != ""){
      this.mostrarMsj = true;
      let idTecnicaEditada: any = tecnicaEditada.id;
      this.portfolioServ.editarHabTecnica(idTecnicaEditada, tecnicaEditada).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede modificar un elemento sin icono o nivel";      
    }
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista de esta seccion del portfolio
    this.cerrandoModal.emit();
  }

}
