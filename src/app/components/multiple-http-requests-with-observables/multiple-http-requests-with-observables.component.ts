import { Component } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-multiple-http-requests-with-observables',
  templateUrl: './multiple-http-requests-with-observables.component.html',
  styleUrls: ['./multiple-http-requests-with-observables.component.scss']
})
export class MultipleHttpRequestsWithObservablesComponent {

  public results = 0;

  constructor() { }

  public getFiveRandomNumbersSimultaneously() {
    const start = performance.now();
    forkJoin([
      this.makeQuicklyEmittingObservable(1000),
      this.makeQuicklyEmittingObservable(1000),
      this.makeQuicklyEmittingObservable(1000),
      this.makeQuicklyEmittingObservable(1000),
      this.makeQuicklyEmittingObservable(1000)
    ]).subscribe(() => {
      const end = performance.now();

      this.results = end-start;
    });
  }

  private makeQuicklyEmittingObservable(resolveInSeconds: number): Observable<void> {
    return new Observable<void>(subscriber => {
      setTimeout(() => {
        subscriber.next();
        subscriber.complete();
      }, resolveInSeconds);
    });
  }
}
