import { videosReducer, YoutubeState } from './videos.reducer';

describe('Admin Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const initialState = {} as YoutubeState;

      const result = videosReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
