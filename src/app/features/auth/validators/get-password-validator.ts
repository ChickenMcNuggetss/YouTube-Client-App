import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function getPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isPasswordValid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]\\|`~])(?!.*\s).{8,}$/.test(
      control.value,
    );
    return !isPasswordValid ? { passwordValidity: true } : null;
  };
}
