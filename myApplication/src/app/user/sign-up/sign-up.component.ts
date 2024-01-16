import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  SignUpForm!:FormGroup;
  hide = true;


constructor(private FormBuilder : FormBuilder){}


  ngOnInit(){
    this.formDetails();
  }
 
  formDetails(){
    this.SignUpForm = this.FormBuilder.group({
      fullName:['',[Validators.required]],
      mob:[null,[Validators.maxLength(12),Validators.pattern("^[0-9]*$")]],
      gender:[],
      pan:[],
      password:[],
      confirmpass:[]  

    })
    
  }
}
