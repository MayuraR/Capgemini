import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  private _url ='http://localhost:3800';

  constructor( private http : HttpClient, private router : Router ) { }

  getBill(id){
    return this.http.get(`${this._url}/bill/${id}`)
  }

  getIncome(object){
    return this.http.get(`${this._url}/income?start=${object.start}&&end=${object.end}`,{responseType: 'text'})

  }

  postBill(object:any){
    return this.http.post(`${this._url}/bill`, object)
  }
}
