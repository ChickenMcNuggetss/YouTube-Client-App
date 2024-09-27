import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { VideosService } from './videos.service';

describe('SearchService', () => {
  let service: VideosService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      { providers: [provideHttpClient(), provideHttpClientTesting()], }
    );
    service = TestBed.inject(VideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
