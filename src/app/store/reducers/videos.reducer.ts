import { VideoInfo } from '@core/interfaces/video-info';
import { createReducer, on } from '@ngrx/store';

import {
  addCard, deleteCard, searchVideo, videosLoaded,
  videosLoadingError
} from '../actions/videos.actions';
import { Card } from '../interfaces/card';

export interface YoutubeState {
  youtubeVideos: VideoInfo[],
  customVideos: Card[],
  error: Error | null,
  valueSearch: string
}

const initialState: YoutubeState = {
  youtubeVideos: [],
  customVideos: [{
    id: 'hhhh',
    creationDate: '2022-07-19T17:06:22Z',
    description: 'aaaa',
    imageLink: 'string',
    tags: ['angular'],
    title: 'angular',
    videoLink: 'angular',
  }],
  error: null,
  valueSearch: ''
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
  }))
);
