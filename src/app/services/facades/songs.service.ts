import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { IApiService, IRadioStationsSong } from '../../models'
import { API_SERVICE, BASE_URL_TOKEN } from '../../tokens'

@Injectable()
export class SongsService {

  constructor (
    @Inject(BASE_URL_TOKEN) private readonly url: string,
    @Inject(API_SERVICE) private readonly api: IApiService) { }

  getSongsOnOtherStations (): Observable<IRadioStationsSong[]> {
    return this.api.getRequest<IRadioStationsSong[]>(`${this.url}/radioPremSongs`);
  }
}
