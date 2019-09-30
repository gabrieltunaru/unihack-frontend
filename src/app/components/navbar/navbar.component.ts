import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';
import {RestService} from '../../services/rest.service';
import {PrintService} from '../../services/print.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public name;

  constructor(public gs: GlobalService,
              private rest: RestService,
              private router: Router,
              private printService: PrintService) {
    this.name = localStorage.getItem('userName');
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
