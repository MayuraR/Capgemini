import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { RoomReservationService } from '../services/room-reservation.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css']
})
export class CustomerBookingComponent implements OnInit {

  reservationData:any={}

  disableAvailable:boolean=false

  constructor( public _auth : AuthserviceService, private router :Router, private _roomService : RoomReservationService ) { }

  ngOnInit(): void {
  }

  

  book(){
    this.router.navigate(['/customerBooking'])
  }

  addMember(){
    this.router.navigate(['/members/addMember'])
  }
  signUp(){
    this.router.navigate(['/signUp'])
  }
  signIn(){
    this.router.navigate(['/login'])
  }
  goBack(){
    window.history.back()
  }
  checkAvailibility(){
    this._roomService.getavailable({"start" : this.reservationData.checkInDate, "end" : this.reservationData.checkOutDate})
      .subscribe(
        res => {
          if(res.length === 0){
            alert("Rooms not available")
          }
          else{
            this.reservationData.roomNo = res[0];
            this.disableAvailable=true
          }
        },
        err =>{
          console.log(err)
        }
      )
  }
}
