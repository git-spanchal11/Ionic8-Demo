import { Injectable } from '@angular/core';
import { HttpEvent, HttpRequest, HttpHandler, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LoadingController, Platform } from '@ionic/angular';
// import { AppDebugService } from '../services/app-debug.service';
import { camelCase } from 'lodash';
// import { AppStorageService } from '../services/app-storage.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(
        public loadingController: LoadingController,
        public platform: Platform,
        // private debugLog: AppDebugService,
        // private storage: AppStorageService
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url !== '') {
            this.showLoader();
        }

        return next.handle(req).pipe(tap(async (event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {

                //======== convert camel case response =========
                const camelCaseObject = mapKeys(event.body, (v: any, k: any) => camelCase(k));
                const modEvent = event.clone({ body: camelCaseObject });
                //==============================================
                // if (modEvent.body.messageBean.errorCode == 0) {
                //     console.log({ ISSUCCESS: true, DATETIME: new Date(), URL: req.url, REQUEST: req.body, RESPONSE: "====== SUCCESS! ======" });
                // } else {
                //     if (modEvent.body.messageBean.errorCode == 401 && modEvent.body.messageBean.errorMessage === 'Unauthorized Access') {
                //         console.log('Unauthorized Access - Handle logout or token refresh here');
                //     }
                //     console.log({ ISSUCCESS: false, DATETIME: new Date(), URL: req.url, REQUEST: req.body, RESPONSE: event.body.messageBean });
                // }
                this.hideLoader();
            }
        }, (err: any) => {
            console.log({ ISSUCCESS: false, DATETIME: new Date(), URL: req.url, REQUEST: req.body, RESPONSE: err });
            this.hideLoader();
        }));
    }

    async showLoader() {
        await this.loadingController.create({
            // cssClass: 'my-custom-class',
            message: 'Please wait...',
            spinner: 'circles',
        }).then((ldr: any) => {
            ldr.present()
        });
    }

    async hideLoader() {
        setTimeout(async () => {
            let topLoader = await this.loadingController.getTop();
            while (topLoader) {
                if (!(await topLoader.dismiss())) {
                    await topLoader.dismiss();
                    break;
                }
                topLoader = await this.loadingController.getTop();
            }
        }, 1000);
    }

}

function mapKeys(body: any, arg1: (v: any, k: any) => any) {
    throw new Error('Function not implemented.');
}
