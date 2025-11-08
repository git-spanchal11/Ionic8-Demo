import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { ConnectionStatus, NetworkService } from '../networkService/network-service';
import { AlertService } from '../alertService/alert-service';
import { responseModel } from 'src/app/dataModels/model';

@Injectable({
  providedIn: 'root'
})
export class HttpServices {

  constructor(public http: HttpClient,
    private networkService: NetworkService,
    private toast: AlertService) {
  }

  // ===============GET===============
  public GET(url: string): Observable<any> | any {
    try {
      if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline) {
        debugger;
        this.toast.toastShow('No internet connectivity. Please try again later.');
      } else {
        return this.http.get<responseModel>(url).pipe(
          map((response) => {
            return response;
          }),
          catchError(async (error) => this.handleErrors(error, url))
        );
      }
    } catch (error) {
      return of(null);
    }
  }

  // ===============POST with token===============
  public POST(url: string, data: any): Observable<any> | any {
    let _headers = new HttpHeaders();
    try {
      if (this.networkService.getCurrentNetworkStatus() === ConnectionStatus.Offline) {
        this.toast.toastShow('No internet connectivity. Please try again later.');
      } else {
        return this.http.post<responseModel>(url, data, { headers: _headers }).pipe(
          map((response) => {
            return response;
          }),
          catchError(async (error) => this.handleErrors(error, url))
        );
      }
    } catch (error) {
      return of(null);
    }
  }

  handleErrors(error: HttpErrorResponse, url: string) {
    let errMsg: any;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error} ${err}`;
    } else {
      errMsg = error.error ? error.error : JSON.stringify(error);
    }
    console.warn(JSON.stringify(errMsg));
    return throwError(() => errMsg);
  }
};

