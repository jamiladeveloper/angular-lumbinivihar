import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {

  announcements : any = '';

  constructor(private announcementService : AnnouncementService) { }

  ngOnInit(): void {

    this.getAllAnnouncements();
  }

  getAllAnnouncements() {
    this.announcementService.getAllAnnouncements().subscribe(
      result => {
        this.announcements = result;
        console.log(this.announcements);
      },
      error => {
        console.log(error);
      });
  }

}
