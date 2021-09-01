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

  public async doIt() {
    const [asyncResults, syncResults] = await Promise.all([this.doAsynchronously(), this.doSynchronously()]);
    this.asyncResults = asyncResults;
    this.syncResults = syncResults;
  }

  public async doSynchronously(numberOfTimes = 5) {
    const start = performance.now();
    for(let i = 0; i < numberOfTimes; i++) {
      await this.makeQuicklyResolveablePromise(1000);
    }
    const finish = performance.now();
    return finish - start;
  }

  public async doAsynchronously(numberOfTimes = 5) {
    const start = performance.now();
    let promises: Promise<any>[] = [];
    for(let i = 0; i < numberOfTimes; i++) {
      promises.push(this.makeQuicklyResolveablePromise(1000));
    }
    await Promise.all(promises);
    const finish = performance.now();
    return finish - start;
  }

  private makeQuicklyResolveablePromise(resolveInSeconds: number, resolveWith?: any): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(resolveWith);
      }, resolveInSeconds);
    });
  }

}
