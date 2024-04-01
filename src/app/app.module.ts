import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule, NoopAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CacheInterceptor } from './Interceptor/cache.interceptor';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerInterceptor } from './spinner.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailComponent,
    NotFoundComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    MatButtonModule,
    MatCardModule,MatDividerModule,MatIconModule,MatInputModule,MatFormFieldModule,FormsModule,NoopAnimationsModule
  ],
  providers: [   {
     provide: HTTP_INTERCEPTORS,
     useClass: CacheInterceptor,
     multi: true,
   },

  {provide:HTTP_INTERCEPTORS , useClass:SpinnerInterceptor, multi:true},
  provideAnimations(),

   
],
  bootstrap: [AppComponent]
}

)

export class AppModule { }
