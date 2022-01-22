import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';

const routes: Routes = [
 { path: 'register' , component:RegistrationComponent },
 { path: 'login' , component:LoginComponent },
 { path: 'resetpassword' , component:ResetpasswordComponent },
 { path: 'forgotemail' , component:ForgotemailComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
