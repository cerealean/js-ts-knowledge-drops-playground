import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';
import { RandomNumberService } from 'src/app/random-number.service';

@Component({
  selector: 'app-testing-async-on-init',
  templateUrl: './testing-async-on-init.component.html',
  styleUrls: ['./testing-async-on-init.component.scss']
})
export class TestingAsyncOnInitComponent implements OnInit, OnDestroy {

  public importantNumber: number | undefined;
  public delayedNumber: number | undefined;

  private importantNumberSubscription: Subscription | undefined;
  private delayedNumberSubscription: Subscription | undefined;

  constructor(private readonly randomNumberService: RandomNumberService) { }

  ngOnInit(): void {
    const randomNumber$ = this.randomNumberService.getRandomNumber();

    this.importantNumberSubscription = randomNumber$.subscribe(num => {
      this.importantNumber = num * 3;
    });

    this.delayedNumberSubscription = randomNumber$.pipe(delay(1000)).subscribe(num => {
      this.delayedNumber = num * 5;
    });
  }

  ngOnDestroy(): void {
    this.importantNumberSubscription?.unsubscribe();
    this.delayedNumberSubscription?.unsubscribe();
  }

}
