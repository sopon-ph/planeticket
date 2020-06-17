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

  constructor(private router: Router, private registerService: SingupService,public local: LocalStorageService) { }

  ngOnInit(): void {
  }

}
