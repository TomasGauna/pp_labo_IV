import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
//import { ToastService } from 'angular-toastify';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class LoginPerfilGuard implements CanActivate 
{
  private constructor(private auth: AuthService,/* private _toastService: ToastService */) {}
  
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
  {  
    let ret = false;

    if(this.auth.logueado && this.auth.get_user()?.email === 'atienzotomi@gmail.com')
    {
      ret = true;
    }

    return ret;
  }
}