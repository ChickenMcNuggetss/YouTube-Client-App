import { Injectable } from '@angular/core';
import { YoutubeApiService } from '@features/youtube/services/api/youtube-api.service';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs';

@Injectable()
export class VideosEffectsEffects {
  searchVideos$ = createEffect(() => this.actions$.pipe(
    ofType('[Main page] Search videos'),
    exhaustMap((value) => this.youtubeApiService.searchVideos(value))
  ));

  constructor(private actions$: Actions, private videosService: VideosService, private youtubeApiService: YoutubeApiService) {}
}
