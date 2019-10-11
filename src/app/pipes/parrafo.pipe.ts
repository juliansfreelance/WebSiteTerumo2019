import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parrafo'
})
export class ParrafoPipe implements PipeTransform {

  transform(value: any, ...args: any): string {
    if (args === undefined) {
      return value;
    }

    if (value.length > args) {
      return value.substring(0, args) + '...';
    } else {
      return value;
    }
  }
  
}
