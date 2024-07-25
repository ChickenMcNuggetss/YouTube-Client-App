import { NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SearchService } from '@core/services/search/search.service';
import { SortingVariant } from '@core/types/sorting-types';
import { AuthService } from '@features/auth/services/auth.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonToggleComponent } from '@shared/components/button-toggle/button-toggle.component';
import { SvgLogoComponent } from '@shared/components/logo/logo.component';
import { Subscription } from 'rxjs';

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
export class HeaderComponent implements OnDestroy {
  protected areFiltersOpened = false;
  protected searchFormControl = new FormControl('');
  protected sortFormControl = new FormControl('');
  private sortFormControlSubscription: Subscription = this.sortFormControl.valueChanges.subscribe(
    (value) => {
      this.searchService.setSortValue(value ?? '');
    }
  );

  constructor(
    protected searchService: SearchService,
    protected authService: AuthService
  ) {}

  ngOnDestroy() {
    this.sortFormControlSubscription.unsubscribe();
  }

  protected toggleFilters() {
    this.areFiltersOpened = !this.areFiltersOpened;
  }

  protected search() {
    if (!this.searchFormControl.value) return;
    this.searchService.searchByTitle(this.searchFormControl.value);
  }

  protected sort(sortCriteria: SortingVariant) {
    this.searchService.sortBy(sortCriteria);
  }
}
