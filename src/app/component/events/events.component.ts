import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  isadmin : boolean = false;

  events : any = '';

  event : any = '';
  displayEvent : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isadmin = localStorage.getItem('admin') === 'true';
    this.events = [
      { 'name': 'Shramin Shibir', 'date': '18 May 2022', 'id': '1'},
      { 'name': 'Buddha Poornima', 'date': '16 May 2022', 'id': '2'}
    ];
  }

  openEvent(id : string) {
    console.log('open event id : ' + id);
    this.displayEvent = true;
  }

  closeEvent() {
    this.displayEvent = false;
  }

}
