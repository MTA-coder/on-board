import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SEOProductPage } from 'src/app/models/seo-pages';
import { ItemComponent } from './item.component';

const routes: Routes = [{ path: '', data: { seo: SEOProductPage }, component: ItemComponent }];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
