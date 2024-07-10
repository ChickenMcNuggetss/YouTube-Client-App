import {
  Component, EventEmitter, Input, Output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
})
export class InputComponent {
  inputValue: string = '';
  @Input({ required: true }) inputLabelTitle!: string;
  @Output() valueChange = new EventEmitter<string>();

  onInputChange() {
    this.valueChange.emit(this.inputValue);
  }
}
