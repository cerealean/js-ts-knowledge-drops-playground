import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleHttpRequestsWithObservablesComponent } from './multiple-http-requests-with-observables.component';

describe('MultipleHttpRequestsWithObservablesComponent', () => {
  let component: MultipleHttpRequestsWithObservablesComponent;
  let fixture: ComponentFixture<MultipleHttpRequestsWithObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleHttpRequestsWithObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleHttpRequestsWithObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
