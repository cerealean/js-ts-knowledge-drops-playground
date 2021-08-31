import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RngApiService {

  constructor(private httpclient: HttpClient) { }

  public getRandomNumbers(min = 0, max = 100, count = 5): Observable<number[]> {
    return this.httpclient.get<number[]>(`http://www.randomnumberapi.com/api/v1.0/random?min=${min}&max=${max}&count=${count}`);
  }
}
