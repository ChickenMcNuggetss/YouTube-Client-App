import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SearchService } from '@core/services/search/search.service';
import { FilteringPipe } from '@features/youtube/pipes/filtering.pipe';

import { CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, CardItemComponent, FilteringPipe],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  protected searchService = inject(SearchService);
}
