import { Injectable } from '@angular/core';
import { SortingVariant } from '@core/types/sorting-types';
import { defineSortCriteria } from '@core/utils/define-sort-criteria';
import { defineSortOrder } from '@core/utils/define-sort-order';
import { BehaviorSubject } from 'rxjs';

import { VideoInfo } from '../../../../core/interfaces/video-info';
import { YoutubeApiService } from '../api/youtube-api.service';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private videos$$ = new BehaviorSubject<VideoInfo[]>([]);
  public videos$ = this.videos$$.pipe();
  public sortValue: string = '';

  constructor(private apiService: YoutubeApiService) {}

  public setVideosValue(passedValue: VideoInfo[]) {
    this.videos$$.next(passedValue);
  }

  private sortByView(sortOrder: number) {
    this.videos$$.next(this.videos$$.value.sort((a, b) => {
      const firstCountValue = Number(a.statistics.viewCount);
      const secondCountValue = Number(b.statistics.viewCount);
      return defineSortCriteria({
        order: sortOrder,
        firstValue: firstCountValue,
        secondValue: secondCountValue,
      });
    }));
  }

  private sortByDate(sortOrder: number) {
    this.videos$$.next(this.videos$$.value.sort((a, b) => {
      const firstPublishDate = new Date(a.snippet.publishedAt).getTime();
      const secondPublishDate = new Date(b.snippet.publishedAt).getTime();
      return defineSortCriteria({
        order: sortOrder,
        firstValue: firstPublishDate,
        secondValue: secondPublishDate,
      });
    }));
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

  public getVideo(id: string) {
    return this.apiService.getVideoInfo([id]);
  }
}
