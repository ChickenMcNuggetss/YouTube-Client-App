import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '@core/interfaces/response';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: ResponseItem[], ...args: string[]): null {
    // return value.sort((a, b) => {

    //   return
    // })
    return null;
  }

}
