import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaitVsObservableComponent } from './await-vs-observable.component';

describe('AwaitVsObservableComponent', () => {
  let component: AwaitVsObservableComponent;
  let fixture: ComponentFixture<AwaitVsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwaitVsObservableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaitVsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
