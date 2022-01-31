import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { IconsComponent } from './icons/icons.component';
import { GetallComponent } from './getall/getall.component';

const routes: Routes = [
 { path: 'register' , component:RegistrationComponent },
 { path: 'login' , component:LoginComponent },

 { path: 'forgotemail' , component:ForgotemailComponent },
 { path: 'resetPassword/:token' , component:ResetpasswordComponent },
 { path:'dashboard',component:DashboardComponent},
 { path:'createnote', component:CreateNoteComponent},
 { path:'getallnotes', component:GetallComponent},
 { path:'icons', component:IconsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
