import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddMembreService  {
  private _addMembreUrl = "http://localhost:8080/membre/addMembre";


  constructor(private http:HttpClient) { }
  AddMembre (membre :any){
    return this.http.post<any>(this._addMembreUrl , membre);
  }

  getAllMembre(){
    return this.http.get<any[]>('http://localhost:8080/membre/all' );

  }
}