import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@features/auth/services/auth.service';
import { YoutubeApiService } from '@features/youtube/services/api/youtube-api.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: AuthService, useValue: authServiceMock },
        { provide: YoutubeApiService, useValue: youtubeApiServiceMock }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
