import { Injectable } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoopService {
  @Output() Outputlocation = new EventEmitter<any>();
  locationArray = [];
  details = [];
  constructor() { }

  addNewLocation(params) {
    console.log('Value from newLocation', params)

    this.locationArray.push(params)
    this.Outputlocation.emit(this.locationArray)
    // this.details.push(params)
    // this.Outputlocation.emit(this.details)
  }

}
