import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundImageComponent } from '@shared/components/not-found-image/not-found-image.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [MatIconModule, NotFoundImageComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
