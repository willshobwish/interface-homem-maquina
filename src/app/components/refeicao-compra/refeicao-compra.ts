import { Component ,Input } from '@angular/core';

@Component({
  selector: 'app-refeicao-compra',
  imports: [],
  templateUrl: './refeicao-compra.html',
  styleUrl: './refeicao-compra.scss',
})
export class RefeicaoCompra {
  @Input() principal = '';
  @Input() acompanhamento = '';
  @Input() salada = '';
  @Input() suco = '';
  @Input() sobremesa = '';
  @Input() datarefeicao = '';
}
