import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HabBlandaDTO } from 'src/app/dto/habBlandaDTO';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-blanda-agregar-editar',
  templateUrl: './blanda-agregar-editar.component.html',
  styleUrls: ['./blanda-agregar-editar.component.css']
})

export class BlandaAgregarEditarComponent implements OnInit {

  @Input() habilidadBlanda: HabBlandaDTO;
  @Output() cerrandoModal = new EventEmitter<any>();

  habBlanda: HabBlandaDTO;
  //respuesta que viene del Backend
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.habBlanda = this.habilidadBlanda;
  }

  agregarHabBlanda(nuevaBlanda: HabBlandaDTO){
    if (nuevaBlanda.nombreHabilidad != ""){
      this.mostrarMsj = true;
      this.portfolioServ.agregarHabBlanda(nuevaBlanda).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede agregar un elemento sin su nombre";
    }
  }

  editarHabBlanda(blandaEditada: HabBlandaDTO){
    if (blandaEditada.nombreHabilidad != ""){
      this.mostrarMsj = true;
      let idBlandaEditada: any = blandaEditada.id;
      this.portfolioServ.editarHabBlanda(idBlandaEditada, blandaEditada).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede modificar un elemento sin su nombre";      
    }
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista de esta seccion del portfolio
    this.cerrandoModal.emit();
  }

}
