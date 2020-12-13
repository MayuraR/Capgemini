import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private _url ='http://localhost:3600/inventory';

  constructor( private http : HttpClient) { }

  getInventory(object){
    return this.http.get(`${this._url}/${object.item}`)
      
  }

  deleteInventory(object){
    return this.http.delete(`${this._url}/${object._id}`, {responseType: 'text'});
  }

  addInventory(object){
    return this.http.post(this._url, object )
  }

  updateInventory(object){
    return this.http.patch(`${this._url}/${object._id}`, object )
  }
}
