import { Router } from '@angular/router'

import { concatMap, Observable, of, tap } from 'rxjs'

import { RadioStationLiveInfoComponent } from '../../components'
import { UrlService } from '../../services'
import { SongsService } from '../../services/facades'
import { rootVariables } from '../styling'
import { IRadioStationsSongs, IRootVariables } from '../../models'
import { mock } from '../../mock'


export function initializeAppFactoryStylingVariables (urlService: UrlService): () => Observable<IRootVariables> {
  return () => urlService.getHostName().pipe(
    concatMap((_hostname: string) => of(mock.kissFm)),
    tap((variables: IRootVariables) => rootVariables(variables))
  )
}

export function initializeAppFactoryDefineDynamicRoutes (songsService: SongsService, router: Router): () => void {
  return () => songsService.getSongsOnOtherStations().pipe(
    tap((songs: IRadioStationsSongs[]) => {
      const component = RadioStationLiveInfoComponent
      songs.forEach(song => router.config.push({ path: song.type, component }))
    })
  )
}
