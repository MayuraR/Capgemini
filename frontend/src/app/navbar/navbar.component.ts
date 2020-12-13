import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../auth/authservice.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( public _auth : AuthserviceService ) { }

  ngOnInit(): void {
  }

}
