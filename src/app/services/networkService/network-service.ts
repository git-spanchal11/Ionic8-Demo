import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Injector } from '@angular/core';
import { Network } from '@awesome-cordova-plugins/network/ngx';
// import { NetworkOriginal } from '@awesome-cordova-plugins/network';
// import { ToastService } from '../toastService/toast-service';

export enum ConnectionStatus {
    Online,
    Offline
}
@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private get _router() { return this._injector.get(Router); }
    private readonly status: BehaviorSubject<ConnectionStatus> = new BehaviorSubject<ConnectionStatus>(ConnectionStatus.Offline);

    constructor(
        // private readonly network: Network,
        private readonly plt: Platform,
        // private readonly toast: ToastService,
        private _injector: Injector,
        private network: Network
 
    ) {
        this.plt.ready().then(() => {
            this.initializeNetworkEvents();
            const status = this.network.type !== 'none' ? ConnectionStatus.Online : ConnectionStatus.Offline;
            this.status.next(status);
        });
    }

    public initializeNetworkEvents() {
        this.network.onDisconnect().subscribe(() => {
            if (this.status.getValue() === ConnectionStatus.Online) {
                console.log('WE ARE OFFLINE');
                this.updateNetworkStatus(ConnectionStatus.Offline);
            }
        });
        this.network.onConnect().subscribe(() => {
            if (this.status.getValue() === ConnectionStatus.Offline) {
                console.log('WE ARE ONLINE');
                this.updateNetworkStatus(ConnectionStatus.Online);
            }
        });
    }

    private async updateNetworkStatus(status: ConnectionStatus) {
        this.status.next(status);
        const connection = status === ConnectionStatus.Offline ? 'Offline' : 'Online';
        if (connection === 'Online') {
            this._router.navigate(['app-home']);
        } else {
            this._router.navigate(['no-internet-connection']);
        }
        // this.toast.toastShow(`You are now ${connection}`);
    }

    public onNetworkChange(): Observable<ConnectionStatus> {
        return this.status.asObservable();
    }

    public getCurrentNetworkStatus(): ConnectionStatus {
        return this.status.getValue();
    }
}
