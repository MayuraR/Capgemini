import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../authservice.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  inventoryData:any={};

  Add = false;
  Get = false;
  Update = false;
  Delete =false;
  constructor(private _auth : AuthserviceService, private router : Router) { }

  ngOnInit(): void {
  }

  enableAdd(){
    this.Add = true;
    this.Get = false;
    this.Update = false;
    this.Delete =false;
  }

  enableGet(){
    this.Add = false;
    this.Get = true;
    this.Update = false;
    this.Delete =false;
  }

  enableUpdate(){
    this.Add = false;
    this.Get = false;
    this.Update = true;
    this.Delete =false;
  }

  enableDelete(){
    this.Add = false;
    this.Get = false;
    this.Update = false;
    this.Delete =true;
  }

  getInventory(){}

  updateInventory(){}

  deleteInventory(){}

  addInventory(){}
}

