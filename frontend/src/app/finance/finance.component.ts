import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../finance.service';
import { Router } from '@angular/router';
import { jsPDF } from 'jspdf';
import { UserOptions } from 'jspdf-autotable'
import 'jspdf-autotable'

interface jsPDFWithPlugins extends jsPDF {
  autoTable : (options :UserOptions) =>jsPDF
}

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
          async res =>{
          const array:any = []
          await array.push(res)
          if(array.length === 0){this.response = `No bill available`}
          else{this.response=`Check bill in downloads`
          for  (const bill of array ){
              this.generateBill(bill);
              console.log(bill)
          }
        }
 
        },
        err=> {
          this.response=`Error please enter ID again`
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
          this.generateBill(res)
        },
        err =>{
          this.response=err
          console.log(err.message)
        }
      )
  }

  generateBill(item){
    const doc = new jsPDF('portrait','px', 'a4') as jsPDFWithPlugins
      doc.setFontSize(18)
      doc.text(`YOUR BILL!`, 40, 25),
        doc.autoTable({
          startY:40,
          styles: { minCellHeight: 30 },
          head:[['Bill','Details']],
          body: [
            ['Bill ID',item._id],
            ['Member ID', item.memberId],
            ['Date', item.date],
            ['Amount', item.amount],
            ['GST', item.gst],
            ['Grand Total', item.grandTotal],
          ],
        })
        doc.save(`Bill${item._id}`)
  }

}
