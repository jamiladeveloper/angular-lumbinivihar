import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  isadmin : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('admin') === 'true';
  }

}
