import { createReducer, on } from '@ngrx/store';

import { addCard, deleteCard, getYoutubeVideo, searchVideo } from '../actions/videos.actions';
import { State } from '../app.state';

export const initialState: State = {
  youtubeVideos: [],
  customVideos: [],
  currentPage: 1,
};

export const videosReducer = createReducer(
  initialState,
  on(addCard, (state, { content }): State => ({
    ...state,
    customVideos: [...state.customVideos, content]
  })),
  on(deleteCard, (state, { id }): State => ({
    ...state,
    customVideos: state.customVideos.filter((video) => (video.id as unknown as string) !== id)
  })),
  on(searchVideo, (state, { searchValue }): State => ({
    ...state,
    customVideos: state.customVideos.filter((video) => video.snippet.title.includes(searchValue))
  })),
  on(getYoutubeVideo, (state, { content }): State => ({
    ...state,
    youtubeVideos: content.items
  })),
);
