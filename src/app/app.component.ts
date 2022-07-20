import { Component, OnDestroy } from '@angular/core'
import { mergeMap, Subject, takeUntil } from 'rxjs'

import { pollingObservable } from './operators'
import { SongsService } from './services/facades'

@Component({
  selector: 'radio-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>()

  constructor (private readonly songsService: SongsService) {
    pollingObservable({ pollingTime: 20000 }).pipe(
      takeUntil(this.destroy$),
      mergeMap(() => this.songsService.getSongsOnOtherStations())
    ).subscribe(a => console.log(a))
  }

  ngOnDestroy (): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
