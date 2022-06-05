import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewLandingComponent } from './view-landing/view-landing.component';

const routes: Routes = [
  {
    path: "",
    component: ViewLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
