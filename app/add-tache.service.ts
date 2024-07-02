import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddTacheService {
private _addTacheUrl = "http://localhost:8080/tache/add";

  constructor(private http :HttpClient) { }
  AddTache  (tache:any){
    return this.http.post<any>(this._addTacheUrl , tache)
  }

  
}
