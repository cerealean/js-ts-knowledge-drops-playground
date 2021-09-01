import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellableTestComponent } from './cancellable-test.component';

describe('CancellableTestComponent', () => {
  let component: CancellableTestComponent;
  let fixture: ComponentFixture<CancellableTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellableTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancellableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
