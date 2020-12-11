import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  billData:any={};
  income:any={};
  getBillData:any={};

  response:any ='';

  Add = false;
  Get = false;
  Income = false;
  
  constructor(private _finance : FinanceService, private router : Router) { }

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

  getBill(){
    console.log(this.getBillData);
    this._finance.getBill(this.getBillData.item)
      .subscribe(
        res =>{
          this.response=`bill received`
          console.log(res);
        },
        err=> {
          this.response=err
          console.log(err.message)
        }
      )

  }

  getIncome(){
    console.log(this.income);
    this._finance.getIncome(this.income)
      .subscribe(
        res =>{
          this.response = res
          console.log(res)
        },
        err =>{
          this.response=err.message
          console.log(err.message)
        }
      )
  }

  addBill(){
    console.log(this.billData)
    this._finance.postBill(this.billData)
      .subscribe(
        res =>{
          this.response=`Bill added!`
          console.log(res)
        },
        err =>{
          this.response=err
          console.log(err.message)
        }
      )
  }

}
