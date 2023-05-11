import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EduDTO } from 'src/app/dto/eduDTO';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-agregar-editar-edu',
  templateUrl: './agregar-editar-edu.component.html',
  styleUrls: ['./agregar-editar-edu.component.css']
})

export class AgregarEditarEduComponent implements OnInit {

  @Input() educacion: EduDTO;
  @Output() cerrandoModal = new EventEmitter<any>();

  edu: EduDTO;
  //respuesta que viene del Backend
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;
  
  constructor(private portfolioServ : PortfolioService){}

  ngOnInit(): void {
    this.edu=this.educacion;
  }

  agregarEdu(nuevaEdu:EduDTO){
    if (nuevaEdu.tituloEdu != ""){
      this.mostrarMsj = true;
      this.portfolioServ.agregarEdu(nuevaEdu).subscribe(data => {
        this.respta = data;
        }
      );
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "No se puede agregar un elemento sin título";
    }
  }

  editarEdu(eduEditada:EduDTO){
    if (eduEditada.tituloEdu != ""){
      this.mostrarMsj = true;
      let idEduEditada: any = eduEditada.id;
      this.portfolioServ.editarEdu(idEduEditada, eduEditada).subscribe(data => {
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
    //recargar vista 
    this.cerrandoModal.emit();
  }

}
