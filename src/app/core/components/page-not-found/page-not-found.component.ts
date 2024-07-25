import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NotFoundComponent } from '@shared/components/not-found-component/not-found.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [MatIconModule, NotFoundComponent],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {}
