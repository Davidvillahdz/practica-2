import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/PerfilPage/PerfilPage';
import { ProyectosPage } from './features/Proyectos-page/Proyectos-page';
import { ProyectosDos } from './features/Proyectos-dos/Proyectos-dos';  
import { FormularioPage } from './features/formulario-page/formulario-page';



export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: HomePage },
  { path: 'perfil', component: PerfilPage },
  { path: 'proyectos-page', component: ProyectosPage },
  { path: 'proyectos-dos', component: ProyectosDos },
  { path:  'formulario-page', component:FormularioPage}

];

