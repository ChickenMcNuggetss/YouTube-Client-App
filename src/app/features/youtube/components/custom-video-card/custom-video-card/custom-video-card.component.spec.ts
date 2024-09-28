import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { CustomVideoCardComponent } from './custom-video-card.component';
import { Store } from '@ngrx/store';
import { provideRouter } from '@angular/router';

describe('CustomVideoCardComponent', () => {
  let component: CustomVideoCardComponent;
  let fixture: ComponentFixture<CustomVideoCardComponent>;
  let store: MockStore;

  const initialState = {};

  const customCardItemMock = {
    id: '',
    creationDate: '',
    description: '',
    imageLink: '',
    tags: [''],
    title: '',
    videoLink: '',
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomVideoCardComponent],
      providers: [
        provideRouter([]),
        provideMockStore({initialState}),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomVideoCardComponent);
    component = fixture.componentInstance;
    component.customCardItem = customCardItemMock;
    fixture.detectChanges();
    fixture.debugElement.injector.get(Store);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
