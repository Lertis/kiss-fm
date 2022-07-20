import { concatMap, Observable, of, tap } from 'rxjs'

import { rootVariables } from '../styling'

import { IRootVariables } from '../../models'
import { UrlService } from '../../services'

import { mock } from '../../mock'


export function initializeAppFactory (urlService: UrlService): () => Observable<IRootVariables> {
  return () => urlService.getHostName().pipe(
    concatMap((hostname: string) => of(mock.kissFm)),
    tap((variables: IRootVariables) => rootVariables(variables))
  )
}
