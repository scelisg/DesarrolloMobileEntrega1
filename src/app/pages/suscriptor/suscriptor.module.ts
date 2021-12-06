import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuscriptorPageRoutingModule } from './suscriptor-routing.module';

import { SuscriptorPage } from './suscriptor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuscriptorPageRoutingModule
  ],
  declarations: [SuscriptorPage]
})
export class SuscriptorPageModule {}
