import { AbstractControl } from '@angular/forms';

export function defineControlErrorText(
  control: AbstractControl<string | null, string | null> | null,
  controlName: string
): string | null {
  if (!control) return null;
  if (control.errors === null) return null;
  const error = Object.keys(control.errors)[0];
  if (error === 'required') {
    return `Please enter a ${controlName}`;
  }
  if (error === 'email') {
    return 'The login email is invalid';
  }
  if (error === 'minlength') {
    return `The ${controlName} is too short`;
  }
  if (error === 'maxlength') {
    return `The ${controlName} is too long`;
  }
  if (error === 'dateValidity') {
    return 'The date is invalid';
  }
  if (error === 'passwordValidity') {
    return "Your password isn't strong enough. It should contains uppercase, lowercase letters, numbers, has least 8 characters long, include one special character";
  }
  return null;
}
