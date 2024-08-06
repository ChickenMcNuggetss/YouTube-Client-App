import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components/button/button.component';
import { Card } from 'app/store/interfaces/card';

@Component({
  selector: 'app-custom-video-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    ButtonComponent,
    MatIconModule,
    NgStyle,
    RouterLink,],
  templateUrl: './custom-video-card.component.html',
  styleUrl: './custom-video-card.component.scss'
})
export class CustomVideoCardComponent {
  @Input({ required: true }) cardItem!: Card;
}
