import { Component, OnInit } from '@angular/core';
import { FinanceService } from '../../services/finance.service';
import { Router} from '@angular/router';
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

  
  constructor(private _finance : FinanceService, private router : Router) { }

  ngOnInit(): void {
  }

}
