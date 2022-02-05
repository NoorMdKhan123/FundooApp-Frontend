import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ForgotemailComponent } from './components/forgotemail/forgotemail.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
 import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
 import {MatIconModule} from '@angular/material/icon';
import { CreateNoteComponent } from './create-note/create-note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { GetallComponent } from './getall/getall.component';
import { DisplayNotesComponent } from './display-notes/display-notes.component';
import { IconsComponent } from './icons/icons.component';
import {MatDialogModule} from '@angular/material/dialog';
import { UpdatenotesComponent } from './updatenotes/updatenotes.component';
import { TrashnotesComponent } from './trashnotes/trashnotes.component';
import {MatMenuModule} from '@angular/material/menu';
import { ArchivenotesComponent } from './archivenotes/archivenotes.component';







@NgModule({
  
  declarations: [			
    
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ForgotemailComponent,
    ResetpasswordComponent,
    DashboardComponent,
    CreateNoteComponent,
    GetallComponent,
    DisplayNotesComponent,
    IconsComponent,
      UpdatenotesComponent,
      TrashnotesComponent,
      ArchivenotesComponent
   ],
  imports: [
    
    FormsModule,
    BrowserModule,
    MatInputModule,
    HttpClientModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatCardModule,
    FormsModule,ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
