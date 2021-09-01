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
    console.log('Because this was converted to a promise, the logic was executed immediately!');
    this.randomNumberService.getRandomNumber().toPromise().then(val => {
      console.log(`With a promise, random number is ${val}`);
    });
  }

  public tryToCancelPromise(): void {
    console.log('Creating promise');
    let randomNumberPromise = this.randomNumberService.getRandomNumber().toPromise();
    randomNumberPromise.then(val => {
      console.log(`With a promise, random number is ${val}`);
    });
    setTimeout(() => {
      randomNumberPromise = null as any;
      console.log('Just set the promise to null. Will that cancel it?');
    }, 1500);
  }

  public setRandomNumberObservable(): void {
    this.randomNumber$ = this.randomNumberService.getRandomNumber();
    console.log('The observable was created, however the logic will not execute until it is subscribed!');
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
    console.log('Subscribed!');
    return this.randomNumber$.pipe(take(1)).subscribe(val => {
      console.log(`With an observable, random number is ${val}`)
    });
  }

}
