import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newslist : any = '';

  constructor() { }

  ngOnInit(): void {
    this.newslist = [
      { 'timestamp': '25-05-2022', 'title': 'Shibir on 31 May 2022', 'description': 'We have a 1 day meditation shibir arranged at Lumbini Bauddha Vihar on 31st May 2022. Request you to please contact XYZ for registration'},
      { 'timestamp': '23-05-2022', 'title': 'Poornima dinner invitation', 'description': 'Invite you to Buddha Poornima Dinner at Lumbini Bauddha Vihar on 2nd July 2022 at 7 PM.'},
      { 'timestamp': '26-05-2022', 'title': 'Meeting for committee members', 'description': 'This is a internal committee meeting held at Lumbini Bauddha Vihar on coming Sunday at 9 AM.'}
    ];
  }

}
