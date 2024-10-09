import { Injectable, signal } from '@angular/core';
import { SortingVariant } from '@core/types/sorting-types';
import { defineSortOrder } from '@core/utils/define-sort-order';
import { Store } from '@ngrx/store';
import { sortVideos } from '@store/actions/videos.actions';

import { YoutubeApiService } from '../api/youtube-api.service';

@Injectable({
  providedIn: 'root',
})
export class VideosService {
  private _isSearchActive = signal<boolean>(false);
  public isSearchActive = this._isSearchActive.asReadonly();
  public sortValue: string = '';

  constructor(private apiService: YoutubeApiService, private store: Store) {}

  public toggleSearchFieldStatus() {
    this._isSearchActive.set(!this._isSearchActive());
  }

  public sortBy(sortCriteria: SortingVariant) {
    const sortOrder = defineSortOrder(sortCriteria);

    if (sortCriteria.includes('view')) {
      this.store.dispatch(sortVideos({ sortOrder, sortBy: 'view' }));
    }
    if (sortCriteria.includes('date')) {
      this.store.dispatch(sortVideos({ sortOrder, sortBy: 'date' }));
    }
  }

  public setSortValue(value: string) {
    this.sortValue = value;
  }

  public getVideo(id: string) {
    return this.apiService.getVideoInfo([id]);
  }
}
