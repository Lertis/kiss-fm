import { Router } from '@angular/router'
import { Store } from '@ngrx/store'

import { concatMap, Observable, of, tap } from 'rxjs'

import { AppState, storeSongs, storeDynamicPaths } from '../../store'

import { RadioStationLiveInfoComponent } from '../../components'
import { UrlService } from '../../services'
import { SongsService } from '../../services/facades'
import { rootVariables } from '../styling'
import { IRadioStationsSong, IRootVariables } from '../../models'
import { mock } from '../../mock'

export function initializeAppFactoryStylingVariables (urlService: UrlService): () => Observable<IRootVariables> {
  return () => urlService.getHostName().pipe(
    concatMap((_hostname: string) => of(mock.kissFm)),
    tap((variables: IRootVariables) => rootVariables(variables))
  )
}

export function initializeAppFactoryDefineDynamicRoutes (songsService: SongsService, router: Router, store: Store<AppState>): () => void {
  return () => songsService.getSongsOnOtherStations().pipe(
    tap((songs: IRadioStationsSong[]) => {
      const component = RadioStationLiveInfoComponent
      const paths: string[] = []
      songs.forEach(song => {
        const path = song.type
        paths.push(path)
        router.config.push({ path, component })
      })
      store.dispatch(storeDynamicPaths({ paths }))
      store.dispatch(storeSongs({ songs }))
    })
  )
}

