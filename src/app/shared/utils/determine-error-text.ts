import { AbstractControl } from '@angular/forms';

const errors = {
  required: (controlName: string) => `Please enter a ${controlName}`,
  email: 'The login email is invalid',
  minlength: (controlName: string) => `The ${controlName} is too short`,
  dateValidity: 'The date is invalid',
  passwordValidity: "Your password isn't strong enough. It should contains uppercase, lowercase letters, numbers, has least 8 characters long, include one special character"
};

export function determineControlErrorText(
  control: AbstractControl<string | null, string | null> | null,
  controlName: string,
): string | null {
  if (!control) return null;
  if (control.errors === null) return null;
  const error = Object.keys(control.errors)[0];
  const receivedError = errors[error as keyof typeof errors];
  if (typeof receivedError === 'function') {
    return receivedError(controlName);
  }
  return receivedError;
}
