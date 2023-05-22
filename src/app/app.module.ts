import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { NamesProviderService } from './names-provider.service';
import {Routes, RouterModule} from '@angular/router';
import { FormComponent } from './form/form.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { PostComponent } from './post/post.component';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthInterceptorService } from './post/auth-interceptor.service';
import { LoggingInterceptorService } from './post/logging-interceptor.service';


const appRoutes:Routes=[
{path:'', component:WelcomeComponent},
{path:'form', component:FormComponent},
{path:'users', component:UsersComponent},
{path:'assignment', component:AssignmentComponent},
{path:'fire-base' ,component:PostComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    FormComponent,
    UsersComponent,
    WelcomeComponent,
    AssignmentComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [NamesProviderService,
    {provide:HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:LoggingInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
