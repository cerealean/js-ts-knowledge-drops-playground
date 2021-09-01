import { Component } from '@angular/core';
import { RandomNumberService } from 'src/app/random-number.service';

@Component({
  selector: 'app-double-some-numbers-using-map',
  templateUrl: './double-some-numbers-using-map.component.html',
  styleUrls: ['./double-some-numbers-using-map.component.scss']
})
export class DoubleSomeNumbersUsingMapComponent {

  public readonly startingNumbers = [1, 2, 3, 4, 5, 0];
  public numbersDoubled: number[] = [];

  constructor(private readonly randomNumberService: RandomNumberService) { }

  async doubleTheNumbers(): Promise<void> {
    /* This is how you would do this without map */
    // const promises: Promise<number>[] = [];
    // this.startingNumbers.forEach(num => {
    //   promises.push(this.randomNumberService.doubleTheRandomNumber(num).toPromise());
    // });

    const promises = this.startingNumbers.map(num => this.randomNumberService.doubleTheRandomNumber(num).toPromise());
    this.numbersDoubled = await Promise.all(promises);
  }

}
