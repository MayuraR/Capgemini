import { Component, OnInit } from '@angular/core';
import { RoomReservationService } from '../../../services/room-reservation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-available',
  templateUrl: './available.component.html',
  styleUrls: ['./available.component.css']
})
export class AvailableComponent implements OnInit {

  available:any={};

  response:any

  constructor( private _reservationService: RoomReservationService) { }

  ngOnInit(): void {
  }

  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDate();
  minDate1 = moment({year: this.year, month: this.month, day: this.day}).format('YYYY-MM-DD');
  minDate2 = moment({year: this.year, month: this.month, day: this.day+1}).format('YYYY-MM-DD');

  findAvailable(){
    if(new Date(this.available.start).getDate()  >  new Date(this.available.end).getDate()){
      this.response='Check-In should be lesser than Check-Out'
    }else{
      this._reservationService.getavailable(this.available)
      .subscribe(
        res =>{
          if(res.length==0){this.response='no room available'}
          else{
            this.response=res;
            console.log(res)
          }
          
        },
        err=>{
          console.log(err)
        }
      )
    }

  }

}
