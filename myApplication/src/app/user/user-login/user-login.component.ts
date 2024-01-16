import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
'name'= "ankita";
isShowPass= false ;
  login(data:any){
      console.log(data);
      let userName = data.uName.replace(/\$+g/, ' ');
      console.log(userName);
      let request = {
        "UserName": userName,
        "Password": data.Password
      }
      }
  toShowPassword()
  {
    this.isShowPass = !this.isShowPass;
  }
  log()
  {

  }
}
