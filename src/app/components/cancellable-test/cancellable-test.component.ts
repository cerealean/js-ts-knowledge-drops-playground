import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { first, take } from 'rxjs/operators';
import { RandomNumberService } from 'src/app/random-number.service';

@Component({
  selector: 'app-cancellable-test',
  templateUrl: './cancellable-test.component.html',
  styleUrls: ['./cancellable-test.component.scss']
})
export class CancellableTestComponent implements OnDestroy {

  private randomNumber$!: Observable<number>;

  private subscriptions = new Subscription();

  constructor(private readonly randomNumberService: RandomNumberService) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public getRandomNumberWithPromise(): void {
    console.log('Going to grab a random number with the HTTP call wrapped in a promise. This is not cancellable!');
    this.randomNumberService.getRandomNumber().toPromise().then(val => {
      console.log(`With a promise, random number is ${val}`);
    });
  }

  public setRandomNumberObservable(): void {
    this.randomNumber$ = this.randomNumberService.getRandomNumber();
  }

  public subscribeButCancelEarly(): void {
    const subscription = this.subscribeToObservable();
    setTimeout(() => {
      subscription.unsubscribe();
    }, 2000);
  }

  public subscribeAndLetFinish(): void {
    this.subscriptions.add(this.subscribeToObservable());
  }

  private subscribeToObservable(): Subscription {
    return this.randomNumber$.pipe(take(1)).subscribe(val => {
      console.log(`With an observable, random number is ${val}`)
    });
  }

}
