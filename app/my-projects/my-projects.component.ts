import { Component, OnInit } from '@angular/core';
import { AddProjectService } from '../add-project.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.css']
})
export class MyProjectsComponent implements OnInit{

  listProject:any[]=[];

  constructor(private projectService: AddProjectService){

  }
  ngOnInit(): void {
    this.projectService.getAllprojet().subscribe(res=>{
      this.listProject=res;
    })
  }

}
