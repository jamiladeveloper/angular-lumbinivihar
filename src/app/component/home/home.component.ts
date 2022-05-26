import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isadmin : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('admin') === 'true';
  }

}
