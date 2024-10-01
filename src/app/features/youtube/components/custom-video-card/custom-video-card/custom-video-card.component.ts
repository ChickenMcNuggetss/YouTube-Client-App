import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '@shared/components/button/button.component';
import { deleteCard } from '@store/actions/videos.actions';
import { Card } from '@store/interfaces/card';

@Component({
  selector: 'app-custom-video-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    ButtonComponent,
    MatIconModule,
    NgStyle,
    RouterLink,
    MatIcon],
  templateUrl: './custom-video-card.component.html',
  styleUrl: './custom-video-card.component.scss'
})
export class CustomVideoCardComponent {
  @Input({ required: true }) customCardItem!: Card;

  constructor(private store: Store) {}

  deleteCustomCard(id: string) {
    this.store.dispatch(deleteCard({ id }));
  }
}
