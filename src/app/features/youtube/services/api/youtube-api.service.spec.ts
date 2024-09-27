import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  Snippet, Statistics, VideoInfo, VideoResponse
} from '@core/interfaces/video-info';

import { YoutubeApiService } from './youtube-api.service';

describe('ApiService', () => {
  let service: YoutubeApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()]
    });
    service = TestBed.inject(YoutubeApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should search for videos and call getVideoInfo with video IDs', () => {
    const mockSearchResponse: VideoResponse = {
      kind: '',
      etag: '',
      pageInfo: {
        totalResults: 0,
        resultsPerPage: 0
      },
      items: [
        { id: { videoId: 'video1' }, snippet: {} } as VideoInfo,
        { id: { videoId: 'video2' }, snippet: {} } as VideoInfo,
      ]
    };

    const mockVideoInfoResponse: VideoResponse = {
      kind: '',
      etag: '',
      pageInfo: {
        totalResults: 0,
        resultsPerPage: 0
      },
      items: [
        {
          kind: '',
          etag: '',
          id: { kind: '', videoId: 'video1' },
          snippet: {} as Snippet,
          statistics: {} as Statistics
        },
        {
          kind: '',
          etag: '',
          id: { kind: '', videoId: 'video2' },
          snippet: {} as Snippet,
          statistics: {} as Statistics
        },
      ],
    };

    service.searchVideos('test').subscribe((response) => {
      expect(response).toEqual(mockVideoInfoResponse.items);
    });

    const searchReq = httpMock.expectOne((req) => req.url === '/search');
    expect(searchReq.request.method).toBe('GET');
    expect(searchReq.request.params.get('q')).toBe('test');
    expect(searchReq.request.params.get('maxResults')).toBe('50');

    searchReq.flush(mockSearchResponse);

    const videoReq = httpMock.expectOne((req) => req.url === '/videos');
    expect(videoReq.request.method).toBe('GET');
    expect(videoReq.request.params.get('id')).toBe('video1,video2');
    expect(videoReq.request.params.get('part')).toBe('snippet');

    videoReq.flush(mockVideoInfoResponse);
  });
});
