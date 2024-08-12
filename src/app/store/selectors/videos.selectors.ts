import { createFeatureSelector, createSelector } from '@ngrx/store';

import { YoutubeState } from '../reducers/videos.reducer';
import { MixedList } from '@features/youtube/components/card-list/card-list.component';

const selectYoutubeState = createFeatureSelector<YoutubeState>('youtube');

const selectCustomVideos = createSelector(selectYoutubeState, (youtube) => youtube.customVideos);

const selectYoutubeVideos = createSelector(selectYoutubeState, (youtube) => youtube.youtubeVideos);

export const selectVideos = createSelector(
  selectCustomVideos,
  selectYoutubeVideos,
  (custom, youtubeVideos) => [...custom, ...youtubeVideos] as MixedList[]
);

export const selectFavorites = createSelector(selectYoutubeState, (youtube) => youtube.favoritesList);
