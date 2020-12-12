import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  private _url = "http://localhost:3000/members";

  constructor( private http : HttpClient, private router : Router ) { }

  getMember(id:string){
    return this.http.get<any>(`${this._url}/${id}`)
  }
  addMember(member){
    return this.http.post(this._url, member)
  }
  updateMember(member){
    return this.http.patch(`${this._url}/${member._id}`,member)
  }
}
