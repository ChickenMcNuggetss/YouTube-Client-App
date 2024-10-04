import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { Statistics, ThumbnailVariant } from '@core/interfaces/video-info';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { provideMockStore } from '@ngrx/store/testing';

import { CardItemComponent } from './card-item.component';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;

  const cardItemMock = {
    kind: 'string',
    etag: 'string',
    id: {
      kind: 'string',
      videoId: 'string',
    },
    snippet: {
      publishedAt: '',
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
    statistics: {} as Statistics,
  };

  const videosServiceMock = {
    setVideosValue: jest.fn(),
    toggleSearchFieldStatus: jest.fn(),
    sortByView: jest.fn(),
    sortByDate: jest.fn(),
    sortBy: jest.fn(),
    setSortValue: jest.fn(),
    getVideo: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardItemComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), provideMockStore(), { provide: VideosService, useValue: videosServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;
    component.cardItem = cardItemMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
