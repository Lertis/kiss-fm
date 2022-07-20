import { Observable } from 'rxjs'

export interface IApiService {
  getRequest: <T>(url: string) => Observable<T>
  postRequest: <T, P>(url: string, payload: P) => Observable<T>
  putRequest: <T, P>(url: string, payload: P) => Observable<T>
  deleteRequest: <T>(url: string) => Observable<T>
}
