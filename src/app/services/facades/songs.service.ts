import { Inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import { IApiService, IRadioStationsSongs } from '../../models'
import { API_SERVICE, BASE_URL_TOKEN } from '../../tokens'

@Injectable()
export class SongsService {

  constructor (
    @Inject(BASE_URL_TOKEN) private readonly url: string,
    @Inject(API_SERVICE) private readonly api: IApiService) { }

  getSongsOnOtherStations (): Observable<IRadioStationsSongs> {
    return this.api.getRequest<IRadioStationsSongs>(`${this.url}/radioPremSongs`);
  }
}
