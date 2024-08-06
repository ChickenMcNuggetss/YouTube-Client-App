/* eslint-disable @ngrx/prefer-effect-callback-in-block-statement */
import { Injectable } from '@angular/core';
import { YoutubeApiService } from '@features/youtube/services/api/youtube-api.service';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError, exhaustMap, map, of
} from 'rxjs';

import { videosLoaded, videosLoadingError } from '../actions/videos.actions';
import { YoutubeActions } from '../enums/youtube-actions';

@Injectable()
export class VideosEffects {
  searchVideos$ = createEffect(() => this.actions$.pipe(
    ofType(YoutubeActions.SearchVideo),
    exhaustMap((action: { searchValue: string, type: string }) => {
      console.log('Effect received search value:', action.searchValue);
      return this.youtubeApiService.searchVideos(action.searchValue);
    }),
    map((videos) => {
      this.videosService.setVideosValue(videos.items);
      return videosLoaded(({ content: videos }));
    }),
    catchError((loadingError) => of(videosLoadingError({ loadingError })))
  ));

  constructor(
    private actions$: Actions,
    private videosService: VideosService,
    private youtubeApiService: YoutubeApiService
  ) {}
}
