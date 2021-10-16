import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RickPageRoutingModule } from './rick-routing.module';

import { RickPage } from './rick.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RickPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RickPage]
})
export class RickPageModule {}
