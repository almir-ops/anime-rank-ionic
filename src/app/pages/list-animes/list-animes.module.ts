import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserModule } from '@angular/platform-browser';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule,
    PipesModule
  ],
  declarations: []
})
export class ListAnimesModule { }
