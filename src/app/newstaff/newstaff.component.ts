import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoopService } from '../coop.service';   // import service
import { NewstaffService } from './newstaff.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-newstaff',
  templateUrl: './newstaff.component.html',
  styleUrls: ['./newstaff.component.css']
})
export class NewstaffComponent {

  angForm: FormGroup;
  public details;
  public ddetail: string;
  public emails: string;
  public ages: string;
  public locationArray;

  constructor(private fb: FormBuilder, public coopService: CoopService, public newstarffService: NewstaffService) {
    this.createForm();
    this.details = [];
    this.locationArray = [];
  }
  createForm() {
    this.angForm = this.fb.group({
      name: [null, [Validators.required, Validators.pattern('^[a-zA-Z- ]+$'), Validators.minLength(4), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      age: [null, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]],
      location: [null, [Validators.required]]
    });
  }
  addDetail(param1: string, param2: string, param3: string, param4: string) {
    var box = { name: param1, email: param2, location: param3, age: param4 };
    console.log('box', box)
    this.details.push(box); {
      this.newstarffService.addNewStaff(box).subscribe(result => {
        console.log('responed from API:', result)
      })
    }
  }

  // addDetail(param1: string, param2: string, param3: string, param4: string) {
  //   var box = { name: param1, email: param2, location: param3, age: param4 };
  //   this.details.push(box);
  // }
  removeItem = function (index) {
    // this.details.splice(index, 1);
    // TODO: Create Service for delete data by ID
    // TODO2 : Express Create Routing by using XXXXXX.delete({_id:"XXXXXX"})
  }

  ngOnInit(params) {
    console.log('ALWAYS LOG THIS AFTER INIT:', this.locationArray, this.details)
   //this.locationArray = this.coopService.locationArray
    this.getuserList()
    this.getlocationList()
    // this.coopService.Outputlocation.subscribe((params) => {
    //   console.log('PARAMS:', params)
    //   this.locationArray = params;
    //   console.log('Location:', this.locationArray)
    // });
    //TODO: Create function for retrieve data from ExpressJS
    //TODO: Create Variables for store data Type: Array[{...something}] aka locationArray
    //TODO: Show data in template using *ngFor

  }
  getuserList() {
    this.newstarffService.userList().subscribe((params) => {
      console.log('DETAIL:',params)
      this.details = params
    });
  }
  getlocationList() {
    this.newstarffService.locationList().subscribe((params) => {
      console.log('LOCATION PAREMETER:',params)
      this.locationArray = params
    });
  }
}
