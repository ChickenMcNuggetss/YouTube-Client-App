import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnDestroy } from '@angular/core';
import { FilteringPipe } from '@features/youtube/pipes/filtering.pipe';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { Store } from '@ngrx/store';
import { selectVideos } from 'app/store/selectors/videos.selectors';
import { Subscription } from 'rxjs';

import { CardItemComponent } from '../card-item/card-item.component';
import { VideoInfo } from '@core/interfaces/video-info';
import { Card } from 'app/store/interfaces/card';
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
  private subscription: Subscription = new Subscription();
  protected videos$ = this.store.select(selectVideos);
  protected searchService = inject(VideosService);

  constructor(private store: Store) {
    this.subscription.add(this.videos$.pipe()
      .subscribe((data) => console.log(data)));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  isCard(item: MixedList): item is Card {
    return (item as Card).creationDate !== undefined;
  }
}
