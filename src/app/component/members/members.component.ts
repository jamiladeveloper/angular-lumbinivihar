import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members : any = '';

  constructor() { }

  ngOnInit(): void {
    this.members = [
      {'id': '1', 'name': 'Sukhdev Ghade', 'designation': 'Chairman'},
      {'id': '2', 'name': 'Ravindra Ghade', 'designation': 'President'},
      {'id': '3', 'name': 'Hemant Ghade', 'designation': 'Vice President'},
      {'id': '4', 'name': 'Prakash Ingle', 'designation': 'Member'},
      {'id': '5', 'name': 'Amoghdarshini', 'designation': 'Member'},
      {'id': '6', 'name': 'Vikram Prasad', 'designation': 'Treasurer'}
    ]
  }

}
