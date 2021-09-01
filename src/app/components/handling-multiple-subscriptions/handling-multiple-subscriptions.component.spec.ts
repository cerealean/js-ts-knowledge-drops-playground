import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingMultipleSubscriptionsComponent } from './handling-multiple-subscriptions.component';

describe('HandlingMultipleSubscriptionsComponent', () => {
  let component: HandlingMultipleSubscriptionsComponent;
  let fixture: ComponentFixture<HandlingMultipleSubscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandlingMultipleSubscriptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandlingMultipleSubscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
