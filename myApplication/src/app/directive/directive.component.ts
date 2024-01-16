import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
  showDiv : boolean = true;
  listItem = ['coffee','tea','milk','coffee','tea','milk','coffee','tea','milk'];
   color = "black";
  bgColorName:any = 'red';
  color2:any = "red";
  journey:any = "user";
  toggle(){
    //this.showDiv = false;
    this.showDiv = !this.showDiv;
  }
  getColor(){
    return this.bgColorName
  }
}
