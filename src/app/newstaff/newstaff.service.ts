import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewstaffService {

  constructor(public http : HttpClient) { }

    //You can append here whatever you like in your headers;
  addNewStaff(params){
    return this.http.post('/api/saveuser',params)
  } 
  userList(){
    return this.http.get('/api/usersList')
  }
  locationList(){
    return this.http.get('/api/getlocation')
  }
  
}
