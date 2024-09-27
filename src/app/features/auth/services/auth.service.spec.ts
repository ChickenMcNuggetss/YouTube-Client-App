import { TestBed } from '@angular/core/testing';
import { StorageService } from '@core/services/storage/storage.service';

import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

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
});
