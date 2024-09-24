import { computed, inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';

export const authGuard: CanMatchFn = () => {
  const router = inject(Router);
  return computed(() => {
    if (!inject(AuthService).isLoggedIn()) {
      router.navigateByUrl('login');
      return false;
    }
    return true;
  })();
};
