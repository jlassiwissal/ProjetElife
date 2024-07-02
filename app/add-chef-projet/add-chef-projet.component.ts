import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AddChefProjetService } from '../add-chef-projet.service';

@Component({
  selector: 'app-add-chef-projet',
  templateUrl: './add-chef-projet.component.html',
  styleUrls: ['./add-chef-projet.component.css']
})
export class AddChefProjetComponent implements OnInit{
  
  addChefProjetForm: FormGroup; 

  constructor (private addChefProjetService: AddChefProjetService, private builder: FormBuilder, private router: Router ){
    this.addChefProjetForm= this.builder.group({
      "nom":[],
      "prenom":[],
      "mail":[],
      "username":[],
      "password":[],
      "role":[]
    })
  }
  ngOnInit(): void {
    
  }
  addChefProjet(){
    this.addChefProjetService.addChefProjet (this.addChefProjetForm.value).subscribe(resultat=>{
       console.log('Chef Projet created',resultat);
       if(resultat!=null){
         this.router.navigate(['/home']);
       }
       else{
         alert('verifie your password  ');
       }
       
     })
   }
   }{

}
