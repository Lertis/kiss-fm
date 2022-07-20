import { Injectable } from '@angular/core'
import { Actions } from '@ngrx/effects'
import { Store } from '@ngrx/store'

import { AppState } from '../state'

@Injectable()
export class SongsEffects {
  constructor (
    private readonly actions$: Actions,
    private readonly store: Store<AppState>,
  ) { }
}
