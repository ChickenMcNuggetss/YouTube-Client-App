import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '@core/interfaces/response';
import { filterByTitle } from '@core/utils/filter-by-title';

@Pipe({
  name: 'sort',
  standalone: true,
})
export class FilteringPipe implements PipeTransform {
  transform(value: ResponseItem[], sortValue: string): ResponseItem[] {
    if (sortValue.trim() === '') {
      return value;
    }
    const res = filterByTitle(value, sortValue);
    return res;
  }
}
