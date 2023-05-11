import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ExpeDTO } from 'src/app/dto/expeDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  
  //TODO: resolver login
  @Input() isLogged: boolean;
  @Input() idPerso : number;
  @Input() listaExpe: ExpeDTO[] = [];
  //recarga vista portfolio
  @Output() recargandoPortfolio = new EventEmitter<any>();

  experiencia: ExpeDTO;
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;

 
  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {
    
  }
/*
  listarExperiencias() : void{
    console.log("llegando data de experiencia");
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaExpe = data.experiencias});
    //this.portfolioServ.listarExperiencias().subscribe(data => {this.listaExpe = data})
  }
  */

  abrirModalAgregar(){
    let expe = {id:0,personaId:this.idPerso,puestoExpe:"",periodoExpe:"",organismoExpe:"",descripcionExpe:"",urlLogoExpe:""};
    this.experiencia = expe;
    this.tituloModal = "Agregar elemento a Experiencia";
    this.agregarEditarActivado = true;
  }

  abrirModalEditar(expe: ExpeDTO){
    this.experiencia = expe;
    this.tituloModal = "Editar elemento en Experiencia";
    this.agregarEditarActivado = true;
  }

  eliminarExpe(expeId:any){
    if(expeId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarExpe(expeId).subscribe(data => {
        alert("¡Experiencia eliminada con éxito!");
        this.recargandoPortfolio.emit();
        });
    }
  }

  cerrarModal(){
    this.agregarEditarActivado = false;
    this.recargandoPortfolio.emit();
  }

}
