import { Pipe, PipeTransform } from '@angular/core';
import { prodact } from '../interfaces/prodact';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(pro: prodact[], term: string): prodact[] {
    return pro.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}
