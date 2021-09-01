import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayWithPromisesComponent } from './components/play-with-promises/play-with-promises.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CancellableTestComponent } from './components/cancellable-test/cancellable-test.component';
import { AwaitVsObservableComponent } from './components/await-vs-observable/await-vs-observable.component';
import { HandlingMultipleSubscriptionsComponent } from './components/handling-multiple-subscriptions/handling-multiple-subscriptions.component';
import { TestingAsyncOnInitComponent } from './components/testing-async-on-init/testing-async-on-init.component';
import { MultipleHttpRequestsWithObservablesComponent } from './components/multiple-http-requests-with-observables/multiple-http-requests-with-observables.component';
import { DoubleSomeNumbersUsingMapComponent } from './components/double-some-numbers-using-map/double-some-numbers-using-map.component';
import { UnsubscribeUsingTakeUntilComponent } from './components/unsubscribe-using-take-until/unsubscribe-using-take-until.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayWithPromisesComponent,
    CancellableTestComponent,
    AwaitVsObservableComponent,
    HandlingMultipleSubscriptionsComponent,
    TestingAsyncOnInitComponent,
    MultipleHttpRequestsWithObservablesComponent,
    DoubleSomeNumbersUsingMapComponent,
    UnsubscribeUsingTakeUntilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
