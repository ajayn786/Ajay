import { EngService } from './eng.service';
import { Component } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'root';
  Data: any;
  response: any;
  row: any;
  constructor(private ser :EngService){

  }
  ngOnInit(){
    this.Data= timer(0, 1000).pipe(
      switchMap(() => this.ser.getData())
    ).subscribe(res =>{
      this.response=res;
      console.log("Data",this.response);
    })
  }
  selectRow(e){
    this.row=e;
  }
}
