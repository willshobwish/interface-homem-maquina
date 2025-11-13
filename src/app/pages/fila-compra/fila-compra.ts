import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fila-compra',
  imports: [CommonModule],
  templateUrl: './fila-compra.html',
  styleUrl: './fila-compra.scss',
})
export class FilaCompra {
  suaPosicao: number;
  suaPosicaoInicial: number;
  message: string = '';
  atendido: boolean = false;
  totalFila: number;
  pessoasRestantes: number;
  mostrarPopup: boolean = false;

  constructor(private router: Router) {
    // Injete o Router
    this.totalFila = Math.floor(Math.random() * 6) + 5;
    this.suaPosicao = Math.floor(Math.random() * (this.totalFila - 1)) + 2;
    this.suaPosicaoInicial = this.suaPosicao;
    this.pessoasRestantes = this.totalFila;
    this.contar();
  }

  contar() {
    if (this.suaPosicao === 0) {
      this.message = 'É a sua vez!';
      this.atendido = true;
      this.mostrarPopup = true;
      setTimeout(() => {
        this.router.navigate(['/comprado-com-sucesso']);
      }, 1000); // Aguarda 1.8s antes de redirecionar
      return;
    }
    const randomTime = 1000 + Math.random() * 3000;
    setTimeout(() => {
      this.suaPosicao--;
      this.pessoasRestantes--;
      this.contar();
    }, randomTime);
  }

  getProgresso(): number {
    return ((this.suaPosicaoInicial - this.suaPosicao) / this.suaPosicaoInicial) * 100;
  }

  fecharPopup() {
    this.mostrarPopup = false;
  }
}
