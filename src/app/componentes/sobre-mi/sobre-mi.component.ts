import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PersoDTO } from 'src/app/dto/persoDTO';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})

export class SobreMiComponent implements OnInit {
 
  @Input() isLogged: boolean;
  @Input() persona: PersoDTO;
  @Output() recargandoPortfolio = new EventEmitter<any>();

  perso: PersoDTO;
  tituloModal: string = "Editar información personal";
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  mostrarMsj: boolean = false;

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    this.perso = this.persona;
  }

  abrirModalEditar(perso: PersoDTO){
    this.perso = perso;
  }

  editarPersona(persoEditada: PersoDTO){
    if (((persoEditada.nombre && persoEditada.ocupacion) != "") && ((persoEditada.descripcion && persoEditada.imgUrl) != "")){
      this.mostrarMsj = true;
      this.portfolioServ.editarPersona(persoEditada).subscribe(data => {
        this.respta = data;});
    } else {
      this.mostrarMsj = true;
      this.respta.msj = "Por favor, ingrese todos los campos requeridos";
    }
  }

  cerrarModal(){
    this.mostrarMsj=false
    this.respta = {salioBien: false, msj: ""};
    //recargar vista 
    this.recargandoPortfolio.emit();
  }

}
