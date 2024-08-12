import { VideoInfo } from '@core/interfaces/video-info';
import { createReducer, on } from '@ngrx/store';

import {
  addCard, addToFavorites, deleteCard, deleteFromFavorites, searchVideo, videosLoaded,
  videosLoadingError
} from '../actions/videos.actions';
import { Card } from '../interfaces/card';

export interface YoutubeState {
  youtubeVideos: VideoInfo[],
  customVideos: Card[],
  error: Error | null,
  valueSearch: string,
  favoritesList: VideoInfo[]
}

const initialState: YoutubeState = {
  youtubeVideos: [],
  customVideos: [],
  error: null,
  valueSearch: '',
  favoritesList: []
};

export const videosReducer = createReducer(
  initialState,
  on(addCard, (state, { content }): YoutubeState => ({
    ...state,
    customVideos: [...state.customVideos, content]
  })),
  on(deleteCard, (state, { id }): YoutubeState => ({
    ...state,
    customVideos: state.customVideos.filter((video) => video.id !== id)
  })),
  on(searchVideo, (state, { searchValue }): YoutubeState => ({
    ...state,
    valueSearch: searchValue
  })),
  on(videosLoaded, (state, { content }): YoutubeState => ({
    ...state,
    youtubeVideos: content.items
  })),
  on(videosLoadingError, (state, { loadingError }): YoutubeState => ({
    ...state,
    error: loadingError
  })),
  on(addToFavorites, (state, { content }): YoutubeState => ({
    ...state,
    favoritesList: [...state.favoritesList, content]
  })),
  on(deleteFromFavorites, (state, { id }): YoutubeState => ({
    ...state,
    favoritesList: state.favoritesList.filter((video) => video.id.videoId !== id)
  }))
);
