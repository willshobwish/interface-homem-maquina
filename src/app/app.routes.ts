import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Perfil } from './pages/perfil/perfil';
import { Compra } from './pages/compra/compra';
import { Venda } from './pages/venda/venda';
import { FilaCompra } from './pages/fila-compra/fila-compra';
import { PaginaNaoEncontrada } from './pages/pagina-nao-encontrada/pagina-nao-encontrada';
import { VendidoSucesso } from './pages/vendido-sucesso/vendido-sucesso';
import { CompradoSucesso } from './pages/comprado-sucesso/comprado-sucesso';

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
  },
  {
    path: 'comprado-com-sucesso',
    component: CompradoSucesso,
    title: 'Comprado com sucesso',
  },
  {
    path: 'vendido-com-sucesso',
    component: VendidoSucesso,
    title: 'Vendido com sucesso',
  },
  { path: '**', component: PaginaNaoEncontrada, title: 'Página não encontrada' },
];
