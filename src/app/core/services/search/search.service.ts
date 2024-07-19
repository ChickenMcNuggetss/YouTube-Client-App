import { Injectable } from '@angular/core';
import { SortingVariant } from '@core/types/sorting-types';
import { defineSortCriteria } from '@core/utils/define-sort-criteria';
import { defineSortOrder } from '@core/utils/define-sort-order';
import { filterByTitle } from '@core/utils/filter-by-title';

import { VideoInfo } from '../../interfaces/video-info';
import { VideosService } from '../videos/videos.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  public sortedResults: VideoInfo[] = [];
  public sortValue: string = '';

  constructor(private videosService: VideosService) {}

  public searchByTitle(inputValue: string) {
    this.sortedResults = filterByTitle(
      this.videosService.videosList,
      inputValue
    );
  }

  private sortByView(sortOrder: number) {
    this.sortedResults = this.sortedResults.sort((a, b) => {
      const firstCountValue = Number(a.statistics.viewCount);
      const secondCountValue = Number(b.statistics.viewCount);
      return defineSortCriteria({
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
      return defineSortCriteria({
        order: sortOrder,
        firstValue: firstPublishDate,
        secondValue: secondPublishDate,
      });
    });
  }

  public sortBy(sortCriteria: SortingVariant) {
    const sortOrder = defineSortOrder(sortCriteria);

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
