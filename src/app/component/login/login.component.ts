import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData : any;
  userId : string = '';
  password : string = '';
  errMsg : string = '';

  constructor(private loginService : LoginService, private router : Router) { 
    this.formData = new FormGroup({
      userId: new FormControl(this.userId),
      password: new FormControl(this.password)
    });
  }

  ngOnInit(): void {
    this.errMsg = '';
  }

  login(data : any) {
    this.userId = data.userId;
    this.password = data.password;
    if(!this.loginService.isAuthenticated()) {
      if(this.loginService.authenticate(this.userId, this.password)) {
        this.router.navigateByUrl('/home');
      }
      else {
        console.log('invalid')
        this.errMsg = 'User Id / Password is invalid';
      }
    }
  }

}
