import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AnnouncementService } from 'src/app/services/announcement.service';

@Component({
  selector: 'app-admin-announcement',
  templateUrl: './admin-announcement.component.html',
  styleUrls: ['./admin-announcement.component.css']
})
export class AdminAnnouncementComponent implements OnInit {

  title: string = '';
  description: string = '';
  formData: any;

  announcements: any = '';

  serviceMsg: string = '';

  constructor(private announcementService: AnnouncementService) { }

  ngOnInit(): void {
    this.formData = new FormGroup({
      title: new FormControl(this.title),
      description: new FormControl(this.description)
    });

    this.getAllAnnouncements();

  }

  submitAnnouncement(data: any) {
    this.announcementService.addAnnouncement(data).subscribe(
      result => {
        this.announcements = result;
        console.log(this.announcements);
      },
      error => {
        console.log(error);
      }
    );
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
