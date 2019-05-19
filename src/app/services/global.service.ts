import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  static isLoggedIn() {
    return localStorage.getItem('jwt') != null;
  }


  public isSuperUser() {
    const helper = new JwtHelperService();
    const role = helper.decodeToken(localStorage.getItem('jwt'))['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    return role === 'secretar';
  }

}
