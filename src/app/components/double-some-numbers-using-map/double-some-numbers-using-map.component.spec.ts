import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleSomeNumbersUsingMapComponent } from './double-some-numbers-using-map.component';

describe('DoubleSomeNumbersUsingMapComponent', () => {
  let component: DoubleSomeNumbersUsingMapComponent;
  let fixture: ComponentFixture<DoubleSomeNumbersUsingMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleSomeNumbersUsingMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleSomeNumbersUsingMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
