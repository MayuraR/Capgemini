import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  getMembersData:any={};
  updateMembersData:any={};
  addMembersData:any={};
  memberId:string=''

  constructor() { }

  ngOnInit(): void {
  }

  getMembers(){}
  addMembers(){}
  updateMembers(){}

}
