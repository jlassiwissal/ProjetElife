import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AddChefEquipeService } from '../add-chef-equipe.service';


@Component({
  selector: 'app-add-chef-equipe',
  templateUrl: './add-chef-equipe.component.html',
  styleUrls: ['./add-chef-equipe.component.css']
})
export class AddChefEquipeComponent  implements OnInit{
  
  addChefEquipeForm: FormGroup; 

  constructor (private addChefEquipeService : AddChefEquipeService , private builder: FormBuilder, private router: Router ){
    this.addChefEquipeForm= this.builder.group({
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
  addChefEquipe(){
    this.addChefEquipeService .addChefEquipe  (this.addChefEquipeForm.value).subscribe(resultat=>{
       console.log('Chef Equipe created ',resultat);
       if(resultat!=null){
         this.router.navigate(['/home']);
       }
       else{
         alert('verifie your password  ');
       }
       
     })
   }
   }

