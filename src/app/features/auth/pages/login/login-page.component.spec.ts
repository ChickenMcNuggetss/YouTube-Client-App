import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '@features/auth/services/auth.service';

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
      providers: [{ provide: AuthService, useValue: authServiceMock },]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
