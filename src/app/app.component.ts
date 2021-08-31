import { Component } from '@angular/core';
import { RngApiService } from './rng-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private rngService: RngApiService) {}


}
