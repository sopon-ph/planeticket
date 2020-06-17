import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {GetplaneService } from '../../service/getplane.service'
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgbDateStruct,NgbCalendar } from '@ng-bootstrap/ng-bootstrap'

import{ BuyseatComponent } from '../buyseat/buyseat.component'

@Component({
  selector: 'app-flightdata',
  templateUrl: './flightdata.component.html',
  styleUrls: ['./flightdata.component.css']
})
export class FlightdataComponent implements OnInit {
  @ViewChild(BuyseatComponent)
  buyseat:BuyseatComponent
  data : any
  Tstatus : boolean = true
  Fstatus: boolean = false
  fnum:number
  model:NgbDateStruct;
  date:{year:number,month:number};
  @Input() flight: any
  start:string = ''
  finish:string = ''

  constructor(private getPlaneService : GetplaneService,public local: LocalStorageService,private router: Router) { }

  ngOnInit(): void {
  }
  getPlane(){
    return this.flight; 
  }
  usePlane(id:number){
    try {
      this.getPlaneService.getSome(this.flight[id].id).subscribe (
          data => {
          this.data = data;
          },
          err => {
              console.log(err)
          });
             
    }catch (error) {
          console.log(error)
    }
    alert('on flight '+this.flight[id].id)
    this.Tstatus = false
    this.Fstatus = true
    this.fnum = id
}
recieveData($e){
    let num = $e;
    this.getPlaneService.buySeat(this.data[num].id).subscribe (
      data => {},
      err => {});
    this.Tstatus = true
    this.Fstatus = false
    //alert('Buy Complete On' +this.data[num].price+' Bath')
    
  }
  backToShow(){
    this.Tstatus = true
    this.Fstatus = false
  }
  // find(){{
  //   this.getPlaneService.findFlight(this.start,this.finish).subscribe (
  //     data => {this.flight = data},
  //     err => {console.log(err)});
  //   this.Tstatus = true
  // }}

}
