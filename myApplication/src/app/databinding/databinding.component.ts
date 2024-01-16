import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
   //let a =10;
   title = 'myApplication';
   //propertyname : datatype =  value;
 
   a = 10;
   b : number=10;
   c! : number;
   city : string="pune"
   
   //databinding-->one way binding and two way binding
   //1.One way data binding: one data binding where html templated is chagnged when we makes chages in typescript
   // --.1.string interpolation-->syantax: {{propertyname}}--symbol:{{}}
                         // -->2.property binding_--->==>syntax://[attribut]="propertyName"--symbol:[]
                         // -->3.event bindind--> on event data will bind to the property--->symbol:()
   //2.Two way data binding==>Automatice synchonization of the data happend model and the view
           //1. [(ngmodel)]="propertyName"-->symbo:[()]
   
   myName = "ankita";
   isDisabled = false;
   fruit!:string;
   favFruit = "mango"
   constructor(){}
   submit(){
     this.fruit = "mango";
   }
 
 }
 
 

