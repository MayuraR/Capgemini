import { Component, OnInit } from '@angular/core';
import { RoomReservationService } from '../../../services/room-reservation.service'

@Component({
  selector: 'app-deletereservation',
  templateUrl: './deletereservation.component.html',
  styleUrls: ['./deletereservation.component.css']
})
export class DeletereservationComponent implements OnInit {

  reservationData:any={};

  response:any

  constructor( private _reservationService: RoomReservationService ) { }

  ngOnInit(): void {
  }

  deleteReservation(){
    this._reservationService.deleteReservation(this.reservationData._id)
      .subscribe(
        res => {
          this.response=res;
        },
        err =>{
          this.response=err;
          console.log(err)
        }
      )
  }
}
