import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(names: any, searchText: any): any {
    if(searchText == null) return names;

    return names.filter(function(name){
      return name.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
    })
  }
}
