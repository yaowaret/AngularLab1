import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewlocationService {

  constructor(public http: HttpClient) { }
  //TODO : Create type for params 
  addNewLocation(params) {
    return this.http.post('/api/addlocation', params)
  }
}
