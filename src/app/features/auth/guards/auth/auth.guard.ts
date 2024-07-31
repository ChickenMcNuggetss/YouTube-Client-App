import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';

export const authGuard: CanMatchFn = () => {
  const loginStatus = inject(AuthService).getUserState();
  const router = inject(Router);

  if (loginStatus) {
    return true;
  }
  router.navigateByUrl('login');
  return false;
};
