import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddChefEquipeService  {
  private _addChefEquipeUrl = "http://localhost:8080/chefEquipe/addChefEquipe";


  constructor(private http:HttpClient) { }
  addChefEquipe (chefEquipe :any){
    return this.http.post<any>(this._addChefEquipeUrl , chefEquipe);
  }

  getallchef (){
    return this.http.get<any[]>("http://localhost:8080/chefEquipe/all");
  }
}