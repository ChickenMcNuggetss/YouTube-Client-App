import { TestBed } from '@angular/core/testing';
import { StorageService } from '@core/services/storage/storage.service';

import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { Component } from '@angular/core';

describe('LoginService', () => {
  let service: AuthService;

  const storageServiceMock = {
    get: jest.fn(),
    set: jest.fn(),
    removeData: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: StorageService, useValue: storageServiceMock },
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should login successfully', () => {
    service.submitLoginForm({
      login: 'login@login.com',
      password: 'password#$R3',
    });
    expect(service.isLoggedIn()).toBeTruthy();
  });

  it('should toggle user state', () => {
    expect(service.isLoggedIn()).toBeFalsy();
    service.submitLoginForm({
      login: 'login@login.com',
      password: 'password#$R3',
    });
    expect(service.isLoggedIn()).toBeTruthy();
  })
});

// public submitLoginForm({
//   login,
//   password,
// }: {
//   login: string;
//   password: string;
// }) {
//   this.loginData = { login, password };
//   if (!this.loginData.login) return;
//   this.storageService.set('authToken', this.loginData.login);
//   this.toggleUserState();
//   this.router.navigate(['main']);
// }
