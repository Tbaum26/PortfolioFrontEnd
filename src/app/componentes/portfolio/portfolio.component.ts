import { Component, OnInit } from '@angular/core';
import { PersoDTO } from 'src/app/dto/persoDTO';
import { PortfolioDTO } from 'src/app/dto/portfolioDTO';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {

  miPortfolio : PortfolioDTO;

  isLogged : boolean = false;

  constructor(private portfolioServ : PortfolioService, private autenticacion: AutenticacionService) { }

  ngOnInit(): void {    
    this.cargarVista();
    this.isLogged = !!this.autenticacion.getToken();
  }

  cargarVista(){
    this.portfolioServ.obtenerDatos().subscribe(data => {this.miPortfolio = data});
  }
}
