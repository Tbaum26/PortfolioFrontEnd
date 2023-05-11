import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importo mis componentes
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component'
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component'
import { ProyectosComponent } from './componentes/proyectos/proyectos.component'
import { LoginComponent } from './componentes/login/login.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

//defino mis rutas
const routes: Routes = [
  {path: '', component: PortfolioComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'ingresar', component: LoginComponent},
  {path: '**', redirectTo:'', pathMatch: 'full'}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
