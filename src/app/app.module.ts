import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayWithPromisesComponent } from './components/play-with-promises/play-with-promises.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CancellableTestComponent } from './components/cancellable-test/cancellable-test.component';
import { AwaitVsObservableComponent } from './components/await-vs-observable/await-vs-observable.component';
import { HandlingMultipleSubscriptionsComponent } from './components/handling-multiple-subscriptions/handling-multiple-subscriptions.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayWithPromisesComponent,
    CancellableTestComponent,
    AwaitVsObservableComponent,
    HandlingMultipleSubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
