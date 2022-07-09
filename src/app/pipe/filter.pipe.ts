import { Pipe, PipeTransform } from '@angular/core';
import { Itens } from '../models/itens';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    if (!items || !filter || filter=="Todos") {
        return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.Tipo.indexOf(filter) !== -1);
}

}
