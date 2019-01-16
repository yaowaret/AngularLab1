import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { NewstaffComponent } from './newstaff/newstaff.component';
import { NewlocationComponent } from "./newlocation/newlocation.component";

const appRoutes: Routes = [
  { path: 'newlocation', component: NewlocationComponent },
  { path: 'newstraff', component: NewstaffComponent },
  // { path: '',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ], 
  exports: [
    RouterModule
  ]
})
export class RoutModule { }
