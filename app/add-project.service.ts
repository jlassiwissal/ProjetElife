import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProjectService {
  private _addProjectUrl = "http://localhost:8080/projet/add";


  constructor(private http:HttpClient) { }
  AddProject (project :any){
    return this.http.post<any>(this._addProjectUrl , project);
  }
  getAllprojet(){
    return this.http.get<any[]>('http://localhost:8080/projet/all' );

  }
}
