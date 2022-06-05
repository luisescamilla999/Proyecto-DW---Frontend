import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';


const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
    children: [
      {
         path: "home",
         loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
