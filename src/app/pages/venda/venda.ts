import { Component } from '@angular/core';
import { RefeicaoVenda } from '../../components/refeicao-venda/refeicao-venda';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-venda',
  imports: [CommonModule,RefeicaoVenda],
  templateUrl: './venda.html',
  styleUrl: './venda.scss',
})
export class Venda {
  cardapio = [
    {
      data: '06/10/2025',
      principal: 'Escondidinho de Frango (contém lactose)',
      acompanhamento: 'Arroz, Feijão e Cenoura ao Cheiro Verde',
      salada: 'Acelga e Pepino',
      suco: 'Indisponível',
      sobremesa: 'Banana'
    },
    {
      data: '07/10/2025',
      principal: 'Bife Acebolado',
      acompanhamento: 'Arroz, Feijão e Escabeche de Berinjela',
      salada: 'Almeirão e Tomate',
      suco: 'Indisponível',
      sobremesa: 'Maçã'
    },
    {
      data: '08/10/2025',
      principal: 'Sobrecoxa Assada',
      acompanhamento: 'Arroz, Feijão e Quiabo Refogado',
      salada: 'Couve e Tomate',
      suco: 'Indisponível',
      sobremesa: 'Tangerina Murcote'
    },
    {
      data: '09/10/2025',
      principal: 'Bisteca Suína ao Molho Barbecue',
      acompanhamento: 'Arroz, Feijão e Batata Doce Assada',
      salada: 'Alface e Rabanete',
      suco: 'Indisponível',
      sobremesa: 'Laranja'
    },
    {
      data: '10/10/2025',
      principal: 'Carne Moída Refogada',
      acompanhamento: 'Arroz, Feijão e Chuchu na Manteiga',
      salada: 'Acelga e Cenoura Ralada',
      suco: 'Indisponível',
      sobremesa: 'Pera'
    }
  ];
}
