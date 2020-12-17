import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-updatemember',
  templateUrl: './updatemember.component.html',
  styleUrls: ['./updatemember.component.css']
})
export class UpdatememberComponent implements OnInit {

  constructor( private _membersService : MembersService, private router : Router ) { }

  getMembersData:any={};
  response:string='';
  display:boolean=false;

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
            this.display=true;
          }
          
        },
        err => {this.response = (err.message)}
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
