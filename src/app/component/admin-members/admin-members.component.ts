import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-admin-members',
  templateUrl: './admin-members.component.html',
  styleUrls: ['./admin-members.component.css']
})
export class AdminMembersComponent implements OnInit {

  showAddMember: boolean = false;
  showUpdateMember: boolean = false;

  name: string = '';
  password: string = '';
  phone: string = '';
  admin: boolean = false;
  serviceMsg : string = '';

  formData: any;


  members: any = '';
  member: any = '';

  constructor(private memberService: MemberService) { }

  ngOnInit(): void {
    /*this.members = [
      {'id': '1', 'name': 'Sukhdev Ghade', 'designation': 'Chairman'},
      {'id': '2', 'name': 'Ravindra Ghade', 'designation': 'President'},
      {'id': '3', 'name': 'Hemant Ghade', 'designation': 'Vice President'},
      {'id': '4', 'name': 'Prakash Ingle', 'designation': 'Member'},
      {'id': '5', 'name': 'Amoghdarshini', 'designation': 'Member'},
      {'id': '6', 'name': 'Vikram Prasad', 'designation': 'Treasurer'}
    ];*/
    this.serviceMsg = '';
    
    this.getAllMembers();
    

    this.formData = new FormGroup({
      name: new FormControl(this.name),
      password: new FormControl(this.password),
      phone: new FormControl(this.phone),
      admin: new FormControl(this.admin)
    });
  }

  addMember() {
    this.showAddMember = true;
    this.showUpdateMember = false;
    this.serviceMsg = '';
  }

  updateMember() {
    this.serviceMsg = '';
    this.showAddMember = false;
    this.showUpdateMember = true;
    this.getAllMembers();
  }

  showMember(memberId: string) {
    console.log(memberId);
  }

  submitMember(data: any) {
      this.memberService.addMember(data).subscribe(
        result => {
          console.log(result.response);
          this.serviceMsg = result.response;
        },
        error => {
          console.log(error);
        }
      );
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
