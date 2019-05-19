import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';
import {RestService} from '../../services/rest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public gs: GlobalService,
              private rest: RestService,
              private router: Router) {
  }

  ngOnInit() {
  }

  public loggedIn() {
    return GlobalService.isLoggedIn();
  }

  public logout() {
    localStorage.removeItem('jwt');
    localStorage.clear();
    this.rest.setHttpOptions();
    this.router.navigateByUrl('/home');
    localStorage.clear();
  }

}
