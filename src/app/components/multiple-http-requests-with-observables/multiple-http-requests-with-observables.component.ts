import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';
import { RandomNumberService } from 'src/app/random-number.service';

@Component({
  selector: 'app-multiple-http-requests-with-observables',
  templateUrl: './multiple-http-requests-with-observables.component.html',
  styleUrls: ['./multiple-http-requests-with-observables.component.scss']
})
export class MultipleHttpRequestsWithObservablesComponent {

  public results: number | undefined;

  constructor(private readonly randomNumberService: RandomNumberService) { }

  public getFiveRandomNumbersSimultaneously() {
    const start = performance.now();
    forkJoin([
      this.randomNumberService.getRandomNumber(),
      this.randomNumberService.getRandomNumber(),
      this.randomNumberService.getRandomNumber(),
      this.randomNumberService.getRandomNumber(),
      this.randomNumberService.getRandomNumber()
    ]).subscribe(randomNumbers => {
      const end = performance.now();

      this.results = end-start;
    });
  }

}
