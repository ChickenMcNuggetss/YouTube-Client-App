import { NgIf } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from '@core/services/api/api.service';
import { SearchService } from '@core/services/search/search.service';
import { SortingVariant } from '@core/types/sorting-types';
import { AuthService } from '@features/auth/services/auth.service';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonToggleComponent } from '@shared/components/button-toggle/button-toggle.component';
import { SvgLogoComponent } from '@shared/components/logo/logo.component';
import {
  debounceTime, filter, Subscription,
  switchMap,
  tap
} from 'rxjs';

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
  private searchFormSubscription: Subscription = this.searchFormControl.valueChanges.pipe(
    debounceTime(1000),
    filter((value) => typeof value === 'string' && value.length >= 3),
    switchMap((value) => this.apiService.searchVideos(value ?? '')),
    tap((result) => {
      this.searchService.videosList = result.items;
      this.searchService.sortedResults = result.items;
    })
  )
    .subscribe();

  constructor(
    protected searchService: SearchService,
    protected authService: AuthService,
    private apiService: ApiService
  ) {}

  ngOnDestroy() {
    this.sortFormControlSubscription.unsubscribe();
    this.searchFormSubscription.unsubscribe();
  }

  protected toggleFilters() {
    this.areFiltersOpened = !this.areFiltersOpened;
  }

  protected sort(sortCriteria: SortingVariant) {
    this.searchService.sortBy(sortCriteria);
  }
}
