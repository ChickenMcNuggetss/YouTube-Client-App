import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginData: { login: string; password: string } = { login: '', password: '' };
  isLoggedIn = false;

  constructor(private router: Router) {}

  submitLoginForm({ login, password }: { login: string; password: string }) {
    this.loginData = { login, password };
    localStorage.setItem('authToken', this.loginData.login);
    this.toggleUserState();
    this.router.navigate(['main']);
  }

  toggleUserState() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  logout() {
    this.toggleUserState();
    this.router.navigate(['login']);
    localStorage.clear();
  }
}
