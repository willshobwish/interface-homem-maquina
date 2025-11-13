import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterByDatePipe } from '../../pipes/filter-by-date-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule, FormsModule],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  transacoes = [
    { data: '12/11/2025', descricao: 'Compra RU', valor: -2.5 },
    { data: '11/11/2025', descricao: 'Venda de Refeição', valor: 2.5 },
    { data: '10/11/2025', descricao: 'Recarga', valor: 100.0 },
    { data: '09/11/2025', descricao: 'Compra de Refeição', valor: -2.5 },
    { data: '08/11/2025', descricao: 'Compra RU', valor: -2.5 },
    { data: '07/11/2025', descricao: 'Venda de Refeição', valor: 2.5 },
    { data: '05/11/2025', descricao: 'Compra RU', valor: -2.5 },
    { data: '01/11/2025', descricao: 'Recarga', valor: 50.0 },
  ];

  searchDate: string = '';
  limite: number = 5;

  get transacoesFiltradas() {
    let filtradas = new FilterByDatePipe().transform(this.transacoes, this.searchDate);
    return filtradas.slice(0, this.limite);
  }

  mostrarMais() {
    this.limite += 5;
  }
}