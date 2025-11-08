import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Platform } from '@ionic/angular';
import { ConnectionStatus, NetworkService } from '../services/networkService/network-service';
import { AlertService } from '../services/alertService/alert-service';
import { alertOptionsModel } from '../dataModels/model';


@Injectable({
    providedIn: 'root'
})
export class NetworkInterceptor implements HttpInterceptor {

    private alertOptions: alertOptionsModel = new alertOptionsModel();

    constructor(
        private network: NetworkService,
        public platform: Platform,
        private toast: AlertService,
    ) { }

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone();
        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    this.platform.ready().then(() => {
                        if (this.network.getCurrentNetworkStatus() === ConnectionStatus.Offline) {

                            this.alertOptions.header = 'Network Connection';
                            this.alertOptions.message = 'Network is unavailable. Please try to connect later with active network.';
                            this.alertOptions.continueBtn = 'Retry';
                            this.alertOptions.cancelBtn = 'Cancel';

                            this.toast.alertShow(this.alertOptions).then((alertData: any) => {
                                if (alertData) {
                                    this.toast.toastShow(`Alert ok done...`);
                                    next.handle(req);
                                }
                            });
                        }
                    });
                }
            })
        );
    }
}
