import { Component, OnInit } from '@angular/core';
// Import FormGroup and FormControl classes
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  public results: any; // Change it private to public
  // This FormGroup contains fullName and Email form controls
  employeeForm: FormGroup;

  constructor() { 
    this.employeeForm = new FormGroup({
    fullName: new FormControl(),
    email: new FormControl()
  });
}

  // Initialise the FormGroup with the 2 FormControls we need.
  // ngOnInit ensures the FormGroup and it's form controls are
  // created when the component is initialised
  ngOnInit() {
  }
  onSubmit() {
    console.log(this.employeeForm.value);
  }
}
