import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '@core/interfaces/response';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class SortPipe implements PipeTransform {
  transform(value: ResponseItem[], sortValue: string): ResponseItem[] {
    if (sortValue.trim() === '') {
      return value;
    }
    const res = value.filter(el => {
      if (el.snippet.title.toLowerCase().includes(sortValue.toLowerCase())) {
        return el;
      }
      return;
    });
    return [...res];
  }
}
