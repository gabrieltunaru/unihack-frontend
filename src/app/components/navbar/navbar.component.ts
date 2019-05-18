import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../services/global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private gs: GlobalService,
              private router: Router) {
  }

  ngOnInit() {
  }

  public loggedIn() {
    return GlobalService.isLoggedIn();
  }

  public logout() {
    sessionStorage.removeItem('jwt');
    this.router.navigateByUrl('/home');
  }

}
