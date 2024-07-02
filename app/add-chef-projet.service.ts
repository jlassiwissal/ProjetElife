import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddChefProjetService  {
  private _addChefProjetUrl = "http://localhost:8080/chefProjet/addChefProjet";


  constructor(private http:HttpClient) { }
  addChefProjet (chefProjet :any){
    return this.http.post<any>(this._addChefProjetUrl , chefProjet);
  }
}
