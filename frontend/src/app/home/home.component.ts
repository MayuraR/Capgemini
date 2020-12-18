import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _auth : AuthserviceService,  private router : Router ) { }

  ngOnInit(): void {
    let decoded:any =this._auth.getRole(this._auth.getToken())
    if (decoded.subject === "customer"){
      alert("Unauthorized")
      this.router.navigate(['/customerHome'])
    }
  }

}
