import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-with-promises',
  templateUrl: './play-with-promises.component.html',
  styleUrls: ['./play-with-promises.component.scss']
})
export class PlayWithPromisesComponent implements OnInit {
  public asyncResults = 0;
  public syncResults = 0;

  constructor() { }

  ngOnInit(): void {
  }

  public async testTimeWithPromises() {
    const [asyncResults, syncResults] = await Promise.all([this.doAsynchronouslyWithPromise(), this.doSynchronouslyWithPromise()]);
    this.asyncResults = asyncResults;
    this.syncResults = syncResults;
  }

  public async doSynchronouslyWithPromise() {
    const start = performance.now();
    for(let i = 0; i < 5; i++) {
      await this.makeQuicklyResolveablePromise(1000);
    }
    const finish = performance.now();
    return finish - start;
  }

  public async doAsynchronouslyWithPromise() {
    const start = performance.now();
    const promises: Promise<any>[] = [];
    for(let i = 0; i < 5; i++) {
      promises.push(this.makeQuicklyResolveablePromise(1000));
    }
    await Promise.all(promises);
    const finish = performance.now();
    return finish - start;
  }

  private makeQuicklyResolveablePromise(resolveInSeconds: number): Promise<void> {
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, resolveInSeconds);
    });
  }

}
