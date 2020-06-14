import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  sts:number = 1;
  alldata: any;
  term: string;
  token: string;
  constructor(private router: Router, public local: LocalStorageService) { }

  ngOnInit(): void {
  }
 

  Logout(){
    this.local.remove('customer');
    this.router.navigate(['/login']);
  }
  getUsername(){
    let user = this.local.get('customer').result.username;
    return user;
  }
}
