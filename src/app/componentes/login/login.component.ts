import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RespuestaDTO } from 'src/app/dto/respuestaDTO';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  //respuesta que viene del servicio
  respta: RespuestaDTO = {salioBien: false, msj: ""};
  //variable que permite la vista del msj de la respuesta
  mostrarMsj: boolean = false;

  constructor(private formBuilder : FormBuilder, 
              private autenticacion: AutenticacionService, 
              private ruta: Router) {

    this.loginForm = this.formBuilder.group({
      username:['',[Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
   }

  ngOnInit(): void {
  }

  //Declaro propiedades para obtener username y password
  get username(){
    return this.loginForm.get("username");
  }

  get password(){
    return this.loginForm.get("password");
  }

  ingresar(){
    if(this.loginForm.valid) {
      if (this.loginForm.value.username === 'sole' && this.loginForm.value.password === '123456') {
        this.mostrarMsj = true;
        this.autenticacion.iniciarSesion();
        //respta
        this.respta.salioBien = true;
        this.respta.msj = "¡Buena! Ya iniciaste sesión!";
        //navegar a inicio
        this.ruta.navigate(["/portfolio"]);
      
      } else if(this.loginForm.value.username === '' || this.loginForm.value.password === '') {
        this.mostrarMsj = true;
        this.respta.msj = "Se necesita usuario y contraseña para ingresar";
      
      } else {
        this.mostrarMsj = true;
        this.respta.msj = "Mmm... Usuario o contraseña inválidos";
      }
    }
  }


}
