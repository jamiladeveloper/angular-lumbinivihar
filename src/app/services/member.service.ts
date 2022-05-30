import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http : HttpClient) { }

  addMember(data : any) : Observable<any> {
    console.log("calling service to save member : " + data);
    var postBody = {
      'id' : '',
      'phone': data.phone,
      'password': data.password,
      'name': data.name,
      'address': data.address,
      'isadmin': data.admin,
      'designation': data.designation
    }
    return this.http.post("http://localhost:8080/addmember", postBody);
  }

  getAllMembers() : Observable<any> {
    console.log("get all members");
    return this.http.get("http://localhost:8080/allmembers");
  }

  getMemberByPhone(phone : string) {
    console.log("get member by phone");
    return this.http.get("http://localhost:8080/getmemberbyphone?phone=" + phone);
  }
}
