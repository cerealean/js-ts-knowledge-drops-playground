import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe-using-take-until',
  templateUrl: './unsubscribe-using-take-until.component.html',
  styleUrls: ['./unsubscribe-using-take-until.component.scss']
})
export class UnsubscribeUsingTakeUntilComponent implements OnInit, OnDestroy {

  private readonly signal = new Subject<void>();

  constructor() { }

  ngOnInit(): void {
    interval(2000)
      .pipe(takeUntil(this.signal))
      .subscribe(num => {
        // Do work
      });

    interval(3000)
      .pipe(takeUntil(this.signal))
      .subscribe(num => {
        // Do work
      });
  }

  ngOnDestroy(): void {
    this.signal.next();
    this.signal.complete();
  }

}
