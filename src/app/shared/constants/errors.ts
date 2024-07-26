export const ERRORS = {
  required: (controlName: string) => `Please enter a ${controlName}`,
  email: 'The login email is invalid',
  minlength: (controlName: string) => `The ${controlName} is too short`,
  dateValidity: 'The date is invalid',
  passwordValidity: "Your password isn't strong enough. It should contains uppercase, lowercase letters, numbers, has least 8 characters long, include one special character"
};
