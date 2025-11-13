import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-refeicao-compra',
  imports: [RouterLink],
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
