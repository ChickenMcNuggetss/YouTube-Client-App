import { VideoInfo, VideoResponse } from '@core/interfaces/video-info';
import { createAction, props } from '@ngrx/store';

export const addCard = createAction(
  '[Admin Page] Creation Card',
  props<{ content: VideoInfo }>()
);

export const deleteCard = createAction(
  '[Admin Page] Deletion Card',
  props<{ id: string }>()
);

export const getYoutubeVideo = createAction(
  '[Admin Page] Get Youtube video cards',
  props<{ content: VideoResponse }>()
);

export const searchVideo = createAction(
  '[Main page] Search videos',
  props<{ searchValue: string }>()
);

export const getCurrentPage = createAction(
  '[Main Page] Get current page',
  props<{ currentPage: number }>()
);
