import { Observable, of, tap } from 'rxjs'

import { rootVariables } from '../styling'
import { mock } from '../../mock'
import { IRootVariables } from '../../models'

export function initializeAppFactory (): Observable<IRootVariables> {
  return of(mock.kissFm).pipe(tap((variables: IRootVariables) => rootVariables(variables)))
}
