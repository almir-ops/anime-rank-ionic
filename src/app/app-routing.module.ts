import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListAnimesComponent } from './pages/list-animes/list-animes.component';
import { NewsComponent } from './pages/news/news.component';
import { RanksComponent } from './pages/ranks/ranks.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: ListAnimesComponent
  },
  {
    path: 'news',
    component: NewsComponent
  },
  {
    path: 'ranks',
    component: RanksComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
