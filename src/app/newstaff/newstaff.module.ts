import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';

import { NewstaffComponent } from './newstaff.component';
import { RoutModule } from '../rout.module';
import { CommonModule } from '@angular/common';

import { CoopService } from '../coop.service';
import { NewstaffService } from './newstaff.service';

@NgModule({
  declarations: [NewstaffComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutModule
  ],
  providers: [CoopService, NewstaffService],
  bootstrap: [NewstaffComponent]
})
export class NewstaffModule {}
