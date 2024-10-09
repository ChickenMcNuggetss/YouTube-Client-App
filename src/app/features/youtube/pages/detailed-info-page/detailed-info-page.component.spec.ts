import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { Statistics, ThumbnailVariant } from '@core/interfaces/video-info';
import { provideMockStore } from '@ngrx/store/testing';

import { DetailedInfoPageComponent } from './detailed-info-page.component';

describe('DetailedInfoPageComponent', () => {
  let component: DetailedInfoPageComponent;
  let fixture: ComponentFixture<DetailedInfoPageComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedInfoPageComponent],
      providers: [provideRouter([]), provideHttpClient(), provideHttpClientTesting(), provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailedInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have videos info', () => {
    component.videoInfo = cardItemMock.snippet;
    component.statistics = cardItemMock.statistics;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.detailed-info-container'))).toBeTruthy();
  });
});
