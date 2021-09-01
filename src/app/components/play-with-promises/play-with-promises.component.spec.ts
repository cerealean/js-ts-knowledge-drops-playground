import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayWithPromisesComponent } from './play-with-promises.component';

describe('PlayWithPromisesComponent', () => {
  let component: PlayWithPromisesComponent;
  let fixture: ComponentFixture<PlayWithPromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayWithPromisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayWithPromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
