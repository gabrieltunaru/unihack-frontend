import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  public loggedIn() {
    return sessionStorage.getItem('jwt') != null;
  }

  public logout() {
    sessionStorage.removeItem('jwt');
  }

}
