import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UsersComponent } from './users/users.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { animation } from '@angular/animations';
import { slideInAnimation } from './slideAnimate';

const routes: Routes = [


  {path:"",redirectTo:"users",pathMatch:"full",},
  {path:"userDetail/:id", component:UserDetailComponent,data: {animation: 'userDetails'}},
  {path:"users", component:UsersComponent,data: {animation: 'users'}},

  {path:"**" , component:NotFoundComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
