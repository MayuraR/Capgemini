import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-getmember',
  templateUrl: './getmember.component.html',
  styleUrls: ['./getmember.component.css']
})
export class GetmemberComponent implements OnInit {

  getMembersData:any={};
  response:string='';
  displayTable:boolean=false;

  constructor( private _membersService : MembersService, private router : Router ) { }

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
}
