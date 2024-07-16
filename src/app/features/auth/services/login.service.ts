import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '@core/services/storage/storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginData: { login: string; password: string } = { login: '', password: '' };
  isLoggedIn = false;

  constructor(private router: Router, private storageService: StorageService) {}

  submitLoginForm({ login, password }: { login: string; password: string }) {
    this.loginData = { login, password };
    this.storageService.set('authToken', this.loginData.login);
    this.toggleUserState();
    this.router.navigate(['main']);
  }

  toggleUserState() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  logout() {
    this.toggleUserState();
    this.router.navigate(['login']);
    this.storageService.removeData('authToken');
  }
}
