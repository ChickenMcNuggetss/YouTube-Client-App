import { TestBed } from '@angular/core/testing';
import { StorageService } from '@core/services/storage/storage.service';

import { AuthService } from './auth.service';

describe('LoginService', () => {
  let service: AuthService;

  const storageServiceMock = {
    get: jest.fn(),
    set: jest.fn(),
    removeData: jest.fn(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule(
      { providers: [{ provide: StorageService, useValue: storageServiceMock }] }
    );
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
