import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import { ProjectComponent } from 'src/app/components/project/project.component';
import { CompanyComponent } from 'src/app/components/company/company.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, ProjectComponent, CompanyComponent],
  exports: [ProjectComponent, CompanyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class ProfilePageModule {}
