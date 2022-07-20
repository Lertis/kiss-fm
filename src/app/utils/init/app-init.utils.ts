import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { concatMap, Observable, of, tap } from 'rxjs'

import { AppState } from '../../store/state'

import { RadioStationLiveInfoComponent } from '../../components'
import { UrlService } from '../../services'
import { SongsService } from '../../services/facades'
import { rootVariables } from '../styling'
import { IRadioStationsSong, IRootVariables } from '../../models'
import { mock } from '../../mock'
import { storeSongs } from '../../store/actions'

export function initializeAppFactoryStylingVariables (urlService: UrlService): () => Observable<IRootVariables> {
  return () => urlService.getHostName().pipe(
    concatMap((_hostname: string) => of(mock.kissFm)),
    tap((variables: IRootVariables) => rootVariables(variables))
  )
}

export function initializeAppFactoryDefineDynamicRoutes (songsService: SongsService, router: Router, store: Store<AppState>): () => void {
  return () => songsService.getSongsOnOtherStations().pipe(
    tap((songs: IRadioStationsSong[]) => {
      console.log(songs)
      store.dispatch(storeSongs({ songs }))
      const component = RadioStationLiveInfoComponent
      songs.forEach(song => router.config.push({ path: song.type, component }))
    })
  )
}
