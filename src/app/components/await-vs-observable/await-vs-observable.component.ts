import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { RandomNumberService } from 'src/app/random-number.service';

@Component({
  selector: 'app-await-vs-observable',
  templateUrl: './await-vs-observable.component.html',
  styleUrls: ['./await-vs-observable.component.scss']
})
export class AwaitVsObservableComponent implements OnDestroy {

  private subscriptions = new Subscription();

  constructor(private readonly randomNumberService: RandomNumberService) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  public async multiplyWithAwait() {
    const randomNumber = await this.randomNumberService.getRandomNumber().toPromise();
    const numberDoubled = await this.randomNumberService.doubleTheRandomNumber(randomNumber).toPromise();
    const numberQuadrupled = await this.randomNumberService.doubleTheRandomNumber(numberDoubled).toPromise();

    console.log(`Await: Random number is ${randomNumber}, doubled is ${numberDoubled}, quadrupled is ${numberQuadrupled}`);
  }

  public multiplyWithObservable() {
    this.subscriptions.add(this.randomNumberService.getRandomNumber().pipe(take(1)).subscribe(number => {
      this.subscriptions.add(this.randomNumberService.doubleTheRandomNumber(number).pipe(take(1)).subscribe(doubled => {
        this.subscriptions.add(this.randomNumberService.doubleTheRandomNumber(doubled).pipe(take(1)).subscribe(quad => {
          console.log(`Observable: Random number is ${number}, doubled is ${doubled}, quadrupled is ${quad}`);
        }));
      }));
    }));
  }

}
