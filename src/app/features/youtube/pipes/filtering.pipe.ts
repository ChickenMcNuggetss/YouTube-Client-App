import { Pipe, PipeTransform } from '@angular/core';
import { ResponseItem } from '@core/interfaces/response';
import { filterByTitle } from '@core/utils/filter-by-title';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilteringPipe implements PipeTransform {
  transform(value: ResponseItem[], sortValue: string): ResponseItem[] {
    if (sortValue.trim() === '') {
      return value;
    }
    const filteredResult = filterByTitle(value, sortValue);
    return filteredResult;
  }
}
