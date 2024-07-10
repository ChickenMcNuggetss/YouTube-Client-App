import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonToggleComponent } from '@shared/components/button-toggle/button-toggle.component';
import { InputComponent } from '@shared/components/input/input.component';
import { SvgLogoComponent } from '@shared/components/logo/logo.component';
import { SearchService } from 'app/core/services/search.service';
import { SortingVariant } from '@core/types/sorting-types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    SvgLogoComponent,
    InputComponent,
    MatIconModule,
    NgIf,
    MatButtonModule,
    MatChipsModule,
    ButtonToggleComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  areFiltersOpened = false;
  protected searchService = inject(SearchService);
  searchValue: string = '';

  onSearchValueChange(value: string) {
    this.searchValue = value.trim();
  }

  toggleFilters() {
    this.areFiltersOpened = !this.areFiltersOpened;
  }

  search() {
    if (this.searchValue.length === 0) return;
    this.searchService.searchByTitle(this.searchValue);
  }

  sort(sortCriteria: SortingVariant) {
    this.searchService.sortBy(sortCriteria);
  }

  sortValueChange(value: string) {
    this.searchService.setSortValue(value);
  }
}
