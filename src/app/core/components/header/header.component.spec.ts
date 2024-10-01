import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AuthService } from '@features/auth/services/auth.service';
import { YoutubeApiService } from '@features/youtube/services/api/youtube-api.service';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { HeaderComponent } from './header.component';
import { Store } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { By } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { searchVideo } from '@store/actions/videos.actions';

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
    searchVideos: jest.fn(() => of()),
    getVideoInfo: jest.fn(() => of()),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideAnimations(),
        provideHttpClientTesting(),
        provideMockStore(),
        { provide: AuthService, useValue: authServiceMock },
        { provide: YoutubeApiService, useValue: youtubeApiServiceMock },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
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

  it('should subscribe on searchFormControl value change', () => {
    const spyOnControl = jest.spyOn(component.searchFormControl.valueChanges, 'subscribe');
    component.ngOnInit();
    expect(spyOnControl).toHaveBeenCalled();
  });


  it('should subscribe on sortFormControl value change', () => {
    const spyOnSortControl = jest.spyOn(component.sortFormControl.valueChanges, 'subscribe');
    component.ngOnInit();
    expect(spyOnSortControl).toHaveBeenCalled();
  });

  it('should dispatch store', fakeAsync(() => {
    const spyOnDispatch = jest.spyOn(store, 'dispatch')
    component.searchFormControl.setValue('angular');
    fixture.detectChanges();
    tick(1000);
    expect(spyOnDispatch).toHaveBeenCalledWith(searchVideo({ searchValue: 'angular' }));
  }));
});
