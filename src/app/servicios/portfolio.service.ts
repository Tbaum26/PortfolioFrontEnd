import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EduDTO } from '../dto/eduDTO';
import { ExpeDTO } from '../dto/expeDTO';
import { HabBlandaDTO } from '../dto/habBlandaDTO';
import { HabTecnicaDTO } from '../dto/habTecnicaDTO';
import { PersoDTO } from '../dto/persoDTO';
import { ProyeDTO } from '../dto/proyeDTO';
import { RespuestaDTO } from '../dto/respuestaDTO';

@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  //DATA JSON
  //urlBackend: string = "src/assets/data/data.json";

  //esta url sale del @RequestMapping del Controller del backend "http://localhost:8080/"
  urlBackend: string = "https://solesasia-portfolio.onrender.com/"

  constructor(private http:HttpClient) { }

  // LM Porfolio //

  public obtenerDatos():Observable<any>{
    return this.http.get<any>(this.urlBackend + 'portfolio');
  }

  public editarPersona(perso: PersoDTO) : Observable<RespuestaDTO>{
    return this.http.put<RespuestaDTO>(this.urlBackend + 'editarPersona', perso);
  }
  
  // ABM Educacion //

  public agregarEdu(edu:EduDTO): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.urlBackend + 'nuevaEdu', edu);    
  }

  public editarEdu(id: number, edu: EduDTO): Observable<RespuestaDTO> {
    return this.http.put<RespuestaDTO>(this.urlBackend + `editarEdu/${id}`, edu);
  }

  public borrarEdu(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarEdu/${id}`);
  }

  // ABM Experiencia //

  public agregarExpe(expe: ExpeDTO): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.urlBackend + 'nuevaExpe', expe);    
  }

  public editarExpe(id: number, expe: ExpeDTO): Observable<RespuestaDTO> {
    return this.http.put<RespuestaDTO>(this.urlBackend + `editarExpe/${id}`, expe);
  }

  public borrarExpe(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarExpe/${id}`);
  }

  // ABM Habilidad Tecnica //

  public agregarHabTecnica(habTec: HabTecnicaDTO): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(this.urlBackend + 'nuevaHabTecnica', habTec);    
  }

  public editarHabTecnica(id: number, habTec :HabTecnicaDTO): Observable<RespuestaDTO> {
    return this.http.put<RespuestaDTO>(this.urlBackend + `editarHabTecnica/${id}`, habTec);
  }

  public borrarHabTecnica(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarHabTecnica/${id}`);
  }

  // ABM Habilidad Blanda //

  public agregarHabBlanda(habBlan: HabBlandaDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevaHabBlanda', habBlan);    
  }

  public editarHabBlanda(id: number, habBlan :HabBlandaDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarHabBlanda/${id}`, habBlan);
  }

  public borrarHabBlanda(id: number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarHabBlanda/${id}`);
  }

  // ABM Proyecto //

  public agregarProyecto(proye:ProyeDTO): Observable<any> {
    return this.http.post<any>(this.urlBackend + 'nuevoProyecto', proye);    
  }

  public editarProyecto(id :number, proye :ProyeDTO): Observable<any> {
    return this.http.put<any>(this.urlBackend + `editarProyecto/${id}`, proye);
  }

  public borrarProyecto(id :number): Observable<any> {
    return this.http.delete<any>(this.urlBackend + `borrarProyecto/${id}`);
  }

}
