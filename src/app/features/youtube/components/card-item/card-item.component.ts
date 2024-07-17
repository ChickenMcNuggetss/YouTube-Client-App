import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { ResponseItem } from '@core/interfaces/response';
import { getColorByPublishDate } from '@features/youtube/utils/get-color-by-publish-date';
import { ButtonComponent } from '@shared/components/button/button.component';

const BORDER_BOTTOM = '4px solid ';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    ButtonComponent,
    MatIconModule,
    NgStyle,
    RouterLink
  ],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent implements OnInit {
  protected borderColor: string | null = null;

  @Input({ required: true }) cardItem!: ResponseItem;

  ngOnInit() {
    const difference = Date.now() - new Date(this.cardItem.snippet.publishedAt).valueOf();
    this.borderColor = BORDER_BOTTOM + getColorByPublishDate(difference);
  }
}
