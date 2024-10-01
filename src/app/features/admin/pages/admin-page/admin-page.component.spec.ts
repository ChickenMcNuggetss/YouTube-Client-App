import { ComponentFixture, TestBed } from '@angular/core/testing';
import { getDateValidator } from '@features/admin/validators/get-date-validator';

import { AdminPageComponent } from './admin-page.component';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('AdminPageComponent', () => {
  let component: AdminPageComponent;
  let fixture: ComponentFixture<AdminPageComponent>;

  let store: MockStore;

  const initialState = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminPageComponent],
      providers: [provideAnimations(), { provide: getDateValidator, useValue: () => {} }, provideMockStore({initialState})]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminPageComponent);
    store = TestBed.inject(MockStore);
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
