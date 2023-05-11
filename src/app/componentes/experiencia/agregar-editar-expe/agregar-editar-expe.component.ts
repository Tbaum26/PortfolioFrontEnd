import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpeDTO } from 'src/app/dto/expeDTO';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-editar-expe',
  templateUrl: './agregar-editar-expe.component.html',
  styleUrls: ['./agregar-editar-expe.component.css']
})

export class AgregarEditarExpeComponent implements OnInit {

  //traigo del componente padre un objeto del tipo ExpeDTO
  @Input() experiencia: ExpeDTO;
  //creo los eventos para poder enviar al componente padre objetos del tipo Experiencia
  @Output() cerrandoModal = new EventEmitter<any>();
  
  //objeto de uso local
  expe: ExpeDTO;
  //respuesta que viene del Backend
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    //guardo valores que vienen del padre en el objeto local
    this.expe = this.experiencia;
  }

  //envío al padre objeto con valores ingresados en el modal
  agregarExpe(nuevaExpe: ExpeDTO){
    if (nuevaExpe.puestoExpe != ""){
      this.mostrarMsj = true;
      this.portfolioServ.agregarExpe(nuevaExpe).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede agregar un elemento sin título";
    }
  }

  //envío al padre objeto con valores modificados en el modal
  editarExpe(expeEditada: ExpeDTO){
    if (expeEditada.puestoExpe != ""){
      this.mostrarMsj = true;
      let idExpeEditada: any = expeEditada.id;
      this.portfolioServ.editarExpe(idExpeEditada, expeEditada).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede modificar un elemento sin asignar un puesto";      
    }
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista del portfolio
    this.cerrandoModal.emit();
    //recargar vista de esta seccion del portfolio
  }

}
