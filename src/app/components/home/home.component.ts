import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationFormComponent} from '../registration-form/registration-form.component';
import {GlobalService} from '../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,
              private gs: GlobalService) {
  }

  ngOnInit() {
  }

  public goToRegister() {
    const isLoggedIn = GlobalService.isLoggedIn();
    const s = isLoggedIn ? '/certificate-request' : '/login';
    this.router.navigateByUrl(s);
  }
}
