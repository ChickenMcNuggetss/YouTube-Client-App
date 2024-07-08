import { NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SearchService } from '@core/services/search.service';
import { CardItemComponent } from '../card-item/card-item.component';
import { SortPipe } from '@features/youtube/pipes/sort.pipe';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, CardItemComponent, SortPipe],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  protected searchService = inject(SearchService);
}
