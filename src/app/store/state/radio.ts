import { IRadioStationsSong } from '../../models'
import { IDefaultState } from './all'

export interface IRadioState extends IDefaultState{
  songs: IRadioStationsSong[]
  dynamicPaths: string[]
}
