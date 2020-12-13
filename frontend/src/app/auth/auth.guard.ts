import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from './authservice.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _auth: AuthserviceService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._auth.loggedIn() != null) {
      console.log(`Inside auth guard ${this._auth.loggedIn()}`)
      return true
    } else {
      console.log('false')            
      this._router.navigate(['/login'])
      return false
    }
  }
}
