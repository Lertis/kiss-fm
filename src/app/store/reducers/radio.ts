import { Action, createReducer, on } from '@ngrx/store'

import { IRadioState } from '../state'
import { storeSongs } from '../actions'

const INITIAL_STATE: IRadioState = {
  songs: [],
  loading: true
}

const featureReducer = createReducer(
  INITIAL_STATE,
  on(storeSongs, (state, { songs }) => ({ ...state, songs, loading: false }))
)

export function radioReducer (state: IRadioState | undefined, action: Action) {
  return featureReducer(state, action)
}
