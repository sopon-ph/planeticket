import { Component, OnInit, ViewChild } from '@angular/core';
import {GetplaneService } from '../../service/getplane.service'
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap'

import{ BuyseatComponent } from '../buyseat/buyseat.component'
import{FlightdataComponent} from '../flightdata/flightdata.component'
import { from } from 'rxjs';

@Component({
  selector: 'app-showplane',
  templateUrl: './showplane.component.html',
  styleUrls: ['./showplane.component.css']
})
export class ShowplaneComponent implements OnInit {

  @ViewChild(FlightdataComponent)
  getFlight:FlightdataComponent
  astatus : boolean = false
  aflight: any
  start:string = ''
  finish:string = ''


  constructor(private getPlaneService : GetplaneService,public local: LocalStorageService,private router: Router,private calendar:NgbCalendar) { 

  }

  ngOnInit(): void {
  }

  find(){{
          try {
        this.getPlaneService.findFlight(this.start,this.finish).subscribe (
            data => {
              this.aflight = data;
              this.astatus = true 
              
            },
            err => {
                console.log(err)
                alert("can't find data")
            });
               
      }catch (error) {
            console.log(error)
            alert("can't find data")
      }
     
    console.log(this.astatus)
    console.log(this.aflight)
  }}
}  
  