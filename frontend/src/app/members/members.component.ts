import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  getMembersData:any={};
  updateMembersData:any={};
  addMembersData:any={};
  response:string='';
  displayTable:boolean=false;


  constructor( private _membersService : MembersService) { }

  ngOnInit(): void {
  }

  
  getMembers(){
    this._membersService.getMember(this.getMembersData._id)
      .subscribe(
        data => {
          if(data[0]==null) {alert('Entry not found')}
          else{
            this.getMembersData = data[0];
            console.log(this.getMembersData)
            this.displayTable=true;
          }
          
        },
        err => {alert(err.message)}
      )
  }
  
  addMembers(){
    this._membersService.addMember(this.addMembersData)
      .subscribe(
        res =>{
          this.response='data added successfully'
          console.log(res)
         
        },
        err=>{
          this.response = err.message;
        }
      )
  }
  updateMembers(){
    this._membersService.updateMember(this.getMembersData)
      .subscribe(
        res => {
          console.log(res);
          this.response=`Details Updated`
        },
        err => {
          console.log(err)
        }
      )
  }
  

}
