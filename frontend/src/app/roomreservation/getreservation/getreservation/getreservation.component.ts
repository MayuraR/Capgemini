import { Component, OnInit } from '@angular/core';
import { RoomReservationService } from '../../../services/room-reservation.service'

@Component({
  selector: 'app-getreservation',
  templateUrl: './getreservation.component.html',
  styleUrls: ['./getreservation.component.css']
})
export class GetreservationComponent implements OnInit {

  reservationData:any={};

  response:any

  constructor( private _reservationService: RoomReservationService ) { }

  ngOnInit(): void {
  }

  getReservation(){
    this._reservationService.getReservation(this.reservationData._id)
         .subscribe(
           res => {
             
             this.response = 
             `
             Reservation ID: ${res[0]._id}
             Membership ID: ${res[0].membershipId}
             No.Of Children: ${res[0].noOfChildren}
             No. of Adults: ${res[0].noOfAdults}
             Room No: ${res[0].roomNo}
             Check-In : ${res[0].checkInDate}
             Check-Out: ${res[0].checkOutDate}
             `
             console.log(res)
           },
           err =>{
             console.log(err)
           }
         )
  }

}
