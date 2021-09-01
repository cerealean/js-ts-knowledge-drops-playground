import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnsubscribeUsingTakeUntilComponent } from './unsubscribe-using-take-until.component';

describe('UnsubscribeUsingTakeWhileComponent', () => {
  let component: UnsubscribeUsingTakeUntilComponent;
  let fixture: ComponentFixture<UnsubscribeUsingTakeUntilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnsubscribeUsingTakeUntilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnsubscribeUsingTakeUntilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
