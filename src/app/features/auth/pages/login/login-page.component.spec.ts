import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { provideMockStore } from '@ngrx/store/testing';

import { LoginPageComponent } from './login-page.component';

describe('LoginComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  const authServiceMock = {
    isLoggedIn: jest.fn(),
    submitLoginForm: jest.fn(),
    toggleUserState: jest.fn(),
    logout: jest.fn(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
      providers: [provideMockStore(), provideAnimations(), provideRouter([]), provideHttpClient(), provideHttpClientTesting(), { provide: AuthService, useValue: authServiceMock }, { provide: VideosService, useValue: authServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
