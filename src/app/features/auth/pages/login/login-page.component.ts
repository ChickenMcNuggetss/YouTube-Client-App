import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '@features/auth/services/auth.service';
import { getPasswordValidator } from '@features/auth/validators/get-password-validator';
import { ButtonComponent } from '@shared/components/button/button.component';
import { determineControlErrorText } from '@shared/utils/determine-error-text';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    ButtonComponent,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  protected form = new FormGroup({
    login: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, getPasswordValidator()]),
  });

  constructor(private authService: AuthService) {}

  protected submitLoginForm() {
    if (this.form.invalid) return;
    this.authService.submitLoginForm({
      login: this.form.value.login ?? '',
      password: this.form.value.password ?? '',
    });
  }

  get login() {
    return this.form.get('login');
  }

  get password() {
    return this.form.get('password');
  }

  protected getErrorText(
    control: AbstractControl<string | null, string | null> | null,
    controlName: string,
  ) {
    return determineControlErrorText(control, controlName);
  }
}
