import { createSelector } from '@ngrx/store'

import { AppState, IRadioState } from '../state'

const featureRadioFromRoot = (state: AppState) => state.radio

export const selectSongs = createSelector(featureRadioFromRoot,
  (state: IRadioState) => state.songs)
