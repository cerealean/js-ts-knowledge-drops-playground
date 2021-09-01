import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { RandomNumberService } from 'src/app/random-number.service';

import { TestingAsyncOnInitComponent } from './testing-async-on-init.component';

fdescribe('TestingAsyncOnInitComponent', () => {
  let component: TestingAsyncOnInitComponent;
  let fixture: ComponentFixture<TestingAsyncOnInitComponent>;

  let randomNumberService: jasmine.SpyObj<RandomNumberService>;
  let randomNumber$: BehaviorSubject<number>;

  beforeEach(async () => {
    randomNumberService = jasmine.createSpyObj<RandomNumberService>(['getRandomNumber']);
    randomNumber$ = new BehaviorSubject<number>(0);
    randomNumberService.getRandomNumber.and.returnValue(randomNumber$.asObservable());
    await TestBed.configureTestingModule({
      declarations: [TestingAsyncOnInitComponent],
      providers: [
        { provide: RandomNumberService, useValue: randomNumberService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingAsyncOnInitComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    randomNumber$.complete();
  });

  it('should create', () => {
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  [
    { num: 1, exp: 3 },
    { num: 3, exp: 9 },
    { num: 50, exp: 150 },
  ].forEach(testData => {
    it(`should set important number to ${testData.exp} when random number is ${testData.num}`, waitForAsync(async () => {
      randomNumber$.next(testData.num);

      fixture.detectChanges();
      await fixture.whenStable();

      expect(component.importantNumber).toBe(testData.exp);
    }));
  });

  [
    { num: 5, exp: 25 },
    { num: 100, exp: 500 },
    { num: 8, exp: 40 },
  ].forEach(testData => {

    it(`should set delayed number to ${testData.exp} when random number is ${testData.num}`, fakeAsync(async () => {
      randomNumber$.next(testData.num);

      fixture.detectChanges();
      tick(1000);

      expect(component.delayedNumber).toBe(testData.exp);
    }));
  });
});
