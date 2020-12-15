import { Component, OnInit } from '@angular/core';
import { MembersService } from '../../services/members.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  addMembersData:any={};
  response:string='';

  constructor( private _membersService : MembersService ) { }

  ngOnInit(): void {
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

  goBack(){
    window.history.back()
  }

}
