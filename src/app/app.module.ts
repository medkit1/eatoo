import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';

import { MaterialModule } from './core/material.module';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AboutComponent } from './login/about/about.component';
import { RegisterComponent } from './login/register/register.component';

import {FormsModule, ReactiveFormsModule}  from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ClassComponent } from './dashboard/class/class.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TweetComponent } from './dashboard/tweet/tweet.component';
import { AddclassComponent } from './dashboard/addclass/addclass.component';
import { AddlessonComponent } from './dashboard/addlesson/addlesson.component';
import { AdduserComponent } from './dashboard/adduser/adduser.component';
import { GetusersComponent } from './dashboard/getusers/getusers.component';
import { ErrormComponent } from './errorm/errorm.component';






const appRoutes : Routes =[
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    RegisterComponent,
    HeaderComponent,
    ClassComponent,
    TweetComponent,
    AddclassComponent,
    AddlessonComponent,
    AdduserComponent,
    GetusersComponent,
    ErrormComponent,
 
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule


    

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
