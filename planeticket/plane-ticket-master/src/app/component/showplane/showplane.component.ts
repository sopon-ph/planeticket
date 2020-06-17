import { Component, OnInit, ViewChild } from '@angular/core';
import {GetplaneService } from '../../service/getplane.service'
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

import{ BuyseatComponent } from '../buyseat/buyseat.component'

@Component({
  selector: 'app-showplane',
  templateUrl: './showplane.component.html',
  styleUrls: ['./showplane.component.css']
})
export class ShowplaneComponent implements OnInit {

  @ViewChild(BuyseatComponent)
  buyseat:BuyseatComponent
  data : any
  Tstatus : boolean = true
  Fstatus: boolean = false
  fnum:number

  flight: any
  constructor(private getPlaneService : GetplaneService,public local: LocalStorageService,private router: Router) { 
    this.onLoading();
  }

  ngOnInit(): void {
  }
  onLoading(){
    
    try {
        this.getPlaneService.getFlight().subscribe (
            data => {
            this.flight = data;
            },
            err => {
                console.log(err)
            });
            
    }catch (error) {
        console.log(error)
    }
    
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
    //alert('Buy Complete On' +this.data[num].price+' Bath')
    
  }
  backToShow(){
    this.Tstatus = true
    this.Fstatus = false
  }
}  
  