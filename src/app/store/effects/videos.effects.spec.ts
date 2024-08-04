import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { VideosEffectsEffects } from './videos.effects';

describe('VideosEffectsEffects', () => {
  let actions$: Observable<unknown>;
  let effects: VideosEffectsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VideosEffectsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(VideosEffectsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
