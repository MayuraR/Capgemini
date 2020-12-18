import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service';
import { AuthserviceService } from '../auth/authservice.service'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff:any;
  addData:any={"gender" : "Female"};
  updateData:any={};
  getData:any={}

  constructor( private _staffService : StaffService, private _auth : AuthserviceService) { }

  ngOnInit(): void {
    let decoded:any =this._auth.getRole(this._auth.getToken())
    if (decoded.subject === "customer" || decoded.subject === "Receptionist"){
      alert("Unauthorized")
      window.history.back()
    }else{
    this._staffService.getAllStaff()
      .subscribe(
        res =>{
          this.staff = res
        },
        err =>{
          alert(err)
          window.history.back()
        }
      )
    }
      
  }

  assign(member){
    this.updateData = member;
    console.log(this.staff)
  }

  getMember(){
    this._staffService.getStaffByDepartment(this.getData)
    .subscribe(
      res =>{
        this.staff=res;
        console.log(res);
      },
      err => {
        alert(err.message)
      }
    )
  }

  deleteStaff(member){
    this._staffService.deleteStaff(member)
       .subscribe(
         res =>{
           console.log('Deleted')
           this.getMember();
         },
         err =>{
          console.log(err.mmessage)
         }
       )
  }

  addStaff(){
    this._staffService.addStaff(this.addData)
       .subscribe(
         res =>{
           console.log(res)
           
            this._staffService.getAllStaff()
            .subscribe(
              res =>{
                this.staff = res;
              },
              err =>{
                alert(err)
              }
            )
         },
         err =>{
           alert(err)
         }
       )
  }

  
  updateStaff(){
    this._staffService.updateStaff(this.updateData)
    .subscribe(
      res=> {
        
          this._staffService.getAllStaff()
        .subscribe(
          res =>{
            this.staff = res
          },
          err =>{
            console.log(err)
          }
        )

        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
    
  }
 }
