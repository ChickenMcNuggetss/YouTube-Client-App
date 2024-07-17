import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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
  protected form = new FormGroup({
    login: new FormControl(null),
    password: new FormControl(null),
  });

  constructor(private loginService: LoginService) {}

  protected submitLoginForm() {
    this.loginService.submitLoginForm({
      login: this.form.value.login ?? '',
      password: this.form.value.password ?? '',
    });
  }
}
