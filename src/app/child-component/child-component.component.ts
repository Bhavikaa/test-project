import { Component, Input, OnInit, OnChanges, SimpleChanges, SimpleChange,ChangeDetectionStrategy  } from '@angular/core';
import { Customer } from '../customer';
 
@Component({
    selector: 'child-component',
    template: `<h2>Child  Component</h2>
               <p>Message </p>
               <p>Customer naem {{ customer.name }} </p>
               <p>{{changeCount}}</p>
               <button (click)="add()">Add</button>
               <ng-content></ng-content>
               <!--ul><li *ngFor="let log of changelog;"> {{ log }}</li></ul--> `
})
export class ChildComponent implements OnChanges, OnInit {
    @Input() message: string="";
    @Input() customer: Customer=new Customer();
    changelog: string[] = [];
    changeCount=0;
    checkCount=0;
 
    ngOnInit() {
        
      console.log('ChildComponent:OnInit');
    
    }
     add(){
      this.changeCount++;
 
    }
    ngOnChanges(changes: SimpleChanges) {
        console.log('OnChanges');
        //console.log(JSON.stringify(changes));
        //console.log("changecount"+this.changeCount++);
       // this.changeCount++;
 
        // tslint:disable-next-line:forin
        for (const propName in changes) {
             const change = changes[propName];
             const to  = JSON.stringify(change.currentValue);
             const from = JSON.stringify(change.previousValue);
             const changeLog = `${propName}: changed from ${from} to ${to} `;
             this.changelog.push(changeLog);
        }
    }
    ngDoCheck(){
    // console.log("checkCOunt"+this.checkCount++);
     
    }
    ngAfterContentInit(){
      console.log("i am in content init")
    }
    ngAfterContentChecked(){
      console.log("i am in content check")
    }
    ngOnDestroy() {
      console.log('ChildComponent:OnDestroy');
    }
}
 