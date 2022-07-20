import { Observable, timer } from 'rxjs'

export const DEFAULT_POLLING_CONFIG = {
  startTime: 0,
  pollingTime: 1_000 // time in miliseconds
}

export function pollingObservable (cfg?: { startTime?: number, pollingTime?: number }): Observable<number> {
  const { startTime, pollingTime } = { ...DEFAULT_POLLING_CONFIG, ...cfg }
  return timer(startTime, pollingTime)
}
