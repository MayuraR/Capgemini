import { Component, OnInit } from '@angular/core';
import { RoomReservationService } from '../../../services/room-reservation.service'

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

  findAvailable(){
    if(new Date(this.available.start).getTime()  >  new Date(this.available.end).getTime()){
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
