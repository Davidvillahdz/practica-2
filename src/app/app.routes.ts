import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/PerfilPage/PerfilPage';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'perfil',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'perfil',
    component: PerfilPage
  }
];
