import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@features/auth/services/auth.service';
import { YoutubeApiService } from '@features/youtube/services/api/youtube-api.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { Store } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let store: MockStore;

  const authServiceMock = {
    isLoggedIn: jest.fn(),
    submitLoginForm: jest.fn(),
    toggleUserState: jest.fn(),
    logout: jest.fn(),
  };

  const youtubeApiServiceMock = {
    searchVideos: jest.fn(),
    getVideoInfo: jest.fn(),
  };

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideAnimations(),
        provideHttpClientTesting(),
        provideMockStore({initialState}),
        { provide: AuthService, useValue: authServiceMock },
        { provide: YoutubeApiService, useValue: youtubeApiServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle filters state', () => {
    expect(fixture.debugElement.query(By.css('.header-filters'))).toBeFalsy();
    expect(component.areFiltersOpened).toBe(false);
    component.toggleFilters();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.header-filters'))).toBeTruthy();
    expect(component.areFiltersOpened).toBe(true);
  });
});
