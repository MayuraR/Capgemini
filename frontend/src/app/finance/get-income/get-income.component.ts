import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-get-income',
  templateUrl: './get-income.component.html',
  styleUrls: ['./get-income.component.css']
})
export class GetIncomeComponent implements OnInit {

  income:any={};
  response:string='';

  constructor( private _finance : FinanceService, private router : Router ) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigate(['finance'])
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
}
