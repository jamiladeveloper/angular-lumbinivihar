import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members : any = '';

  constructor(private memberService : MemberService) { }

  ngOnInit(): void {
    this.getAllMembers();
  }

  getAllMembers() {
    this.memberService.getAllMembers().subscribe(
      result => {
        this.members = result;
        console.log(this.members);
      },
      error => {
        console.log(error);
      });
  }

}
