import { Component, OnInit, NgZone } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { RoomReservationService } from '../services/room-reservation.service'
import { Router } from '@angular/router';
import { ICustomWindow, WindowRefService } from '../services/window-ref.service';
import * as moment from 'moment';

@Component({
  selector: 'app-customer-booking',
  templateUrl: './customer-booking.component.html',
  styleUrls: ['./customer-booking.component.css']
})
export class CustomerBookingComponent implements OnInit {

  reservationData:any={}

  disableAvailable:boolean=false;

  disableBooking:boolean=true;

  rate:number = 100;



  response:string=''

  private _window: ICustomWindow;

  public rzp: any;  

  constructor( public _auth : AuthserviceService, private router :Router, private _roomService : RoomReservationService, private zone: NgZone, private winRef: WindowRefService) { 
    this._window = this.winRef.nativeWindow;
  }
  initPay(): void {

    this._roomService.getRate(this.reservationData)
      .subscribe(
        res => {
          this.rate=parseInt(res);
          this.getTotal();
          this.payWithRazor();
        },
        err =>{
          console.log(err)
        }
      )

    
  }

  payWithRazor(){
    let options: any = {
      key: 'rzp_test_WuIJOtLs8dE4rI', // add razorpay key here
      name: 'Reservation',
      description: 'Reservation Fee',
      amount:this.rate,
      prefill: {
        name: 'Mayura',
        email: 'hotelmanagement655@gmail.com', // add your email id
      },
      notes: {},
      theme: {
        color: '#3880FF'
      },
      handler: this.paymentHandler.bind(this),
      modal: {
        ondismiss: (() => {
          this.zone.run(() => {
            alert("Failed");
            window.location.reload();
          })
        })
      
      
      }
    };

    this.rzp = new this.winRef.nativeWindow['Razorpay'](options);
    this.rzp.open();
  }

  paymentHandler(res: any) {
    this.zone.run(() => {
      this.addReservation();
      this.goBack();
    });
  }

  ngOnInit(): void {
  }

  //set min and max date
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDate();
  minDate1 = moment({year: this.year, month: this.month, day: this.day}).format('YYYY-MM-DD');
  minDate2 = moment({year: this.year, month: this.month, day: this.day+1}).format('YYYY-MM-DD');

  getTotal(){
   this.rate= this.rate * 100 * (new Date(this.reservationData.checkOutDate).getTime() -new Date(this.reservationData.checkInDate).getTime())/(24 * 60 * 60 * 1000);
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
    if(new Date(this.reservationData.checkInDate).getTime() >= new Date(this.reservationData.checkOutDate).getTime()){
      alert('Check-In should be lesser than Check-Out')
    }
    else{
    this._roomService.getavailable({"start" : this.reservationData.checkInDate, "end" : this.reservationData.checkOutDate})
      .subscribe(
        res => {
          if(res.length === 0){
            alert("Rooms not available")
          }
          else{
            this.reservationData.roomNo = res[0];
            this.disableAvailable=true;
            this.disableBooking=false;
            this.getRate(this.reservationData)
          }
        },
        err =>{
          console.log(err)
        }
      )
    }
  }

  addReservation(){
    this.disableBooking=true;
    this._roomService.addReservation(this.reservationData)
      .subscribe(
        res =>{
          alert('Reservation added check your email');
          this.goBack();
        },
        err => {
          this.response =err.message
          alert(err.message)
        }
      )
    }

    getRate(object){
      this._roomService.getRate(object)
        .subscribe(
          res => {
              this.rate = parseFloat(res)
          },
          err => {
              console.log(err)
          }
        )

    }
}
