import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';


import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { TacheComponent } from './tache/tache.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddMembreComponent } from './add-membre/add-membre.component';
import { AddChefEquipeComponent } from './add-chef-equipe/add-chef-equipe.component';
import { AddChefProjetComponent } from './add-chef-projet/add-chef-projet.component';
import { AddTimesheetComponent } from './add-timesheet/add-timesheet.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ListTacheComponent } from './list-tache/list-tache.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DashboardComponent,
    RegisterComponent,
    ForgotPassComponent,
    TableComponent,
    HomeComponent,
    NavbarComponent,
    SidbarComponent,
    FooterComponent,
    TacheComponent,
    AddEmployeeComponent,
    AddEquipeComponent,
    AddAdminComponent,
    AddMembreComponent,
    AddChefEquipeComponent,
    AddChefProjetComponent,
    AddTimesheetComponent,
    MyProjectsComponent,
    ListTacheComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
