import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  isadmin : boolean = false;

  showAnnouncements : boolean = false;
  showNews : boolean = false;
  showEvents : boolean = false;
  showMembers : boolean = false;
  showDonations : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('admin') === 'true';
  }

  displayAnnouncements() {
    this.showAnnouncements = true;
    this.showNews = false;
    this.showDonations = false;
    this.showMembers = false;
    this.showEvents = false;
  }

  displayNews() {
    this.showAnnouncements = false;
    this.showNews = true;
    this.showDonations = false;
    this.showMembers = false;
    this.showEvents = false;
  }

  displayEvents() {
    this.showAnnouncements = false;
    this.showNews = false;
    this.showDonations = false;
    this.showMembers = false;
    this.showEvents = true;
  }

  displayMembers() {
    this.showAnnouncements = false;
    this.showNews = false;
    this.showDonations = false;
    this.showMembers = true;
    this.showEvents = false;
  }

  displayDonations() {
    this.showAnnouncements = false;
    this.showNews = false;
    this.showDonations = true;
    this.showMembers = false;
    this.showEvents = false;
  }

}
