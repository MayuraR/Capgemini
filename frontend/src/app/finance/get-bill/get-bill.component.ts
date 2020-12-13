import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { Router} from '@angular/router';
import { jsPDF } from 'jspdf';
import { UserOptions } from 'jspdf-autotable'
import 'jspdf-autotable';

interface jsPDFWithPlugins extends jsPDF {
  autoTable : (options :UserOptions) =>jsPDF
}

@Component({
  selector: 'app-get-bill',
  templateUrl: './get-bill.component.html',
  styleUrls: ['./get-bill.component.css']
})
export class GetBillComponent implements OnInit {

  getBillData:any={};
  response:any ='';

  constructor( private _finance : FinanceService , private router : Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['finance'])
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
          for  (const bill of array[0] ){
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
