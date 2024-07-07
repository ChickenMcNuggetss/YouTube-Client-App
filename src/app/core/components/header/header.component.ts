import { Component, inject } from '@angular/core';
import { ButtonComponent } from '@shared/components/button/button.component';
import { SvgLogo } from '@assets/logo/logo.component';
import { InputComponent } from '@shared/components/input/input.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { NgIf } from '@angular/common';
import { SearchService } from 'app/core/services/search.service';
import { ButtonToggleComponent } from '@shared/components/button-toggle/button-toggle.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    SvgLogo,
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
  isFiltersOpened = false;
  searchService = inject(SearchService);
  searchValue: string = '';

  onSearchValueChange(value: string) {
    this.searchValue = value.trim();
  }

  toggleFilters() {
    this.isFiltersOpened = !this.isFiltersOpened;
  }

  search() {
    if (this.searchValue.length === 0) return
    this.searchService.searchByTitle(this.searchValue);
  }

  sort(sortCriteria: string) {
    this.searchService.sortBy(sortCriteria)
  }
}
