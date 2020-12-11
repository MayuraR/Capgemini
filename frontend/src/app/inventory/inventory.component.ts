import { Component, OnInit } from '@angular/core';
import { InventoryService} from '../inventory.service'
import { Router } from '@angular/router'
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  response:any;
  addInventoryData:any={};
  inventoryData:any={};
  getItem:any={}
  deleteItem:any={}

  Add = false;
  Get = false;
  Update = false;
  Delete =false;
  constructor(private _inventory : InventoryService, private router : Router) { }

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

  getInventory(){
    this._inventory.getInventory(this.getItem)
    .subscribe(
      res =>{
        this.response=res;
        console.log(res);
      },
      err => {
        this.response = err.message;
        console.log(err.message)
      }
    )
  }

  updateInventory(){
    
  }

  deleteInventory(){
    this._inventory.deleteInventory(this.deleteItem)
      .subscribe(
        res=> {
          this.response = res;
          console.log(res)
        },
        err => {
          this.response = err.message;
          console.log(err)
        }
      )
  }

  addInventory(){
    this._inventory.addInventory(this.addInventoryData)
    .subscribe(
      res=> {
        this.response = 'Inventory Added';
        console.log(res)
      },
      err => {
        this.response = err.message;
        console.log(err)
      }
    )
  }
}

