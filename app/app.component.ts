import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  password : string;
  empId : string;

  constructor() {
    this.empId = ""; 
    this.password = "";
  }

  ngOnInit() { }

  login() {
    this.title = this.empId;
    console.log('login done. Emp ID='+ this.empId);
  }
}
