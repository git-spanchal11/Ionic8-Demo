import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ApploadPage } from './appload.page';

const routes: Routes = [
  {
    path: '',
    component: ApploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApploadPageRoutingModule {}
