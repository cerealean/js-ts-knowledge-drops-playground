import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectDestructuringExampleComponent } from './object-destructuring-example.component';

describe('ObjectDestructuringExampleComponent', () => {
  let component: ObjectDestructuringExampleComponent;
  let fixture: ComponentFixture<ObjectDestructuringExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectDestructuringExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectDestructuringExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
