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
export class CardListComponent implements OnChanges {
  searchService = inject(SearchService);
  listSearch: ResponseItem[] = this.searchService.sortedResults;

  сonstructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if (changes['sortedResults']) {
      this.listSearch = changes['sortedResults'].currentValue;
    }
  }
}
