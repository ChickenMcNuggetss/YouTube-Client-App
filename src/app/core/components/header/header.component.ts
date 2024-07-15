import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchService } from '@core/services/search/search.service';
import { SortingVariant } from '@core/types/sorting-types';
import { LoginService } from '@features/auth/services/login.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonToggleComponent } from '@shared/components/button-toggle/button-toggle.component';
import { SvgLogoComponent } from '@shared/components/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonComponent,
    SvgLogoComponent,
    MatIconModule,
    NgIf,
    MatButtonModule,
    MatChipsModule,
    ButtonToggleComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  protected areFiltersOpened = false;
  searchValue = new FormControl('');
  sortFormControl = new FormControl('');

  constructor(protected searchService: SearchService, protected loginService: LoginService) {}

  toggleFilters() {
    this.areFiltersOpened = !this.areFiltersOpened;
  }

  search() {
    if (this.searchValue.value === null) return;
    this.searchService.searchByTitle(this.searchValue.value);
  }

  sort(sortCriteria: SortingVariant) {
    this.searchService.sortBy(sortCriteria);
  }

  sortValueChange() {
    if (this.sortFormControl.value === null) return;
    this.searchService.setSortValue(this.sortFormControl.value);
  }
}
