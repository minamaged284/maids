import { Component, OnInit } from '@angular/core';
import { User } from '../Interfaces/user';
import { UsersService } from '../Services/users.service';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { slideInAnimation } from '../slideAnimate';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  animations: [
    slideInAnimation
  ]
})
export class UserDetailComponent implements OnInit {
  Users:User={
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    avatar: '',
  }
id:string='';
  currentPageNum:number=1;
    constructor (private _UsersServcies:UsersService, private _Location:Location,private _ActivatedRoute:ActivatedRoute,){}
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe((par)=>{this.id=par['id'];
    console.log(this.id)
    })
    this._UsersServcies.getUserById(this.id).subscribe({
      next:(res)=>{this.Users=res.data
      console.log(this.Users)},
      error(err) {
          console.log(err)
      },
    })
    localStorage.setItem('lastPage',this._Location.path())

  }
}
