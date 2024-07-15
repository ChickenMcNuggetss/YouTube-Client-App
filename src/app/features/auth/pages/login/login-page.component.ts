import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '@features/auth/services/login.service';
import { ButtonComponent } from '@shared/components/button/button.component';

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
  login = new FormControl('');
  password = new FormControl('');

  constructor(private loginService: LoginService) {}

  submitLoginForm() {
    this.loginService.submitLoginForm({
      login: this.login.value ?? '',
      password: this.password.value ?? '',
    });
  }
}
