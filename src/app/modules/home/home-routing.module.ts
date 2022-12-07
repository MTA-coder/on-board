import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SEOHomePage } from 'src/app/models/seo-pages';
import { HomeComponent } from './home.component';

const routes: Routes = [{ path: '', data: { seo: SEOHomePage }, component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
