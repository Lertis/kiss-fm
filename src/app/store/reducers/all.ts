import { ActionReducerMap } from '@ngrx/store'
import { AppState } from '../state'
import { radioReducer } from './radio'


export const reducers: ActionReducerMap<AppState> = {
  radio: radioReducer
}
