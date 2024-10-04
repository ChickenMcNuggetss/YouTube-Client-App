import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { provideMockStore } from '@ngrx/store/testing';

import { FavoritesPageComponent } from './favorites-page.component';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

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
      imports: [FavoritesPageComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideMockStore(), { provide: VideosService, useValue: videosServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
