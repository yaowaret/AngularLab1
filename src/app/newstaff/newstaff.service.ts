import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewstaffService {

  constructor(public http : HttpClient) { }

  register() {
    //You can append here whatever you like in your headers;
    console.log("error")
    const Url = "/api"
    let body = {
      newstudent: "Pook"
    }
    return this.http.get(Url)
  } 
}
