import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]\\|`~])(?!.*\s).{8,}$/.test(control.value);
    return !passwordValid ? { passwordValidity: true } : null;
  };
}
