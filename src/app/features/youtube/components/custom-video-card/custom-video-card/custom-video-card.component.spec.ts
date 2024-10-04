import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { CustomVideoCardComponent } from './custom-video-card.component';

describe('CustomVideoCardComponent', () => {
  let component: CustomVideoCardComponent;
  let fixture: ComponentFixture<CustomVideoCardComponent>;

  const customCardItemMock = {
    id: '',
    creationDate: '',
    description: '',
    imageLink: '',
    tags: [''],
    title: '',
    videoLink: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomVideoCardComponent],
      providers: [
        provideRouter([]),
        provideMockStore(),
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CustomVideoCardComponent);
    component = fixture.componentInstance;
    component.customCardItem = customCardItemMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
