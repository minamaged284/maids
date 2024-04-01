import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  constructor(private _Router:Router){}
  lastpage:any=localStorage.getItem('lastPage')
  LastPage(){
    this._Router.navigate([this.lastpage])
  }
}
