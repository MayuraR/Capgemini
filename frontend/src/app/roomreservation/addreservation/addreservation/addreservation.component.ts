import { Component, OnInit } from '@angular/core';
import { RoomReservationService} from '../../../services/room-reservation.service'

@Component({
  selector: 'app-addreservation',
  templateUrl: './addreservation.component.html',
  styleUrls: ['./addreservation.component.css']
})
export class AddreservationComponent implements OnInit {

  addReservationData:any={}
  response:string=''

  constructor( private _roomService : RoomReservationService) { }

  ngOnInit(): void {
  }

  addReservation(){
    this._roomService.addReservation(this.addReservationData)
      .subscribe(
        res =>{
          this.response = 'reservation added check email';
          console.log(res)
        },
        err => {
          this.response =err.message
          console.log(err.message)
        }
      )

  }

}
