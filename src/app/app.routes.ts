import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Perfil } from './pages/perfil/perfil';
import { Compra } from './pages/compra/compra';
import { Venda } from './pages/venda/venda';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
    title: 'Login',
  },  {
    path: 'perfil',
    component: Perfil,
    title: 'Perfil',
  },  {
    path: 'compra',
    component: Compra,
    title: 'Compra',
  },  {
    path: 'venda',
    component: Venda,
    title: 'Venda',
  }
];
