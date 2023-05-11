import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { PersoDTO } from 'src/app/dto/persoDTO';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isLogged: boolean;
  @Input() persona: PersoDTO;

  githubUrl: string;
  linkedinUrl: string;

  constructor(private autenticacion: AutenticacionService) { }

  ngOnInit(): void {
    this.githubUrl = this.persona.githubUrl;
    this.linkedinUrl = this.persona.linkedinUrl;
  }

  irALaSeccion(seccion : string){
    window.location.hash = "";
    window.location.hash = seccion;
  }

  cerrarSesion() {
    this.autenticacion.cerrarSesion();
    window.location.reload();
  }
}
