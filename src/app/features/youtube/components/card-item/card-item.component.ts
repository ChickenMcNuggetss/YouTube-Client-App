import { NgStyle } from '@angular/common';
import {
  Component, DestroyRef, Input, OnInit
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { VideoInfo } from '@core/interfaces/video-info';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { getColorByPublishDate } from '@features/youtube/utils/get-color-by-publish-date';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '@shared/components/button/button.component';
import { addToFavorites, deleteFromFavorites } from '@store/actions/videos.actions';
import { selectFavorites } from '@store/selectors/videos.selectors';
import { tap } from 'rxjs';

const BORDER_BOTTOM = '4px solid ';

function getDifference(date: string) {
  return Date.now() - new Date(date).valueOf();
}

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ButtonComponent, MatIconModule, NgStyle, RouterLink],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent implements OnInit {
  protected borderColor: string | null = null;
  public isFavoriteVideo = false;

  @Input({ required: true }) cardItem!: VideoInfo;

  constructor(
    private store: Store,
    private videosService: VideosService,
    private destroy: DestroyRef
  ) {}

  ngOnInit() {
    const difference = getDifference(this.cardItem.snippet.publishedAt);
    this.borderColor = BORDER_BOTTOM + getColorByPublishDate(difference);

    this.store
      .select(selectFavorites)
      .pipe(
        tap((videos) => {
          this.isFavoriteVideo = !!videos.find((video) => video.id === this.cardItem.id);
        }),
        takeUntilDestroyed(this.destroy)
      )
      .subscribe();
  }

  setVideosStatus() {
    this.videosService.toggleSearchFieldStatus();
  }

  addToFavorite() {
    if (this.isFavoriteVideo) {
      this.isFavoriteVideo = !this.isFavoriteVideo;
      this.store.dispatch(deleteFromFavorites({ id: this.cardItem.id.videoId }));
    } else {
      this.isFavoriteVideo = !this.isFavoriteVideo;
      this.store.dispatch(addToFavorites({ content: this.cardItem }));
    }
  }
}
