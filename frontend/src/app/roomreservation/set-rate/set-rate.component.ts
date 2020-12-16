import { Component, OnInit } from '@angular/core';
import { RoomReservationService } from '../../services/room-reservation.service'

@Component({
  selector: 'app-set-rate',
  templateUrl: './set-rate.component.html',
  styleUrls: ['./set-rate.component.css']
})
export class SetRateComponent implements OnInit {

  reservationData:any={};

  response:any

  constructor( private _reservationService: RoomReservationService ) { }

  ngOnInit(): void {
  }

  setRate(){
    this._reservationService.setRate(this.reservationData)
      .subscribe(
        res => {
            this.response = res
        },
        err => {
          this.response = err.message;
          console.log(err)
        }
      )
  }
}
