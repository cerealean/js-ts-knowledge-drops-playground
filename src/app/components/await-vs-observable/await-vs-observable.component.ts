import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { RandomNumberService } from 'src/app/random-number.service';

@Component({
  selector: 'app-await-vs-observable',
  templateUrl: './await-vs-observable.component.html',
  styleUrls: ['./await-vs-observable.component.scss']
})
export class AwaitVsObservableComponent  {

  constructor(private readonly randomNumberService: RandomNumberService) { }

  public async multiplyWithAwait(): Promise<void> {
    const randomNumber = await this.randomNumberService.getRandomNumber().toPromise();
    const numberDoubled = await this.randomNumberService.doubleTheRandomNumber(randomNumber).toPromise();
    const numberQuadrupled = await this.randomNumberService.doubleTheRandomNumber(numberDoubled).toPromise();

    console.log(`Await: Random number is ${randomNumber}, doubled is ${numberDoubled}, quadrupled is ${numberQuadrupled}`);
  }

  /**
   * This does the same as above except by using nested observables
   *
   * ToDo: In more advanced kd -> how to unsubscribe from multiple subscriptions
   */
  public multiplyWithObservable(): void {
    this.randomNumberService.getRandomNumber().pipe(take(1)).subscribe(number => {
      this.randomNumberService.doubleTheRandomNumber(number).pipe(take(1)).subscribe(doubled => {
        this.randomNumberService.doubleTheRandomNumber(doubled).pipe(take(1)).subscribe(quad => {
          console.log(`Observable: Random number is ${number}, doubled is ${doubled}, quadrupled is ${quad}`);
        });
      });
    });
  }

}
