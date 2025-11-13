import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RefeicaoCompra } from '../../components/refeicao-compra/refeicao-compra';
import { FilterByDatePipe } from '../../pipes/filter-by-date-pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-compra',
  imports: [CommonModule, RefeicaoCompra, FilterByDatePipe, FormsModule],
  templateUrl: './compra.html',
  styleUrl: './compra.scss',
})
export class Compra implements OnInit {
  ngOnInit(): void {}
  searchDate: string = '';
  cardapio = [
    {
      data: '06/10/2025',
      principal: 'Escondidinho de Frango (contém lactose)',
      acompanhamento: 'Arroz, Feijão e Cenoura ao Cheiro Verde',
      salada: 'Acelga e Pepino',
      suco: 'Indisponível',
      sobremesa: 'Banana',
    },
    {
      data: '07/10/2025',
      principal: 'Bife Acebolado',
      acompanhamento: 'Arroz, Feijão e Escabeche de Berinjela',
      salada: 'Almeirão e Tomate',
      suco: 'Indisponível',
      sobremesa: 'Maçã',
    },
    {
      data: '08/10/2025',
      principal: 'Sobrecoxa Assada',
      acompanhamento: 'Arroz, Feijão e Quiabo Refogado',
      salada: 'Couve e Tomate',
      suco: 'Indisponível',
      sobremesa: 'Tangerina Murcote',
    },
    {
      data: '09/10/2025',
      principal: 'Bisteca Suína ao Molho Barbecue',
      acompanhamento: 'Arroz, Feijão e Batata Doce Assada',
      salada: 'Alface e Rabanete',
      suco: 'Indisponível',
      sobremesa: 'Laranja',
    },
    {
      data: '10/10/2025',
      principal: 'Carne Moída Refogada',
      acompanhamento: 'Arroz, Feijão e Chuchu na Manteiga',
      salada: 'Acelga e Cenoura Ralada',
      suco: 'Indisponível',
      sobremesa: 'Pera',
    },
    {
      data: '13/10/2025',
      principal: 'Filé de Peixe Empanado',
      acompanhamento: 'Arroz, Feijão e Purê de Mandioquinha',
      salada: 'Alface e Beterraba',
      suco: 'Indisponível',
      sobremesa: 'Mamão',
    },
    {
      data: '14/10/2025',
      principal: 'Frango Grelhado ao Molho de Ervas',
      acompanhamento: 'Arroz, Feijão e Abobrinha Refogada',
      salada: 'Repolho e Cenoura',
      suco: 'Indisponível',
      sobremesa: 'Banana',
    },
    {
      data: '15/10/2025',
      principal: 'Carne Assada com Molho Ferrugem',
      acompanhamento: 'Arroz, Feijão e Farofa de Cenoura',
      salada: 'Almeirão e Tomate',
      suco: 'Indisponível',
      sobremesa: 'Maçã',
    },
    {
      data: '16/10/2025',
      principal: 'Estrogonofe de Frango (contém lactose)',
      acompanhamento: 'Arroz e Batata Palha',
      salada: 'Alface e Pepino',
      suco: 'Indisponível',
      sobremesa: 'Laranja',
    },
    {
      data: '17/10/2025',
      principal: 'Omelete de Legumes',
      acompanhamento: 'Arroz, Feijão e Vagem Refogada',
      salada: 'Couve e Beterraba',
      suco: 'Indisponível',
      sobremesa: 'Melancia',
    },
    {
      data: '20/10/2025',
      principal: 'Frango Xadrez',
      acompanhamento: 'Arroz, Feijão e Legumes Salteados',
      salada: 'Repolho e Cenoura Ralada',
      suco: 'Indisponível',
      sobremesa: 'Tangerina',
    },
    {
      data: '21/10/2025',
      principal: 'Bife de Panela com Legumes',
      acompanhamento: 'Arroz, Feijão e Purê de Batata',
      salada: 'Alface e Tomate',
      suco: 'Indisponível',
      sobremesa: 'Pera',
    },
    {
      data: '22/10/2025',
      principal: 'Peito de Frango Empanado',
      acompanhamento: 'Arroz, Feijão e Escarola Refogada',
      salada: 'Acelga e Cenoura',
      suco: 'Indisponível',
      sobremesa: 'Maçã',
    },
    {
      data: '23/10/2025',
      principal: 'Carne de Panela com Mandioca',
      acompanhamento: 'Arroz, Feijão e Couve Refogada',
      salada: 'Repolho e Pepino',
      suco: 'Indisponível',
      sobremesa: 'Banana',
    },
    {
      data: '24/10/2025',
      principal: 'Quibe Assado',
      acompanhamento: 'Arroz, Feijão e Berinjela ao Forno',
      salada: 'Alface e Tomate',
      suco: 'Indisponível',
      sobremesa: 'Laranja',
    },
  ];
}
