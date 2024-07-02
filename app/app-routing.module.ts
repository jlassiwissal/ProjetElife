import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { TacheComponent } from './tache/tache.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddEquipeComponent } from './add-equipe/add-equipe.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { AddMembreComponent } from './add-membre/add-membre.component';
import { AddChefEquipeComponent } from './add-chef-equipe/add-chef-equipe.component';
import { AddChefProjetComponent } from './add-chef-projet/add-chef-projet.component';
import { ProjetComponent } from './projet/projet.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ListTacheComponent } from './list-tache/list-tache.component';


const routes: Routes = [
  
  {path: '', component: ConnexionComponent },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'forgotPass', component: ForgotPassComponent },
  
  {path: 'Acceuil', component: AcceuilComponent },
 

  
  {path: 'home', component: HomeComponent  , children:[
    {path: 'table', component: TableComponent },
    {path: 'addEmployee', component: AddEmployeeComponent },
    {path: 'AddEquipe', component: AddEquipeComponent },
    {path: 'AddAdmin', component: AddAdminComponent},
    {path: 'AddMembre', component: AddMembreComponent},
    {path: 'AddChefEquipe', component: AddChefEquipeComponent },
    {path: 'AddChefProjet', component: AddChefProjetComponent },
    {path: 'MyProjects', component: MyProjectsComponent },
    {path: 'ListTache', component: ListTacheComponent },

   
    {path: 'tache', component: TacheComponent },
    {path: 'Projet', component: ProjetComponent },
  

  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
