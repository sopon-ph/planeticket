import { Component, OnInit } from '@angular/core';
import {GetplaneService } from '../../service/getplane.service'

@Component({
  selector: 'app-showplane',
  templateUrl: './showplane.component.html',
  styleUrls: ['./showplane.component.css']
})
export class ShowplaneComponent implements OnInit {

  constructor(private getPlaneService : GetplaneService) { }

  ngOnInit(): void {
  }

  getPlane(){
    return this.getPlaneService.getAll();
  }

}
