import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProyeDTO } from 'src/app/dto/proyeDTO';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  //TODO: resolver login
  @Input() isLogged: boolean;
  @Input() idPerso : number;
  @Input() listaProyectos: ProyeDTO[] = [];
  @Output() recargandoPortfolio = new EventEmitter<any>();
  
  proyecto: ProyeDTO;
  tituloModal: string = "";
  agregarEditarActivado: boolean = false;
  

  constructor(private portfolioServ : PortfolioService) { }

  ngOnInit(): void {

  }
/*
  listarProyectos() {
    this.portfolioServ.obtenerDatos().subscribe(data => {this.listaProyectos = data.proyectos})
  }
*/
  abrirModalAgregar(){
    let proye = {id:0,personaId:this.idPerso,nombreProye:"",descripcionProye:"",imgUrl:"",repoUrl:"",liveUrl:""};
    this.proyecto = proye;
    this.tituloModal = "Agregar elemento a Proyectos";
    this.agregarEditarActivado = true;
  }

  abrirModalEditar(proye: ProyeDTO){
    this.proyecto = proye;
    this.tituloModal = "Editar elemento en Proyecto";
    this.agregarEditarActivado = true;
  }

  eliminarProyecto(proyeId:any){
    if(proyeId != undefined && confirm("¿Estás segura de querer eliminar este elemento?")){
      this.portfolioServ.borrarProyecto(proyeId).subscribe(data => {
        alert("Proyecto eliminado con éxito");
        this.recargandoPortfolio.emit();
        });
    }
  }

  cerrarModal(){
    this.agregarEditarActivado = false;
    this.recargandoPortfolio.emit();
  }

}