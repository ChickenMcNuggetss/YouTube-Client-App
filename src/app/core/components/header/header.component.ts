import { Component } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { SvgLogo } from '@assets/logo/logo.component';
import { InputComponent } from '@shared/components/input/input.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, SvgLogo, InputComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
