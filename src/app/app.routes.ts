import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Perfil } from './pages/perfil/perfil';
import { Compra } from './pages/compra/compra';
import { Venda } from './pages/venda/venda';
import { FilaCompra } from './pages/fila-compra/fila-compra';
import { PaginaNaoEncontrada } from './pages/pagina-nao-encontrada/pagina-nao-encontrada';

export const routes: Routes = [
  {
    path: '',
    component: Login,
    title: 'Login',
  },

  {
    path: 'login',
    component: Login,
    title: 'Login',
  },
  {
    path: 'perfil',
    component: Perfil,
    title: 'Perfil',
  },
  {
    path: 'compra',
    component: Compra,
    title: 'Compra',
  },
  {
    path: 'venda',
    component: Venda,
    title: 'Venda',
  },
  {
    path: 'fila-compra',
    component: FilaCompra,
    title: 'Fila de compra',
  },  { path: '**', 
    component: PaginaNaoEncontrada, 
    title: 'Página não encontrada' },
];
