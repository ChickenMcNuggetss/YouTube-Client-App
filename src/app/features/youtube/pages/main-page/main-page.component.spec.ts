import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageComponent } from './main-page.component';
import { provideMockStore } from '@ngrx/store/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { VideosService } from '@features/youtube/services/videos/videos.service';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  const videosServiceMock = {
    isSearchActive: jest.fn(),
    setVideosValue: jest.fn(),
    toggleSearchFieldStatus: jest.fn(),
    sortByView: jest.fn(),
    sortByDate: jest.fn(),
    sortBy: jest.fn(),
    setSortValue: jest.fn(),
    getVideo: jest.fn(),
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideMockStore(), { provide: VideosService, useValue: videosServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
