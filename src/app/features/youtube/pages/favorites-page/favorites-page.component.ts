import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { CardItemComponent } from '@features/youtube/components/card-item/card-item.component';
import { Store } from '@ngrx/store';
import { selectFavorites } from 'app/store/selectors/videos.selectors';

@Component({
  selector: 'app-favorites-page',
  standalone: true,
  imports: [AsyncPipe, CardItemComponent],
  templateUrl: './favorites-page.component.html',
  styleUrl: './favorites-page.component.scss'
})
export class FavoritesPageComponent {
  protected favoritesVideos$ = this.store.select(selectFavorites);

  constructor(private store: Store) {
    this.favoritesVideos$.subscribe((videos) => console.log(videos));
  }
}
