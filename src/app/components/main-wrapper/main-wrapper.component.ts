import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core'
import { mergeMap, Subject, takeUntil } from 'rxjs'
import { IRadioStationsSongs } from '../../models'

import { pollingObservable } from '../../operators'
import { SongsService } from '../../services/facades'

import { cloneDeep } from 'lodash'

@Component({
  selector: 'radio-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainWrapperComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>()

  songs!: IRadioStationsSongs[]

  constructor (
    private readonly songsService: SongsService,
    private readonly cdr: ChangeDetectorRef) {
    this.startGettingSongsOnOtherStations()
  }

  private startGettingSongsOnOtherStations () {
    pollingObservable({ pollingTime: 20000 }).pipe(
      takeUntil(this.destroy$),
      mergeMap(() => this.songsService.getSongsOnOtherStations())
    ).subscribe(songs => {
      this.songs = cloneDeep(songs)
      this.cdr.detectChanges()
    })
  }

  ngOnDestroy (): void {
    this.destroy$.next()
    this.destroy$.complete()
  }
}
