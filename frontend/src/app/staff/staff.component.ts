import { Component, OnInit } from '@angular/core';
import { StaffService } from '../services/staff.service'

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff:any;
  addData:any={};
  updateData:any={};
  getData:any={}

  constructor( private _staffService : StaffService) { }

  ngOnInit(): void {
    this._staffService.getAllStaff()
      .subscribe(
        res =>{
          this.staff = res
        },
        err =>{
          console.log(err)
        }
      )
      
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
        console.log(err.message)
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
                console.log(err)
              }
            )
         },
         err =>{
           console.log(err)
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
