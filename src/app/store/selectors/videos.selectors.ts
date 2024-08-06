import { createFeatureSelector, createSelector } from '@ngrx/store';

import { YoutubeState } from '../reducers/videos.reducer';

const selectYoutubeState = createFeatureSelector<YoutubeState>('youtube');

const selectCustomVideos = createSelector(selectYoutubeState, (youtube) => youtube.customVideos);

const selectYoutubeVideos = createSelector(selectYoutubeState, (youtube) => youtube.youtubeVideos);

export const selectVideos = createSelector(
  selectCustomVideos,
  selectYoutubeVideos,
  (custom, youtubeVideos) => [...custom, ...youtubeVideos]
);
