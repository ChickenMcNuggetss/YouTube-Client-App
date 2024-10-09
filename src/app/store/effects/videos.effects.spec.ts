import { TestBed } from '@angular/core/testing';
import { YoutubeApiService } from '@features/youtube/services/api/youtube-api.service';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

import { VideosEffects } from './videos.effects';

describe('VideosEffects', () => {
  let actions$: Observable<unknown>;
  let effects: VideosEffects;

  const youtubeApiServiceMock = {
    searchVideos: jest.fn(),
    getVideoInfo: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VideosEffects,
        provideMockStore(),
        provideMockActions(() => actions$),
        { provide: YoutubeApiService, useValue: youtubeApiServiceMock }
      ]
    });

    effects = TestBed.inject(VideosEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
