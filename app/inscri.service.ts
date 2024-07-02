import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InscriService {

  
    private _inscriUser = "http://localhost:8080/user/inscri";
  
    constructor(private http: HttpClient) { }
      inscriUser ( user: any) {
        return this.http.post<any>(this._inscriUser , user);
      }
    
}
