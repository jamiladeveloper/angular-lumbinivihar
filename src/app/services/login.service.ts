import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  memberDetails: any;

  data : any = {
    "collection": "members",
    "database": "lumbini",
    "dataSource": "Cluster0",
    "filter": {}
  };

  authenticate(username: string, password: string) {

    this.memberDetails = this.getMember(username);

    console.log(this.memberDetails);

    if(this.memberDetails.password === password) {
      localStorage.removeItem('isauthenticated');
      localStorage.setItem('isauthenticated', 'true');
      localStorage.setItem('user', username);
      return true;
    }
    return false;
  }

  isAuthenticated() {
    if (localStorage.getItem('isauthenticated') === 'true') {
      return true;
    }
    return false;
  }

  get(id: string): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  getMember(username: string) {
    console.log('fetching member details');
    
    this.data.filter.memberId = username;

    this.data = JSON.stringify(this.data);

    console.log(this.data);

    const headers = {'Content-Type': 'application/json','api-key' : '6wKdCqTrJbca6uHFj6TxNPgRaEpqYoBBDK9h9dh4kPEmW5o4Qog3V1VY63hrMOZF'};

    return this.http.post<any>('https://data.mongodb-api.com/app/data-iivof/endpoint/data/beta/action/findOne', {title: 'POST call to get Member'}, {headers}).subscribe(this.data);
  }

  /*create(data : any): Observable<any> {
    return this.http.post(baseUrl, data);
  }
  
  update(id : string, data : any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id : string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByKey(key : string, value : string): Observable<any> {
    return this.http.get(`${baseUrl}?${key}=${value}`);
  }*/

}
