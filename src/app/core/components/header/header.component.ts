import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { SortingVariant } from '@core/types/sorting-types';
import { AuthService } from '@features/auth/services/auth.service';
import { YoutubeApiService } from '@features/youtube/services/api/youtube-api.service';
import { VideosService } from '@features/youtube/services/videos/videos.service';
import { Store } from '@ngrx/store';
import { ButtonComponent } from '@shared/components/button/button.component';
import { ButtonToggleComponent } from '@shared/components/button-toggle/button-toggle.component';
import { SvgLogoComponent } from '@shared/components/logo/logo.component';
import {
  debounceTime, filter, Subscription,
  switchMap
} from 'rxjs';
import { searchVideo } from 'app/store/actions/videos.actions';

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
    AsyncPipe
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  protected areFiltersOpened = false;
  protected searchFormControl = new FormControl('');
  protected sortFormControl = new FormControl('');
  private subscription: Subscription = new Subscription();

  constructor(
    protected videosService: VideosService,
    protected authService: AuthService,
    private apiService: YoutubeApiService,
    private store: Store
  ) {}

  ngOnInit() {
    this.subscription.add(this.sortFormControl.valueChanges.subscribe(
      (value) => {
        this.videosService.setSortValue(value ?? '');
      }
    ));

    this.subscription.add(this.searchFormControl.valueChanges.pipe(
      debounceTime(1000),
      filter((value) => typeof value === 'string' && value.length >= 3),
      switchMap((value) => this.apiService.searchVideos(value ?? ''); this.store.dispatch(searchVideo(result.items))),
    )
      .subscribe(
        (result) => {
          this.videosService.setVideosValue(result.items);
        }
      ));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  protected toggleFilters() {
    this.areFiltersOpened = !this.areFiltersOpened;
  }

  protected sort(sortCriteria: SortingVariant) {
    this.videosService.sortBy(sortCriteria);
  }
}
