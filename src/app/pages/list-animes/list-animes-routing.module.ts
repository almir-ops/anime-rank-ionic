import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { ListAnimesComponent } from './list-animes.component';

const routes: Routes = [
  {
    path: '',
    component: ListAnimesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListAnimesRoutingModule { }
