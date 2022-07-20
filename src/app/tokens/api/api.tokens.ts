import { HttpClient } from '@angular/common/http'
import { inject, InjectionToken } from '@angular/core'

import { IApiService } from '../../models'
import { ApiService } from '../../services'

export const API_SERVICE = new InjectionToken<IApiService>(
  'API_SERVICE',
  { factory: () => new ApiService(inject(HttpClient)) }
)
