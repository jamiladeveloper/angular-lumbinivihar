import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  constructor(private http : HttpClient) { }

  getAllAnnouncements() {
    console.log("get all announcements");
    return this.http.get("http://localhost:8080/allannouncement");
  }

  addAnnouncement(data : any) : Observable<any> {
    console.log("calling service to save announcement : " + data);
    var postBody = {
      'id' : '',
      'datetime': new Date(),
      'title': data.title,
      'description': data.description,
      'active': 'true'
    }
    return this.http.post("http://localhost:8080/addannouncement", postBody);
  }
}
