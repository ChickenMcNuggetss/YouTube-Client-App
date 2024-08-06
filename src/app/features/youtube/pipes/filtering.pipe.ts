import { Pipe, PipeTransform } from '@angular/core';
import { VideoInfo } from '@core/interfaces/video-info';
import { filterByTitle } from '@core/utils/filter-by-title';
import { Card } from 'app/store/interfaces/card';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilteringPipe implements PipeTransform {
  transform(value: (VideoInfo | Card)[] | null, sortValue: string): (VideoInfo | Card)[] {
    if (value === null) return [];
    if (sortValue.trim() === '') {
      return value;
    }
    const filteredResult = filterByTitle(value, sortValue);
    return filteredResult;
  }
}
