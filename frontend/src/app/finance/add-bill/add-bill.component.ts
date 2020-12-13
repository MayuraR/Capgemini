import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { jsPDF } from 'jspdf';
import { UserOptions } from 'jspdf-autotable'
import 'jspdf-autotable'

interface jsPDFWithPlugins extends jsPDF {
  autoTable : (options :UserOptions) =>jsPDF
}


@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrls: ['./add-bill.component.css']
})
export class AddBillComponent implements OnInit {

  billData:any={};
  response:string='';

  constructor( private _finance : FinanceService, private router : Router ) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['finance'])
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

  generateBill(item:any){
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

