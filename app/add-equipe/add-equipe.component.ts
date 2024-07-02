import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AddEquipeService } from '../add-equipe.service';
import { AddMembreService } from '../add-membre.service';
import { AddChefEquipeService } from '../add-chef-equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit{
Continue() {
throw new Error('Method not implemented.');
}
  
addEquipeForm: FormGroup; 
userList:any[]=[];
chefList:any[]=[];
chackedlist: any[]=[];
  constructor (private chefService: AddChefEquipeService,private membreservice: AddMembreService,private addEquipeService: AddEquipeService, private builder: FormBuilder, private router: Router ){
    this.addEquipeForm= this.builder.group({
      "nomEquipe":[],
      "chefEquipe":[],
      "membres":[]
      
    })
  }
  ngOnInit(): void {
    this.membreservice.getAllMembre().subscribe(res=>{
      console.log(res);
      this.userList= res;
    })

    this.chefService.getallchef().subscribe(res=>{
      console.log(res);
      this.chefList= res;
    })
  }
  addEquipe(){
    let arrayObj = 
      {
        id: this.addEquipeForm.get('chefEquipe')?.value
      };
   // this.addEquipeForm.get('chefEquipe')?.setValue({'id':this.addEquipeForm.get('chefEquipe')?.value})
   this.addEquipeForm= this.builder.group({
    "nomEquipe":[this.addEquipeForm.get('nomEquipe')?.value],
    "chefEquipe":[arrayObj],
    "membres":[this.addEquipeForm.get('membres')?.value]
    
  })
    this.addEquipeService.AddEquipe (this.addEquipeForm.value).subscribe(resultat=>{
       console.log('Team Created',resultat);
       if(resultat!=null){
         this.router.navigate(['/home']);
       }
       else{
         alert('verifie  ');
       }
       
     })
   }


   addMembre(membre : any, event: any){
    console.log(membre)
    console.log(event)
    this.chackedlist.push(membre);
    this.addEquipeForm.get('membres')?.setValue(this.chackedlist)
    console.log(this.addEquipeForm.value)
   }
   }

