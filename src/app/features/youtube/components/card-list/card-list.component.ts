import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FilteringPipe } from '@features/youtube/pipes/filtering.pipe';
import { VideosService } from '@features/youtube/services/videos/videos.service';

import { CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, CardItemComponent, FilteringPipe, AsyncPipe],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  protected searchService = inject(VideosService);
}
