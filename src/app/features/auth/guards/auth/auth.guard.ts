import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '@features/auth/services/auth.service';
import { tap } from 'rxjs';

export const authGuard: CanMatchFn = () => {
  const router = inject(Router);
  return inject(AuthService).isLoggedIn$.pipe(tap(
    (value) => {
      if (!value) {
        router.navigateByUrl('login');
      }
    },
  ));
};
