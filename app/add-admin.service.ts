import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAdminService  {
  private _addAdminUrl = "http://localhost:8080/admin/addAdmin";


  constructor(private http:HttpClient) { }
  addAdmin ( admin :any){
    return this.http.post<any>(this._addAdminUrl , admin);
  }
}