import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SEOHomePage, SEOProductPage } from './models/seo-pages';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    data: { seo: SEOHomePage },
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'products',
    data: { seo: SEOProductPage },
    loadChildren: () => import('./modules/item/item.module').then(m => m.ItemModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
