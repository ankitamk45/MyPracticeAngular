import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //constuctor is a method which invoked internally at the time component intialization
  constructor(private router : Router){}
    test(){
      this.router.navigateByUrl('test');
    }
    directiveCompo(){
      this.router.navigateByUrl('directive')
    }
    adminMod(){
      this.router.navigateByUrl('admin/adminLanding')
    }

}
