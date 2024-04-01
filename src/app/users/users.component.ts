import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { User } from '../Interfaces/user';
import {Location} from '@angular/common';
import { slideInAnimation } from '../slideAnimate';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    slideInAnimation
  ]
})


export class UsersComponent implements OnInit {

  
  userInput:any=null;
  Users:User[]=[];
  pageChanged($event: number) {
    console.log($event)
    this.p=$event;

    this._UsersServcies.getUsers(this.p).subscribe({
      next:(res)=>{this.Users=res.data},
      error(err) {
          console.log(err)
      },
    })
    
    
    }
pageSize: number=6;
p: number=1;
total: number=12;
    constructor (private _UsersServcies:UsersService, private _Location:Location){}
  ngOnInit(): void {
    this._UsersServcies.getUsers(this.p).subscribe({
      next:(res)=>{this.Users=res.data},
      error(err) {
          console.log(err)
      },
    })
    localStorage.setItem('lastPage',this._Location.path())
    
}

Refresh(){
  this._UsersServcies.getUsers(this.p).subscribe({
    next:(res)=>{this.Users=res.data},
    error(err) {
        console.log(err)
    },
  })
}
ViewPage2(){
  this.p=this.p+1;
  this._UsersServcies.getUsers(this.p).subscribe({
    next:(res)=>{this.Users=res.data},
    error(err) {
        console.log(err)
    },
  })
  this.p=1;
}
}
// interface user {
   
//   id: number
//   email: string
//   first_name: string
//   last_name: string
//   avatar: string
// }

