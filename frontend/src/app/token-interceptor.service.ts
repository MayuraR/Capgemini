import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthserviceService } from './authservice.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector, private _auth : AuthserviceService){}
  intercept(req, next) {
    
    let token = this._auth.getToken()

   if(token){
      let tokenizedReq = req.clone(
      {
        headers: req.headers.set('Authorization', 'bearer ' + token)
      }
      )
      console.log(tokenizedReq)
      return next.handle(tokenizedReq)}
    
    else{
      console.log('None found')
      return next.handle(req);
  }
}
}
