import { Action } from '@ngrx/store';

import { videosReducer, YoutubeState } from './videos.reducer';

describe('Admin Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action<string>;
      const initialState = {} as YoutubeState;

      const result = videosReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
