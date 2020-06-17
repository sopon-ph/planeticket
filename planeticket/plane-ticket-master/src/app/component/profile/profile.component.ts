import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SingupService } from 'src/app/service/singup.service';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any
  name:string
  sex:string
  email:string
  phone:string
  Province:string
  district:string
  parish:string
  zip:string
  Hnum:string
  img:string
  constructor(private router: Router, private registerService: SingupService,public local: LocalStorageService) {
    this.start()
   }

  ngOnInit(): void {
    
  }
  start(){
    try {
      this.registerService.getUser(this.local.get('customer').result.username).subscribe (
          data => {
          this.profile = data;
          this.name = this.profile[0].firstName +' '+this.profile[0].lastName
          this.sex = this.profile[0].sex
          this.email = this.profile[0].email
          this.phone = this.profile[0].tel
          this.Province = this.profile[0].province
          this.district = this.profile[0].district
          this.parish = this.profile[0].parish
          this.zip = this.profile[0].zip
          this.Hnum = this.profile[0].Hnum
          this.img = this.profile[0].img
          },
          err => {
              console.log(err)
          });
             
    }catch (error) {
          console.log(error)
    }
  }
  getUsername(){
    let user = this.local.get('customer').result.username;
    return user;
  }
// getname(){
//     let name = this.profile[0].name
//     return name
//   }
 
}
