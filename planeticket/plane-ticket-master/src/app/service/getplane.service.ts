import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
const urls = 'http://localhost:3000/flight/seat';
@Injectable({
  providedIn: 'root'
})
export class GetplaneService {
  
  flight : any;
  seat:any;
  constructor(private http: HttpClient) { }

  getFlight(){
    return this.http.get<any>('http://localhost:3000/flight/get')
    .pipe(map(data => {
        if (data) {
            this.flight = data;
            console.log(this.flight);
        }
            return this.flight;
        }));
    }

  getAll(){
    return this.flight;
  }
  getSome(id:string){
    console.log('setsome')
    return this.http.get(`${urls}/${id}`).pipe(map(data => {
      if (data) {
          this.seat = data;
          console.log(this.seat);
      }
          return this.seat;
      }));
  }
}
