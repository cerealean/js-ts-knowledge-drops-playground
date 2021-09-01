import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RandomNumberService } from 'src/app/random-number.service';

@Component({
  selector: 'app-handling-multiple-subscriptions',
  templateUrl: './handling-multiple-subscriptions.component.html',
  styleUrls: ['./handling-multiple-subscriptions.component.scss']
})
export class HandlingMultipleSubscriptionsComponent implements OnInit, OnDestroy {

  private readonly subscriptions = new Subscription();

  constructor(private readonly randomNumberService: RandomNumberService) { }

  ngOnInit(): void {
    const getRandomNumber$ = this.randomNumberService.getRandomNumber();

    for(let index = 0; index < 5; index++) {
      this.subscriptions.add(getRandomNumber$.subscribe(num => console.log('number is ' + num)));
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
