import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function getDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const dateValidity = new Date(control.value).getTime() - new Date(Date.now()).getTime() < 0;
    return !dateValidity ? { dateValidity: true } : null;
  };
}
