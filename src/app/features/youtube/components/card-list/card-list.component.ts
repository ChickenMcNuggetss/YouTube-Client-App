import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import {
  Component, DestroyRef, inject, OnDestroy
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { VideoInfo } from '@core/interfaces/video-info';
import { FilteringPipe } from '@features/youtube/pipes/filtering.pipe';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { Store } from '@ngrx/store';
import { Card } from '@store/interfaces/card';
import { selectVideos } from '@store/selectors/videos.selectors';
import { debounceTime, tap } from 'rxjs';

import { CardItemComponent } from '../card-item/card-item.component';
import { CustomVideoCardComponent } from '../custom-video-card/custom-video-card/custom-video-card.component';

export type MixedList = VideoInfo | Card;

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardItemComponent, FilteringPipe, AsyncPipe, CustomVideoCardComponent, NgIf, NgFor],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent implements OnDestroy {
  public videos$: MixedList[] = [];
  protected searchService = inject(VideosService);

  constructor(private store: Store, private videosService: VideosService, private destroy: DestroyRef) {
    if (!this.videosService.isSearchActive()) {
      this.videosService.toggleSearchFieldStatus();
    }

    this.store.select(selectVideos).pipe(debounceTime(100), tap((videos) => { this.videos$ = videos; }), takeUntilDestroyed(this.destroy)).subscribe();
  }

  ngOnDestroy() {
    if (this.videosService.isSearchActive()) {
      this.videosService.toggleSearchFieldStatus();
    }
  }

  isCard(item: MixedList): item is Card {
    return (item as Card).creationDate !== undefined;
  }
}
