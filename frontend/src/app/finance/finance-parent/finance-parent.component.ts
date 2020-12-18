import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../auth/authservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-finance-parent',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class FinanceParentComponent implements OnInit {

  constructor( private _auth : AuthserviceService,  private router : Router ) { }

  ngOnInit(): void {
    let decoded:any =this._auth.getRole(this._auth.getToken())
    if (decoded.subject === "customer"){
      alert("Unauthorized")
      this.router.navigate(['/customerHome'])
    }
  }
  

}
