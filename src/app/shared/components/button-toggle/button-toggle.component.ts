import {
  Component, EventEmitter, Input, Output, signal
} from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-button-toggle',
  standalone: true,
  imports: [MatButtonToggleModule, MatCheckboxModule],
  templateUrl: './button-toggle.component.html',
  styleUrl: './button-toggle.component.scss',
})
export class ButtonToggleComponent {
  @Input({ required: true }) firstButtonValue!: string;
  @Input({ required: true }) secondButtonValue!: string;
  @Output() valueToggle = new EventEmitter<string>();
  hideSingleSelectionIndicator = signal(false);

  protected emitFirstValue() {
    this.valueToggle.emit(this.firstButtonValue);
  }

  protected emitSecondValue() {
    this.valueToggle.emit(this.secondButtonValue);
  }
}
