import { Component, OnInit } from '@angular/core';
import { NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  model:NgbDateStruct;
  date:{year:number,month:number};

  constructor(private calendar:NgbCalendar) { }

  ngOnInit(): void {
  }

}
