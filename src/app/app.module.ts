import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RoutModule } from './rout.module';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewlocationComponent } from './newlocation/newlocation.component';
import { NewstaffComponent } from './newstaff/newstaff.component';

import { CoopService } from './coop.service'
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NewlocationComponent,
    NewstaffComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CoopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
