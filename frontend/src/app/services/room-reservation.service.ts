import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomReservationService {

  private _url = "http://localhost:3500";

  constructor(private http : HttpClient) { }

  addReservation(reservation){
    return this.http.post(`${this._url}/room`, reservation)
  }
  updateReservation(reservation){
    return this.http.patch(`${this._url}/room/${reservation._id}`,reservation, { responseType: "text" })
  }
  getReservation(id){
    return this.http.get<any>(`${this._url}/room/${id}`)
  }
  getavailable(data){
    return this.http.get<any>(`${this._url}/available?start=${data.start}&&end=${data.end}`)
  }
  deleteReservation(id){
    return this.http.delete(`${this._url}/room/${id}`, { responseType: "text" } );
  }
}
