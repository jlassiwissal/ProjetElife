import { Component , OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AddProjectService } from '../add-project.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent  implements OnInit{
  
  projectForm: FormGroup 
  step: any =1;
  constructor (private projectService:AddProjectService, private builder: FormBuilder, private router: Router ){
    this.projectForm= this.builder.group({
      "startDate":[],
      "endDate":[],
      "titre":[]
    })
  }
  ngOnInit(): void {
    
  }
  nextstep(){
    this.step=Number(Number(this.step)+1);
    console.log(this.step);
  }
  addMembre(){
    
   }

   addProject(){
    this.projectService.AddProject(this.projectForm.value).subscribe(res=>{
      console.log(res);
      this.nextstep();
    })
   }
}


