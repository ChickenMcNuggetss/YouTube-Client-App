import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  protected loginData: { login: string | null; password: string | null } = {
    login: null,
    password: null,
  };
  private readonly _isLoggedIn = signal(false);
  public isLoggedIn = this._isLoggedIn.asReadonly();

  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}

  public submitLoginForm({
    login,
    password,
  }: {
    login: string;
    password: string;
  }) {
    this.loginData = { login, password };
    if (!this.loginData.login) return;
    this.storageService.set('authToken', this.loginData.login);
    this.toggleUserState();
    this.router.navigate(['main']);
  }

  protected toggleUserState() {
    this._isLoggedIn.set(!this.isLoggedIn());
  }

  public logout() {
    this.toggleUserState();
    this.router.navigate(['login']);
    this.storageService.removeData('authToken');
  }
}
