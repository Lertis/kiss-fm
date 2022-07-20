import { Action, createReducer, on } from '@ngrx/store'

import { IRadioState } from '../state'
import { storeSongs, storeDynamicPaths } from '../actions'

const INITIAL_STATE: IRadioState = {
  songs: [],
  dynamicPaths: [],
  loading: true
}

const featureReducer = createReducer(
  INITIAL_STATE,
  on(storeSongs, (state, { songs }) => ({ ...state, songs, loading: false })),
  on(storeDynamicPaths, (state, { paths }) => ({ ...state, dynamicPaths: paths }))
)

export function radioReducer (state: IRadioState | undefined, action: Action) {
  return featureReducer(state, action)
}
