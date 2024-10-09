import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { VideosService } from './videos.service';

describe('SearchService', () => {
  let service: VideosService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      { providers: [provideHttpClient(), provideHttpClientTesting(), provideMockStore()], }
    );
    service = TestBed.inject(VideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle isSearchActive state', () => {
    expect(service.isSearchActive()).toBe(false);
    service.toggleSearchFieldStatus();
    expect(service.isSearchActive()).toBe(true);
  });
});
