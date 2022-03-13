import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  constructor() { }

  transform(orderArray: any[], userSearch: string): any {
    if (!userSearch) {
      return orderArray;
    }
    let productSelected = orderArray.filter(item => item.name == userSearch)
    return productSelected;
  }
}
