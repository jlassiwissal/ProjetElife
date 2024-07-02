import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddEquipeService  {
  private _addEquipeUrl = "http://localhost:8080/equipe/addequipe";
  
    constructor(private http :HttpClient) { }
    AddEquipe  (equipe:any){
      return this.http.post<any>(this._addEquipeUrl , equipe)
    }

    getAllequipe(){
      return this.http.get<any[]>('http://localhost:8080/equipe/all' );
  
    }
  }
