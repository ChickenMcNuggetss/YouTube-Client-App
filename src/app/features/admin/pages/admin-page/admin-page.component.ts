import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { getDateValidator } from '@features/admin/validators/get-date-validator';
import { ButtonComponent } from '@shared/components/button/button.component';
import { determineControlErrorText } from '@shared/utils/determine-error-text';

function createTagItem() {
  return new FormGroup({
    tag: new FormControl('', [Validators.required]),
  });
}

@Component({
  selector: 'app-admin-page',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ButtonComponent,
    NgFor,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
  protected createCardForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    description: new FormControl('', [Validators.maxLength(255)]),
    imageLink: new FormControl('', [Validators.required]),
    videoLink: new FormControl('', [Validators.required]),
    creationDate: new FormControl('', [
      Validators.required,
      getDateValidator(),
    ]),
    tags: new FormArray([createTagItem()]),
  });

  get title() {
    return this.createCardForm.get('title');
  }

  get description() {
    return this.createCardForm.get('description');
  }

  get imageLink() {
    return this.createCardForm.get('imageLink');
  }

  get videoLink() {
    return this.createCardForm.get('videoLink');
  }

  get creationDate() {
    return this.createCardForm.get('creationDate');
  }

  get tags() {
    return this.createCardForm.get('tags') as FormArray;
  }

  protected addTag() {
    if (this.tags.length > 4) return;
    this.tags.push(createTagItem());
  }

  protected resetCreateCardForm() {
    this.tags.controls.splice(1);
    this.createCardForm.reset();
  }

  protected getErrorText(
    control: AbstractControl<string | null, string | null> | null,
    controlName: string,
  ) {
    return determineControlErrorText(control, controlName);
  }
}
