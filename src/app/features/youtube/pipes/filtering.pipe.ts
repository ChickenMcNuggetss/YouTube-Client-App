import { Pipe, PipeTransform } from '@angular/core';
import { VideoInfo } from '@core/interfaces/video-info';
import { filterByTitle } from '@core/utils/filter-by-title';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilteringPipe implements PipeTransform {
  transform(value: VideoInfo[], sortValue: string): VideoInfo[] {
    if (sortValue.trim() === '') {
      return value;
    }
    const filteredResult = filterByTitle(value, sortValue);
    return filteredResult;
  }
}
