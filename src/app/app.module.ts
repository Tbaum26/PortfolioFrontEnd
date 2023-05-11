import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { CommonModule } from '@angular/common';
import { AgregarEditarEduComponent } from './componentes/educacion/agregar-editar-edu/agregar-editar-edu.component';
import { AgregarEditarExpeComponent } from './componentes/experiencia/agregar-editar-expe/agregar-editar-expe.component';
import { LoginComponent } from './componentes/login/login.component';
import { TecnicaAgregarEditarComponent } from './componentes/habilidades/tecnica-agregar-editar/tecnica-agregar-editar.component';
import { BlandaAgregarEditarComponent } from './componentes/habilidades/blanda-agregar-editar/blanda-agregar-editar.component';
import { AgregarEditarProyectosComponent } from './componentes/proyectos/agregar-editar-proyectos/agregar-editar-proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';



@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SobreMiComponent,
    ProyectosComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    NavbarComponent,
    EducacionComponent,
    AgregarEditarEduComponent,
    AgregarEditarExpeComponent,
    LoginComponent,
    TecnicaAgregarEditarComponent,
    BlandaAgregarEditarComponent,
    AgregarEditarProyectosComponent,
    FooterComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
