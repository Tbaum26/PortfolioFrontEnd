import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProyeDTO } from 'src/app/dto/proyeDTO';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-editar-proyectos',
  templateUrl: './agregar-editar-proyectos.component.html',
  styleUrls: ['./agregar-editar-proyectos.component.css']
})

export class AgregarEditarProyectosComponent implements OnInit {

  @Input() proyecto: ProyeDTO;
  @Output() cerrandoModal = new EventEmitter<any>();

  proye : ProyeDTO;
  //respuesta que viene del Backend
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.proye = this.proyecto;
  }

  agregarProye(nuevoProye:ProyeDTO){
    if (nuevoProye.nombreProye != ""){
      this.mostrarMsj = true;
      this.portfolioServ.agregarProyecto(nuevoProye).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede agregar un elemento sin título";
    }
  }

  editarProye(proyeEditado:ProyeDTO){
    if (proyeEditado.nombreProye != ""){
      this.mostrarMsj = true;
      let idProyeEditado: any = proyeEditado.id;
      this.portfolioServ.editarProyecto(idProyeEditado, proyeEditado).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede modificar un elemento sin título";      
    }
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista de esta seccion del portfolio
    this.cerrandoModal.emit();
  }

}
