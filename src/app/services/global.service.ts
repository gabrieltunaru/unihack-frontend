import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  static isLoggedIn() {
    return sessionStorage.getItem('jwt') != null;
  }
}
