import { NgFor } from '@angular/common';
import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { ResponseItem } from '@core/interfaces/response';
import { SearchService } from '@core/services/search.service';
import { CardItemComponent } from '../card-item/card-item.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [NgFor, CardItemComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  searchService = inject(SearchService);
  listSearch: ResponseItem[] = [];

  сonstructor() {
    this.listSearch = []
    this.listSearch = this.searchService.sortedResults;
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   this.searchService.sortedResults;
  // }
}
