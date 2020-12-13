import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance-parent',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class FinanceParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
