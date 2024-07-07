import { Component } from '@angular/core';
import { CardListComponent } from '@features/youtube/components/card-list/card-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CardListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
