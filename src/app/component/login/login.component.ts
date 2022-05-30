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

  formData: any;
  userId: string = '';
  password: string = '';
  errMsg: string = '';
  user: any;

  constructor(private loginService: LoginService, private router: Router) {
    this.formData = new FormGroup({
      userId: new FormControl(this.userId),
      password: new FormControl(this.password)
    });
  }

  ngOnInit(): void {
    this.errMsg = '';
  }

  login(data: any) {
    this.userId = data.userId;
    this.password = data.password;
    if (!this.loginService.isAuthenticated()) {
      this.loginService.authenticate(this.userId, this.password).subscribe(
        result => {
          this.user = result;
          console.log(this.user);

          if (this.user) {
            localStorage.removeItem('isauthenticated');
            localStorage.setItem('isauthenticated', 'true');
            localStorage.setItem('user', this.user.phone);
            localStorage.setItem('admin', this.user.isadmin);
            this.router.navigateByUrl('/home');
          }
        },
        error => {
          console.log(error);
          this.errMsg = 'User Id / Password is invalid';
        });
    }
  }

}
