import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SingupService } from 'src/app/service/singup.service';
import { LocalStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  dataLogin = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  dataUser: any;
  constructor(private router: Router,private registerService: SingupService,public local: LocalStorageService) { }
  loginPass: Boolean = false;
  ngOnInit(): void {
  }
  Login() {
    const data = {
      password: this.dataLogin.value.password,
      username: this.dataLogin.value.username
    };
    if(data.password !== '' && data.username !== '') {
      this.registerService.findByUser(data.username, data.password)
        .subscribe(
          response => {
              console.log(response);
              this.dataUser = response;
              if(this.dataUser.status == true){
                this.local.set('customer',this.dataUser,1,'w');
                this.loginPass = true;
                alert("i see!");
            }
          },
          error => {
            console.log(error);
          });
  }
  }
}
