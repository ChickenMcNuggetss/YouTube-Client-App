import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { provideMockStore } from '@ngrx/store/testing';

import { CardListComponent } from './card-list.component';

describe('CardListComponent', () => {
  let component: CardListComponent;
  let fixture: ComponentFixture<CardListComponent>;

  const videosServiceMock = {
    isSearchActive: jest.fn(),
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
      imports: [CardListComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([]), provideMockStore(), { provide: VideosService, useValue: videosServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
