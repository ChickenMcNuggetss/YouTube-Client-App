import { AbstractControl } from '@angular/forms';
import { ERRORS } from '@shared/constants/errors';

export function determineControlErrorText(
  control: AbstractControl<string | null, string | null> | null,
  controlName: string,
): string | null {
  if (!control) return null;
  if (control.errors === null) return null;
  const error = Object.keys(control.errors)[0];
  if (error in ERRORS) {
    const receivedError = ERRORS[error as keyof typeof ERRORS];
    if (typeof receivedError === 'function') {
      return receivedError(controlName);
    }
    return receivedError;
  }

  return null;
}
