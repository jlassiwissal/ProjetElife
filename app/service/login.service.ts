import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _loginUrl = "http://localhost:8080/user/login";

  constructor(private http: HttpClient) { }
loginUser (user: any) {
  return this.http.post<any>(this._loginUrl , user);
}

}



