import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ApploadPageRoutingModule } from './appload-routing.module';

import { ApploadPage } from './appload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ApploadPageRoutingModule
  ],
  declarations: [ApploadPage]
})
export class ApploadPageModule {}
