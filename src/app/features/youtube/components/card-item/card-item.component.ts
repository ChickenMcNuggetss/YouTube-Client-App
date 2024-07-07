import { Component, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ResponseItem } from '@core/interfaces/response';
import { ButtonComponent } from '@shared/components/button/button.component';
import { MatIconModule } from '@angular/material/icon';
import { chooseColor } from '@features/youtube/utils/choose-color';
import { NgStyle } from '@angular/common';

const BORDER_BOTTOM = '4px solid ';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, ButtonComponent, MatIconModule, NgStyle],
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss',
})
export class CardItemComponent implements OnInit{
  @Input({required: true}) result!: ResponseItem;

  borderColor: string = ''

  ngOnInit() {
    const difference = Date.now() - new Date(this.result.snippet.publishedAt).valueOf()
    this.borderColor = BORDER_BOTTOM + chooseColor(difference);
  }
}
