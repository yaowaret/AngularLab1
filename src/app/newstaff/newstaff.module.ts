import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';

import { NewstaffComponent } from './newstaff.component';
import { RoutModule} from '../rout.module'
import { CommonModule } from '@angular/common';

import { CoopService } from '../coop.service';
import {NewstaffService } from'./newstaff.service'

@NgModule({
  declarations: [NewstaffComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RoutModule
  ],
  providers: [CoopService,NewstaffService],
  bootstrap: [NewstaffComponent]
})
export class NewstaffModule { }
