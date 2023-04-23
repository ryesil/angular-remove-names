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


const appRoutes:Routes=[
{path:'', component:WelcomeComponent},
{path:'form', component:FormComponent},
{path:'users', component:UsersComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    FormComponent,
    UsersComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [NamesProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
