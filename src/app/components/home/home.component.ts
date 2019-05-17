import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationFormComponent} from '../registration-form/registration-form.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public goToRegister() {
    this.router.navigateByUrl('/register');
  }
}
