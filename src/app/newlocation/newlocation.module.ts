import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { NewlocationComponent } from './newlocation.component';

import { CoopService } from '../coop.service';
@NgModule({
  declarations: [NewlocationComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [CoopService],
  bootstrap: [NewlocationComponent]
})
export class NewlocationModule { }
