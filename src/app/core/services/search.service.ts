import { Injectable, inject } from '@angular/core';

import { ResponseItem } from '../interfaces/response';
import { SortingVariant } from '@core/types/sorting-types';
import { filterByTitle } from '@core/utils/filter-by-title';
import { VideosService } from './videos.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  responseService = inject(VideosService)
  sortedResults: ResponseItem[] = [];
  sortValue: string = '';

  public searchByTitle(inputValue: string) {
    this.sortedResults = filterByTitle(this.responseService.responseList, inputValue);
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

  private sortByView(sortOrder: number) {
    this.sortedResults = this.sortedResults.sort((a, b) => {
      const firstCountValue = new Date(a.snippet.publishedAt).getTime();
      const secondCountValue = new Date(b.snippet.publishedAt).getTime();
      return this.defineSortCriteria({
        order: sortOrder,
        firstValue: firstCountValue,
        secondValue: secondCountValue,
      });
    });
  }

  private sortByDate(sortOrder: number) {
    this.sortedResults = this.sortedResults.sort((a, b) => {
      const firstPublishDate = new Date(a.snippet.publishedAt).getTime();
      const secondPublishDate = new Date(b.snippet.publishedAt).getTime();
      return this.defineSortCriteria({
        order: sortOrder,
        firstValue: firstPublishDate,
        secondValue: secondPublishDate,
      });
    });
  }

  public sortBy(sortCriteria: SortingVariant) {
    const sortOrder = this.defineSortOrder(sortCriteria);

    if (sortCriteria.includes('view')) {
      this.sortByView(sortOrder);
    }
    if (sortCriteria.includes('date')) {
      this.sortByDate(sortOrder);
    }
  }

  public setSortValue(value: string) {
    this.sortValue = value;
  }
}
