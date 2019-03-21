import { Pipe,PipeTransform } from '@angular/core';
@Pipe({name:'split'})
export class EuroPipe implements PipeTransform {
     
  transform(items: any, value: string): string {
    return items.substr(1)+' ' +items.substr(0,1);
}
}