import { Component, OnInit } from '@angular/core';
import { RoomReservationService } from '../../../services/room-reservation.service';

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
