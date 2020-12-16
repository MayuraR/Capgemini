import { Component, OnInit } from '@angular/core';
import { RoomReservationService } from '../../../services/room-reservation.service';
import * as moment from 'moment';

@Component({
  selector: 'app-updatereservation',
  templateUrl: './updatereservation.component.html',
  styleUrls: ['./updatereservation.component.css']
})
export class UpdatereservationComponent implements OnInit {

  reservationData:any={};

  response:any 

  display: boolean=false

  constructor( private _reservationService: RoomReservationService) { }

  ngOnInit(): void {
  }

  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDate();
  minDate1 = moment({year: this.year, month: this.month, day: this.day}).format('YYYY-MM-DD');
  minDate2 = moment({year: this.year, month: this.month, day: this.day+1}).format('YYYY-MM-DD');
  
  getReservation(){
    this._reservationService.getReservation(this.reservationData._id)
         .subscribe(
           res => {
             console.log(res)
             this.reservationData=res[0]
             this.display=true;
           },
           err =>{
             console.log(err)
           }
         )
  }

  updateReservation(){
    if(new Date(this.reservationData.checkInDate).getDate()  >  new Date(this.reservationData.checkOutDate).getDate()){
      this.response='Check-In should be lesser than Check-Out'
    }else{
    this._reservationService.updateReservation(this.reservationData)
        .subscribe(
          res =>{
             this.response=res;
             console.log(res)
          },
          err =>{
            this.response = err.message
            console.log(err)
          }
        )
    }

  }

}
