import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomNumberService {

  constructor(private readonly httpClient: HttpClient) { }

  public getRandomNumber(): Observable<number> {
    return this.httpClient.get<number>('/api/randomnumber');
  }

  public doubleTheRandomNumber(num: number): Observable<number> {
    return new Observable(subscriber => {
      setTimeout(() => {
        subscriber.next(num * 2);
        subscriber.complete();
      }, 2000);
    });
  }
}
