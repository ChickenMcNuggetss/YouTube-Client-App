import { Injectable } from '@angular/core';
import { response } from '@features/youtube/response';

import { ResponseItem } from '../interfaces/response';
import { SortingVariant } from '@core/types/sorting-types';
import { filterByTitle } from '@core/utils/filter-by-title';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  sortedResults: ResponseItem[] = [];
  sortValue: string = '';

  public searchByTitle(inputValue: string) {
    this.sortedResults = filterByTitle(response, inputValue)
  }

  private defineSortOrder(sortCriteria: SortingVariant) {
    return sortCriteria.includes('desc') ? -1 : 1;
  }

  private defineSortCriteria({
    order,
    firstValue,
    secondValue,
  }: {
    order: number;
    firstValue: number;
    secondValue: number;
  }) {
    return order * (firstValue - secondValue);
  }

  public sortBy(sortCriteria: SortingVariant) {
    let sortOrder = this.defineSortOrder(sortCriteria);

    this.sortedResults = this.sortedResults.sort((a, b) => {
      if (sortCriteria.includes('view')) {
        return this.defineSortCriteria({
          order: sortOrder,
          firstValue: Number(b.statistics.viewCount),
          secondValue: Number(a.statistics.viewCount),
        });
      }
      if (sortCriteria.includes('date')) {
        const firstPublishDate = new Date(a.snippet.publishedAt).getTime();
        const secondPublishDate = new Date(b.snippet.publishedAt).getTime();
        return this.defineSortCriteria({
          order: sortOrder,
          firstValue: firstPublishDate,
          secondValue: secondPublishDate,
        });
      }
      return 0;
    });
  }

  public setSortValue(value: string) {
    this.sortValue = value;
  }
}
