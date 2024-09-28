import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@features/auth/services/auth.service';

import { LoginPageComponent } from './login-page.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { Store } from '@ngrx/store';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('LoginComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let store: MockStore;

  let initialState = {};

  const authServiceMock = {
    isLoggedIn: jest.fn(),
    submitLoginForm: jest.fn(),
    toggleUserState: jest.fn(),
    logout: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
      providers: [provideMockStore({initialState}), provideAnimations(), provideRouter([]), provideHttpClient(), provideHttpClientTesting(), { provide: AuthService, useValue: authServiceMock }, { provide: VideosService, useValue: authServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    store = TestBed.inject(MockStore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
