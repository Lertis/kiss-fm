import { createAction, props } from '@ngrx/store'

import { IRadioStationsSong } from '../../models'

export const storeSongs = createAction('[Source] Event', props<{ songs: IRadioStationsSong[] }>())
export const storeDynamicPaths = createAction('[Source] Event', props<{ paths: string[] }>())
