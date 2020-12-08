import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  billData:any={};
  income:any={};

  Add = false;
  Get = false;
  Income = false;
  
  constructor(private _auth : AuthserviceService, private router : Router) { }

  ngOnInit(): void {
  }

  enableAdd(){
    this.Add = true;
    this.Get = false;
    this.Income = false;
  }

  enableGet(){
    this.Add = false;
    this.Get = true;
    this.Income= false
  }

  enableIncome(){
    this.Add = false;
    this.Get = false;
    this.Income = true;
  }

  getBill(){}

  getIncome(){}

  addBill(){}

}
