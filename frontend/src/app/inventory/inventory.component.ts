import { Component, OnInit } from '@angular/core';
import { InventoryService} from '../services/inventory.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  display:boolean=false;
  inventory:any;
  addInventoryData:any={};
  updateInventoryData:any={};
  getItem:any={}

  constructor(private _inventory : InventoryService, private router : Router) { }

  ngOnInit(): void {
  }

  assign(item){
    this.updateInventoryData = item;
    console.log(this.updateInventoryData)
  }

  getInventory(){
    this._inventory.getInventory(this.getItem)
    .subscribe(
      res =>{
        this.inventory=res;
        this.display = true
        console.log(res);
      },
      err => {
        console.log(err.message)
      }
    )
  }

  updateInventory(){
    this._inventory.updateInventory(this.updateInventoryData)
    .subscribe(
      res=> {
        this.getInventory()
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
    
  }

  deleteInventory(item){
    
    this._inventory.deleteInventory(item)
      .subscribe(
        res=> {
          this.getInventory()
          console.log(res)
        },
        err => {
          console.log(err)
        }
      )
  }

  addInventory(){
    this._inventory.addInventory(this.addInventoryData)
    .subscribe(
      res=> {
        console.log(res)
        this.addInventoryData={}
        this.getInventory()

      },
      err => {
        console.log(err)
      }
    )
  }
}

