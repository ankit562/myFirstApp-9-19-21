import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First App';
  signupForm: FormGroup;
  FirstName: string="";
  LastName: string="";
  Email: string="";
  password: string="";
  constructor (private frmbuilder:FormBuilder) {
    this.signupForm=frmbuilder.group({
    fname: new FormControl(),
    lname: new FormControl(),
    Emailid: new FormControl(),
    userpassword: new FormControl()
    });
  }
  ngOnInit () {
  
  }
  PostData(signupForm:NgForm) {
    console.log(signupForm.controls);
  }
}

