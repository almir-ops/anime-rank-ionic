import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsRoutingModule, 
    FormsModule,
    IonicModule,
  ]
})
export class NewsModule { }
