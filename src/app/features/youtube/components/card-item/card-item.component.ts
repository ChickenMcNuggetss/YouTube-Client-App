import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { VideoInfo } from '@core/interfaces/video-info';
import { getColorByPublishDate } from '@features/youtube/utils/get-color-by-publish-date';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '@shared/components/button/button.component';
import { addToFavorites, deleteFromFavorites } from 'app/store/actions/videos.actions';
import { selectFavorites } from 'app/store/selectors/videos.selectors';
import { map } from 'rxjs';

const BORDER_BOTTOM = '4px solid ';

function getDifference(date: string) {
  return Date.now() - new Date(date).valueOf();
}

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    ButtonComponent,
    MatIconModule,
    NgStyle,
    RouterLink,
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent implements OnInit {
  protected borderColor: string | null = null;

  @Input({ required: true }) cardItem!: VideoInfo;

  constructor(private store: Store) {}

  ngOnInit() {
    const difference = getDifference(this.cardItem.snippet.publishedAt);
    this.borderColor = BORDER_BOTTOM + getColorByPublishDate(difference);
  }

  isFavorite(id: string) {
    return this.store.select(selectFavorites).pipe(
      // eslint-disable-next-line @ngrx/avoid-mapping-selectors
      map(
        (favorites) => favorites.some((video) => video.id.videoId === id)
      )
    );
  }

  addToFavorite() {
    if (!this.isFavorite(this.cardItem.id.videoId)) {
      this.store.dispatch(deleteFromFavorites({ id: this.cardItem.id.videoId }));
    } else {
      this.store.dispatch(addToFavorites({ content: this.cardItem }));
    }
  }
}
