import { VideoInfo, VideoResponse } from '@core/interfaces/video-info';
import { createAction, props } from '@ngrx/store';

import { YoutubeActions } from '../enums/youtube-actions';
import { Card } from '../interfaces/card';

export const addCard = createAction(
  YoutubeActions.AddCard,
  props<{ content: Card }>()
);

export const deleteCard = createAction(
  YoutubeActions.DeleteCard,
  props<{ id: string }>()
);

export const videosLoaded = createAction(
  YoutubeActions.VideosLoaded,
  props<{ content: VideoResponse }>()
);

export const videosLoadingError = createAction(
  YoutubeActions.VideosLoadingError,
  props<{ loadingError: Error }>()
);

export const searchVideo = createAction(
  YoutubeActions.SearchVideo,
  props<{ searchValue: string }>()
);

export const addToFavorites = createAction(
  YoutubeActions.AddToFavorites,
  props<{ content: VideoInfo }>()
)

export const deleteFromFavorites = createAction(
  YoutubeActions.DeleteFromFavorites,
  props<{ id: string }>()
)
