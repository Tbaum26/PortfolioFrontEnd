import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { RespuestaDTO } from '../dto/respuestaDTO';

const TOKEN_KEY : string = "auth";

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private http:HttpClient) { 
    
  }

  iniciarSesion(): void {
    window.sessionStorage.setItem(TOKEN_KEY, "solecita");
  }

  cerrarSesion(): void {
    window.sessionStorage.clear();
  }
  
  getToken(){
    return sessionStorage.getItem(TOKEN_KEY);
  }

}

