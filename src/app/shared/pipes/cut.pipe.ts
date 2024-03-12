import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cut'
})
export class CutPipe implements PipeTransform {

  transform(text: string , limt:number): string {
    return text.split(" ").slice(0,limt).join();
  }

}
