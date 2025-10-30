import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-refeicao-venda',
  imports: [CommonModule],
  templateUrl: './refeicao-venda.html',
  styleUrls: ['./refeicao-venda.scss'], // also fix plural
})
export class RefeicaoVenda {
  @Input() principal = '';
  @Input() acompanhamento = '';
  @Input() salada = '';
  @Input() suco = '';
  @Input() sobremesa = '';
  @Input() datarefeicao = '';
}
