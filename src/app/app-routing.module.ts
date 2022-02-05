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
import { TrashnotesComponent } from './trashnotes/trashnotes.component';
import { ArchivenotesComponent } from './archivenotes/archivenotes.component';


const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotemail', component: ForgotemailComponent },
 
  { path: 'resetPassword/:token', component: ResetpasswordComponent },
  
 {path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', redirectTo: "/dashboard/notes", pathMatch: 'full' },
      { path: 'notes', component: GetallComponent },
      { path: 'deletenotes', component: TrashnotesComponent},
      { path:'archivenotes', component: ArchivenotesComponent}
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
