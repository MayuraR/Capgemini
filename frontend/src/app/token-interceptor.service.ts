 import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthserviceService } from './authservice.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(){}
  intercept(req, next) {

   let tokenizedReq = req.clone({
     setHeaders: {
       Authorization : `Bearer ${localStorage.getItem('token')}`
     }
   })
   return next.handle(tokenizedReq);
}
}
