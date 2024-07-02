import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AddMembreService } from '../add-membre.service';
import { AddProjectService } from '../add-project.service';
import { AddEquipeService } from '../add-equipe.service';

@Component({
  selector: 'app-add-membre',
  templateUrl: './add-membre.component.html',
  styleUrls: ['./add-membre.component.css']
})
export class AddMembreComponent implements OnInit{
  equipeList: any[]=[];
  projectForm: FormGroup 
  step: any =1;
  constructor (private equipeService: AddEquipeService , private projectService:AddProjectService, private builder: FormBuilder, private router: Router ){
    this.projectForm= this.builder.group({
      "startDate":[],
      "endDate":[],
      "titre":[],
      "description":[],
      "equipes":[]

    })
  }
  ngOnInit(): void {
    

    this.equipeService.getAllequipe().subscribe(res=>{
      this.equipeList=res;
    })
  }
  nextstep(){
    this.step=Number(Number(this.step)+1);
    console.log(this.step);
  }
  addMembre(){
    
   }

   addProject(){
    let arrayObj = 
      {
        id: this.projectForm.get('equipes')?.value
      };

      let listequipe = [];
      listequipe.push(arrayObj);
      this.projectForm.get('equipes')?.setValue(listequipe);
    this.projectService.AddProject(this.projectForm.value).subscribe(res=>{
      console.log(res);
      this.nextstep();
    })
   }
}


