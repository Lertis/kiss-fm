import { Inject, Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'

import { WINDOW } from '../../tokens'

@Injectable()
export class UrlService {
  constructor(@Inject(WINDOW) private readonly window: Window) { }

  getHostName (): Observable<string> {
    return of(this.window.location.hostname)
  }
}
