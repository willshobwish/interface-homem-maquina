import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDate',
  pure: false, // allows live updates when bound data changes
})
export class FilterByDatePipe implements PipeTransform {
  transform(items: any[], searchDate: string): any[] {
    if (!items) return [];

    // Se não houver data, retorna todos os itens
    if (!searchDate) return items;

    // Converte a data do input (formato yyyy-MM-dd) para o formato dd/MM/yyyy usado nos dados
    const [year, month, day] = searchDate.split('-');
    const formattedDate = `${day}/${month}/${year}`;

    return items.filter(item => item.data === formattedDate);
  }
}
