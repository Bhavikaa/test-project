import { Component } from '@angular/core';
import { ChildComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  template: `
        <h1>{{title}}!</h1>
        <h1>{{count+1}}</h1>
        <p> Message : <input type='text' [(ngModel)]='message'> </p>
        <p> Code : <input type='text' [(ngModel)]='code'></p>
        <p> Name : <input type='text' [(ngModel)]='name'></p>
        <p><button (click)="updateCustomer()">Update </button>
        <button (click)="toggle()">Hide/Show Child </button>
      <child-component *ngIf="displayChild" [message]="message"><p>this is from parent {{message}}</p></child-component>
       `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngOnChanges';
  message = '';
  customer: Customer = new Customer();
  name = '';
  code = 0;
  count = 0;

  displayChild = true;

  constructor() {
    console.log('AppComponent:Constructor');
  }

  toggle() {
    this.displayChild = !this.displayChild;
  }

  ngOnInit() {
    console.log('AppComponent:OnInit');
  }


  ngOnDestroy() {
    console.log('AppComponent:OnDestroy');
  }
  ngAfterViewChecked() {
    console.log("ngAAfterVIewChecked");
  }
  updateCustomer() {
    this.customer.name = this.name;
    this.customer.code = this.code;
  }

}
export class Customer {
  code: number = 0;
  name: string = "";
  constructor() {

  }
}
