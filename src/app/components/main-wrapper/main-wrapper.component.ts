import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core'
import { Store } from '@ngrx/store'

import { mergeMap, Subject, takeUntil } from 'rxjs'
import { cloneDeep } from 'lodash'

import { IRadioStationsSong } from '../../models'
import { pollingObservable } from '../../operators'
import { selectSongs, AppState } from '../../store'


@Component({
  selector: 'radio-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainWrapperComponent implements OnDestroy {
  private readonly destroy$ = new Subject<void>()

  songs!: IRadioStationsSong[]

  constructor (
    private readonly cdr: ChangeDetectorRef,
    private readonly store: Store<AppState>) {
    this.startGettingSongsOnOtherStations()
  }

  private startGettingSongsOnOtherStations () {
    pollingObservable({ pollingTime: 20000 }).pipe(
      takeUntil(this.destroy$),
      mergeMap(() => this.store.select(selectSongs))
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
