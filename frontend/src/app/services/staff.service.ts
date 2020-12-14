import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StaffService {
  
  private _url ='http://localhost:3700';

  constructor( private http : HttpClient ) { }
  
  getAllStaff(){
    return this.http.get(`${this._url}/allStaff`)
  }
  
  getStaffById(object){
    return this.http.get(`${this._url}/staff/${object._id}`)
      
  }

  getStaffByDepartment(object){
    return this.http.get(`${this._url}/staff?department=${object.department}`)
      
  }

  addStaff(object){
    return this.http.post(`${this._url}/staff`, object )
  }

  updateStaff(object){
    return this.http.patch(`${this._url}/staff/${object._id}`, object, {responseType: 'text'} )
  }

  deleteStaff(object){
    return this.http.delete(`${this._url}/staff/${object._id}`, {responseType: 'text'});
  }
}
