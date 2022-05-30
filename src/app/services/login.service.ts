import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) : Observable<any> {

    var postBody = {
      'phone': username,
      'password': password
    }

    return this.http.post("http://localhost:8080/authenticate", postBody);
  }

  isAuthenticated() {
    if (localStorage.getItem('isauthenticated') === 'true') {
      return true;
    }
    return false;
  }
}
