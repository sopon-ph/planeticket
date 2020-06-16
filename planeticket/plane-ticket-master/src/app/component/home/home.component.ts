import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }
}
 