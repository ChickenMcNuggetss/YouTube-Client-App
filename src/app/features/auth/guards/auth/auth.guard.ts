import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { LoginService } from '@features/auth/services/login.service';

export const authGuard: CanMatchFn = () => {
  const loginStatus = inject(LoginService).isLoggedIn;
  const router = inject(Router);

  if (loginStatus) {
    return true;
  }
  router.navigateByUrl('login');
  return false;
};
