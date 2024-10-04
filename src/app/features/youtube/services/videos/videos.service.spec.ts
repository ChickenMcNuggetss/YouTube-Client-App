import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ThumbnailVariant, VideoInfo } from '@core/interfaces/video-info';

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

  it('should get videos', () => {
    expect(service.videos$()).toBeTruthy();
  });

  it('should toggle isSearchActive state', () => {
    expect(service.isSearchActive()).toBe(false);
    service.toggleSearchFieldStatus();
    expect(service.isSearchActive()).toBe(true);
  });

  it('should be created', () => {
    const videosMockData: VideoInfo[] = [{
      kind: 'string',
      etag: 'string',
      id: {
        kind: 'string',
        videoId: 'string',
      },
      snippet: {
        publishedAt: '2023-01-01',
        channelId: '',
        title: '',
        description: '',
        thumbnails: {
          default: {} as ThumbnailVariant,
          medium: {} as ThumbnailVariant,
          high: {} as ThumbnailVariant,
          standard: {} as ThumbnailVariant,
          maxres: {} as ThumbnailVariant,
        },
        channelTitle: '',
        tags: [''],
        categoryId: '',
        defaultLanguage: '',
        liveBroadcastContent: '',
        localized: {
          title: '',
          description: '',
        },
        defaultAudioLanguage: '',
      },
      statistics: {
        viewCount: '2000',
        likeCount: '',
        dislikeCount: '',
        favoriteCount: '',
        commentCount: '',
      },
    }, {
      kind: 'string',
      etag: 'string',
      id: {
        kind: 'string',
        videoId: 'string',
      },
      snippet: {
        publishedAt: '2022-02-01',
        channelId: '',
        title: '',
        description: '',
        thumbnails: {
          default: {} as ThumbnailVariant,
          medium: {} as ThumbnailVariant,
          high: {} as ThumbnailVariant,
          standard: {} as ThumbnailVariant,
          maxres: {} as ThumbnailVariant,
        },
        channelTitle: '',
        tags: [''],
        categoryId: '',
        defaultLanguage: '',
        liveBroadcastContent: '',
        localized: {
          title: '',
          description: '',
        },
        defaultAudioLanguage: '',
      },
      statistics: {
        viewCount: '100',
        likeCount: '',
        dislikeCount: '',
        favoriteCount: '',
        commentCount: '',
      },
    }];
    service.setVideosValue(videosMockData);
    service.sortBy('date asc');
    expect(service.videos$()[0].snippet.publishedAt).toBe('2022-02-01');
  });
});
