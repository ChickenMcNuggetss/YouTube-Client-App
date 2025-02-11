import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { getDateValidator } from '@features/admin/validators/get-date-validator';
import { provideMockStore } from '@ngrx/store/testing';

import { AdminPageComponent } from './admin-page.component';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPageComponent],
      providers: [provideAnimations(), { provide: getDateValidator, useValue: () => {} }, provideMockStore()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add tag', () => {
    const prevLength = component.tags.length;
    component.addTag();
    expect(component.tags.length > prevLength).toBe(true);
  });
});
