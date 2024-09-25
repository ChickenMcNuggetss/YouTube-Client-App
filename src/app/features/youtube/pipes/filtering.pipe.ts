import { Pipe, PipeTransform } from '@angular/core';
import { filterByTitle } from '@core/utils/filter-by-title';

import { MixedList } from '../components/card-list/card-list.component';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilteringPipe implements PipeTransform {
  transform(value: MixedList[] | null, sortValue: string): MixedList[] {
    if (value === null) return [];
    if (sortValue.trim() === '') {
      return value;
    }
    const filteredResult = filterByTitle(value, sortValue);
    return filteredResult;
  }
}
